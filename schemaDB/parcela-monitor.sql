--- Crear la talba 
CREATE TABLE IF NOT EXISTS lecturas (
  id SERIAL PRIMARY KEY,
  timestamp TIMESTAMP NOT NULL,
  porcentaje INTEGER NOT NULL,
  status VARCHAR(10) NOT NULL
);

SELECT * FROM lecturas;

--- Filtrado por fechas sip.
SELECT porcentaje,timestamp FROM lecturas
WHERE timestamp >= '2025-06-27 16:30:00'  ---  (Donde?? Logica)
  AND timestamp <= '2025-06-27 16:45:00'
ORDER BY timestamp ASC; --- (Quiero que el orden que es muester el resultado de arriba sea en: X,Y,Z...)

--- Un clear de la tabal (Reniciar los datos y los id tambine)
TRUNCATE TABLE lecturas RESTART IDENTITY;