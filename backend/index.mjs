import express from 'express'
import http from 'http'
import cors from 'cors'
import { WebSocketServer } from 'ws'
import { initSerial } from './serial/serial.mjs'
import getLecturaRouter from './routers/get-lecturas.mjs'
import getLecturasFilterByFechaRouter from './routers/get-lecturas-by-fecha.mjs'

const app = express()
app.disable('x-powered-by')
app.use(cors())
app.use(express.json())

const server = http.createServer(app)
const wss = new WebSocketServer({ server })
export const clients = new Set()

wss.on('connection', (ws) => {
	console.log('\n[*] Cliente WebSocket conectado!\n')
	clients.add(ws)

	ws.on('close', () => {
		console.log('\n[+] Cliente WebSocket desconectado\n')
		clients.delete()
	})
})

initSerial(clients)
app.use('/lecturas', getLecturaRouter)
app.use('/lecturasFechas', getLecturasFilterByFechaRouter)

app.use((req, res) => {
	res.status(404).send('<h1>No existe la ruta tontin!</h1>')
})
const PORT = process.env.PORT
server.listen(PORT, () =>
	console.log(`Api corriendo en http://localhost:${PORT}`)
)
