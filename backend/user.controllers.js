import { pool } from "../database/connection.js";

export const insertMetrica = async (req, res) => {
  try {
    const { humedad, estadoSuelo } = req.body;

    if (typeof humedad !== 'number' || !estadoSuelo) {
      return res.status(400).json({ message: 'Datos inválidos' });
    }

    const query = `
      INSERT INTO tablaMetrica (humedad, estadoSuelo)
      VALUES ($1, $2)
      RETURNING *;
    `;

    const { rows } = await pool.query(query, [humedad, estadoSuelo]);

     return res.status(201).json({ message: 'Datos insertados correctamente', data: rows[0] });
  } catch (error) {
    console.error('Error insertando métrica:', error);
    return res.status(500).json({ message: 'Error del servidor' });
  }
};