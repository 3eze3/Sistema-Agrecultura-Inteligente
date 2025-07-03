import { Router } from 'express'
import { getLecturasByFechas } from '../services/lecturas.mjs'

const router = Router()

router.get('/', async (req, res) => {
	try {
		const start = req.query.datestart
		const end = req.query.dateend
		const all = await getLecturasByFechas(start, end)
		res.json(all)
	} catch (err) {
		console.error('Error al obtener lecturas:', err)
		res.status(500).json({ error: 'No se pudieron obtener lecturas' })
	}
})

export default router
