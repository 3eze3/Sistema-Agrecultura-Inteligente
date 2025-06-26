# Sistema de Agricultura Inteligente

## Descripción

Sistema IoT para monitoreo de humedad de suelo que conecta un Arduino Nano a un backend en Node.js, persiste datos en PostgreSQL y presenta lecturas en tiempo real y gráficas históricas en el frontend.

- Captura de humedad de suelo con sensor capacitivo.
- Alertas visuales locales (LEDs rojo/verde) según nivel de humedad.
- Transmisión de datos vía puerto serie a Node.js.
- Almacenamiento de lecturas en PostgreSQL con timestamp automático.
- API REST para consultas históricas y WebSocket para datos en tiempo real.
- Frontend interactivo con HTML5, SCSS, JavaScript (ESModules) y Chart.js.

## Objetivos Personales

- [ ] Dominar la lectura de sensores analógicos con Arduino y conversión a porcentajes.
- [ ] Implementar comunicación bidireccional: hardware → software (Serial) y software → frontend (WebSocket).
- [ ] Configurar y optimizar PostgreSQL para almacenamiento de series temporales.
- [ ] Diseñar y exponer una API RESTful escalable con Express.
- [ ] Crear visualizaciones dinámicas e interactivas con Chart.js.
- [ ] Desplegar y documentar un proyecto completo en GitHub para portafolio.

## Tecnologías 🔧

### Hardware
- **Arduino Nano** con sensor de humedad capacitivo y LEDs de estado.
- **Sensor de humedad** analógico (A0).
- **LEDs** (pines D2 y D3) para alertas locales.

### Backend
- **Node.js** (v20+).
- **Express** para rutas REST.
- **serialport** para lectura de puerto serie.
- **pg** para pool de conexiones a PostgreSQL.
- **ws** para servidor WebSocket.
- **dotenv** para cargar variables de entorno.

### Base de datos
- **PostgreSQL** (v13+).
- Tabla `lecturas` con columnas: `id`, `timestamp`, `porcentaje`, `status`.

### Frontend
- **HTML5**
- **SCSS** para estilos modulares y variables.
- **JavaScript ESModules**
- **Chart.js** para gráficas de línea en tiempo real e históricas.

## Estructura del proyecto

```bash
/backend          # Código del servidor (API, WebSockets, Serial)
  ├─ db/          # pool de PostgreSQL y diagnósticos
  ├─ routers/     # Rutas GET/POST para lecturas
  ├─ services/    # Lógica de negocio y acceso a BD
  └─ serial/      # Módulo de lectura serie y emisión WebSocket
/frontend         # Código estático: HTML, CSS, JS
  ├─ css/         # Archivos compilados de SCSS
  └─ js/          # Módulos ES para WebSocket y Chart.js
```

## Prerrequisitos

- Arduino IDE para cargar el sketch en la placa.
- Node.js y npm instalados.
- PostgreSQL corriendo localmente.
- Variables de entorno configuradas en `.env`.

## Instalación y ejecución

1. **Clonar el repositorio**
   ```bash
git clone <URL_DEL_REPOSITORIO>
cd proyecto-agricultura-inteligente
```

2. **Configurar variables de entorno** en `.env` en la raíz:
   ```ini
# Puerto serie y baudios\ nPORT_NAME=COM7
BAUD_RATE=9600

# Base de datos PostgreSQL\ nDATABASE_URL=postgres://usuario:contraseña@localhost:5432/parcelamonitor
APP_PORT=4000
```

3. **Instalar dependencias y ejecutar backend**
   ```bash
cd backend
npm install
npm run dev
```

4. **Abrir frontend**
   - Abrir `frontend/index.html` en el navegador (o servir con un servidor estático)

## API REST (Ejemplos)

- **GET /lecturas** — Obtener todas las lecturas.
- **GET /lecturas?desde=YYYY-MM-DD&hasta=YYYY-MM-DD** — Filtrar por rango de fechas.
- **POST /lecturas** — Insertar lectura manual (útil para pruebas):
  ```json
  {
    "raw": 512,
    "porcentaje": 50,
    "timestamp": "2025-06-26T12:00:00Z",
    "status": "medium"
  }
  ```

## Uso

- Haz clic en **Start** para iniciar el monitoreo en vivo vía WebSocket.
- Visualiza lecturas en tiempo real en el dashboard principal.
- Accede al historial interactivo desde la sección de gráficas y selecciona rango de fechas.

## Contribuciones

¡Contribuciones y forks bienvenidos!
1. Crea un fork.
2. Crea tu rama de feature (`git checkout -b feature-nombre`).
3. Haz commit de tus cambios (`git commit -m 'Agrega feature'`).
4. Push a tu rama (`git push origin feature-nombre`).
5. Abre un Pull Request.

## Licencia

MIT © 2025 Ezequiel

