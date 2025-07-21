# 🌱 Sistema de Agricultura Inteligente

**Proyecto IoT full‑stack para monitoreo y análisis de la humedad del suelo**, que integra hardware (Arduino Nano), backend en Node.js, persistencia en PostgreSQL y frontend con visualizaciones interactivas.

---

## 🚀 Tabla de Contenidos

1. [Descripción](#descripción)
2. [Características Principales](#características-principales)
3. [Tecnologías](#tecnologías)
4. [Arquitectura y Estructura](#arquitectura-y-estructura)
5. [Instalación y Configuración](#instalación-y-configuración)
6. [Uso y Flujo de Trabajo](#uso-y-flujo-de-trabajo)
7. [API REST](#api-rest)
8. [WebSocket (Datos en Tiempo Real)](#websocket-datos-en-tiempo-real)
9. [Capturas y Demo](#capturas-y-demo)
10. [Pruebas y Validaciones](#pruebas-y-validaciones)
11. [Mejoras Futuras](#mejoras-futuras)
12. [Contribuciones](#contribuciones)
13. [Licencia](#licencia)
14. [Autor](#autor)

---

## 📖 Descripción

Se trata de un sistema de **monitorización inteligente de la humedad del suelo** que permite:

- Capturar lecturas de un **sensor capacitivo** conectado a un Arduino Nano.
- Transmitir datos en tiempo real al navegador mediante **WebSocket**.
- Almacenar históricos en **PostgreSQL** para consultas posteriores.
- Exponer una **API REST** para filtrar lecturas por rangos de fecha.
- Visualizar datos en tiempo real y gráfica histórica con **Highcharts** (o Chart.js).

Este proyecto demuestra un flujo **end‑to‑end** completo: hardware → backend → base de datos → frontend.

---

## ✨ Características Principales

- 📡 **Telemetría en Tiempo Real**: lecturas cada 7 segundos con WebSocket.
- 🗄️ **Persistencia Histórica**: almacenamiento en PostgreSQL con timestamp preciso.
- 📊 **Visualización Dinámica**: gráficas de líneas interactivas con formato `HH:mm:ss`.
- ⚙️ **API RESTful**: filtros por rango de fechas (`desde` / `hasta`).
- 💡 **Alertas Locales**: LEDs indicador rojo/verde según nivel de humedad.

---

## 🛠️ Tecnologías

| Capa              | Tecnologías                                                                  |
| ----------------- | ---------------------------------------------------------------------------- |
| **Hardware**      | Arduino Nano, sensor capacitivo (A0), LEDs (D2, D3)                          |
| **Backend**       | Node.js, Express, ws (WebSocket), serialport, pg (PostgreSQL), dotenv        |
| **Base de Datos** | PostgreSQL v13+, tabla `lecturas` (id, timestamp, porcentaje, status)        |
| **Frontend**      | HTML5, SCSS, JavaScript ESModules, Highcharts (o Chart.js), WebSocket client |

---

## 🏗️ Arquitectura y Estructura del Repositorio

```bash
📦proyecto-agricultura-inteligente
 ┣ 📂backend                # Servidor Node.js + WebSocket + serial
 ┃ ┣ 📂config               # Conexión a PostgreSQL y variables de entorno
 ┃ ┣ 📂routers              # Rutas REST (/lecturas, /lecturasFechas)
 ┃ ┣ 📂services             # Lógica de negocio y acceso a DB
 ┃ ┣ 📂serial               # Módulo de lectura serial y emisión de eventos
 ┃ ┗ 📜server.js            # Punto de entrada, configuración de Express + WS
 ┣ 📂frontend               # Cliente web estático
 ┃ ┣ 📂css                  # SCSS compilado
 ┃ ┣ 📂js                   # Módulos ES: fetch, WebSocket, gráficos
 ┃ ┗ 📜index.html           # Dashboard y sección de gráficas
 ┣ 📂docs                   # Diseño en Figma, diagramas, documentación extra
 ┣ 📜.env.example           # Plantilla de variables de entorno
 ┣ 📜README.md              # Documentación principal
 ┗ 📜LICENSE                # Licencia MIT
```

---

## ⚙️ Instalación y Configuración

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/tuUsuario/sistema-agricultura-inteligente.git
   cd sistema-agricultura-inteligente
   ```

2. **Configurar variables**

   - Copia `.env.example` a `.env` y ajusta:
     ```ini
     PORT=4000
     DATABASE_URL=postgres://usuario:password@localhost:5432/tuBD
     SERIAL_PORT=/dev/ttyUSB0    # o COM7 en Windows
     BAUD_RATE=9600
     ```

3. **Instalar dependencias y ejecutar el backend**

   ```bash
   cd backend
   npm install
   npm run dev              # Nodemon o similar
   ```

4. **Abrir el frontend**

   - Conecta tu Arduino y abre `frontend/index.html` directamente, o bien sirve con un servidor estático:
     ```bash
     cd frontend
     npx http-server .        # en el puerto por defecto
     ```

---

## 🚀 Uso y Flujo de Trabajo

1. **Arranca el sensor**: sube el sketch de Arduino Nano (ver `/docs/arduino.ino`).
2. **Inicia el backend**: lectura serial → WebSocket → HTTP.
3. **Abre el dashboard**: verás lecturas en tiempo real y puedes filtrar histórico.
4. **Filtrar histórico**: ingresa fechas de inicio y fin, pulsa “Cargar datos” para ver la gráfica.

---

## 🔗 API REST

- `GET /lecturas` → todas las lecturas.
- `GET /lecturasFechas?desde=YYYY-MM-DDTHH:mm&hasta=YYYY-MM-DDTHH:mm` → lecturas en rango.

**Ejemplo**:

```
GET http://localhost:4000/lecturasFechas?desde=2025-06-20T08:00&hasta=2025-06-27T08:00
```

Respuesta:

```json
[{
  "porcentaje": 74,
  "timestamp": "2025-06-27T21:37:59.713Z"
}, …]
```

---

## 🌐 WebSocket (Tiempo Real)

- Conéctate a `ws://localhost:4000`.
- Recibirás lecturas en formato JSON `{ porcentaje, timestamp, status }` cada vez que llegue un nuevo dato.

---

## 📸 Capturas y Demo

<div align="center">
  <img src="./images/log-in.png" width="500" alt="Pantalla de inicio de sesión"/>
  <p><em>Pantalla de inicio de sesión</em></p>
  
  <img src="./images/monitor.png" width="500" alt="Panel de monitoreo del sistema"/>
  <p><em>Panel de monitoreo del sistema</em></p>

  <img src="./images/plot-web.png" width="500" alt="Gráficos de datos en tiempo real"/>
  <p><em>Gráficos de datos en tiempo real</em></p>

  <img src="./images/graficos.png" width="500" alt="Análisis visual con múltiples métricas"/>
  <p><em>Análisis visual con múltiples métricas</em></p>
</div>

---

## 🧪 Pruebas y Validaciones

- **Validación de rango de fechas**: aseguramos que `desde < hasta`.
- **Eliminación de duplicados**: usamos `removeDuplicates()` para un único punto por timestamp.
- **Pruebas unitarias**: (añadir tests con Jest o similar para módulos críticos).

---

## 🤝 Contribuciones

¡Contribuciones bienvenidas!

1. Fork del proyecto
2. Crea una rama `feature/mi-mejora`
3. Commit de tus cambios
4. Pull Request describiendo tu propuesta

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Ver `LICENSE` para más detalles.

---

## 👤 Autor

**Ezequiel Cordova**

---

> _"La curiosidad es el motor de la innovación: nunca dejes de explorar y aprender."_
