import { Router } from 'express'
import { saveLecturaDB } from '../services/lecturas.mjs'

const router = Router()

router.post('/', async (req, res) => {
	try {
		const { timestap, porcentaje, status } = req.body
		const nueva = await saveLecturaDB({ timestap, porcentaje, status })
		res.status(201).json(nueva)
	} catch (err) {
		console.error('Error al guardar lectura:', err)
		res.status(500).json({ error: 'Error internode servidor' })
	}
})

export default router
