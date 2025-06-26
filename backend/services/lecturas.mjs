import { pool } from '../config/db.mjs'
/**
 * Guarda una lectura en PostgreSQL
 * @param {{  porcentaje: number, timestap: Date, status: string }} lectura
 */

export async function saveLecturaDB({ timestap, porcentaje, status }) {
	const query = `
    INSERT INTO lecturas (timestamp, porcentaje, status)
    VALUES ($1, $2, $3)
    RETURNING *
  `
	const values = [timestap, porcentaje, status]
	const { rows } = await pool.query(query, values)
	return rows[0]
}

export async function getLecturasDB() {
	const { rows } = await pool.query('SELECT * FROM lecturas ORDER BY id ASC')
	return rows
}
