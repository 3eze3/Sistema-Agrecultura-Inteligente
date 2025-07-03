import { SerialPort } from 'serialport'
import { ReadlineParser } from '@serialport/parser-readline'
import { saveLecturaDB } from '../services/lecturas.mjs'
import dotenv from 'dotenv'
dotenv.config()
const portName = process.env.PORT_NAME
const baudRate = parseInt(process.env.BAUD_RATE, 10)
export function initSerial(clients) {
	const port = new SerialPort({ path: portName, baudRate })
	const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))

	port.on('open', () => {
		console.log(`Puerto serie abierto en ${portName} @ ${baudRate} baudios`)
	})

	port.on('error', (err) => {
		console.error('Error en puerto serie:', err.message)
	})

	parser.on('data', async (line) => {
		const match = line.match(/Cruda:\s*(\d+)\s*-->\s*(\d+)%/)
		if (!match) return console.warn('Linea no coincide ' + line)
		const timestap = new Date()
		const porcentaje = parseInt(match[2], 10)
		const status = porcentaje < 30 ? 'seco' : 'Humedo'
		try {
			const nuevaLectura = await saveLecturaDB({ porcentaje, timestap, status })
			console.log(`Lectura guardada ${nuevaLectura} SUI`)
			const payload = JSON.stringify(nuevaLectura)
			for (const client of clients) {
				if (client.readyState === 1) {
					client.send(payload)
				}
			}
		} catch (error) {
			console.error('Error al guardar los datos... ' + error)
		}
	})
	return port
}
