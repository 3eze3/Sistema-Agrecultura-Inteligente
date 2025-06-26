import express from 'express'
import http from 'http'
import { WebSocketServer } from 'ws'
import { initSerial } from './serial/serial.mjs'
import getLecturaRouter from './routers/get-lecturas.mjs'
import postLecturasRouter from './routers/post-lecturas.mjs'
import cors from 'cors'

const app = express()
app.disable('x-powered-by')
app.use(cors())
app.use(express.json())

const server = http.createServer(app)
const wss = new WebSocketServer({ server })
export const clients = new Set()

// 
wss.on('connection', (ws) => {
	console.log('Cliente WebSocket conectado')
	clients.add(ws)

	ws.on('close', () => {
		console.log('Cliente WebSocket desconectado')
		clients.delete(ws)
	})
})

initSerial(clients)
// Rutas
app.use('/lecturas', getLecturaRouter)
app.use('/lecturas', postLecturasRouter)

//
app.use((req, res) => {
	res.status(404).send('<h1>No existe la ruta!</h1>')
})
//
const PORT = process.env.PORT
// app.listen(PORT, () => console.log(`Api corriendo en http://localhost:${PORT}`))
server.listen(PORT, () =>
	console.log(`Api corriendo en http://localhost:${PORT}`)
)
