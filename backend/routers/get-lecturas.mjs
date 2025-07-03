import { Router } from 'express'
import { getLecturasDB } from '../services/lecturas.mjs'

const router = Router()

router.get('/', async (_req, res) => {
	try {
		const all = await getLecturasDB()
		res.json(all)
	} catch (err) {
		console.error('Error al obtener lecturas:', err)
		res.status(500).json({ error: 'No se pudieron obtener lecturas' })
	}
})

export default router