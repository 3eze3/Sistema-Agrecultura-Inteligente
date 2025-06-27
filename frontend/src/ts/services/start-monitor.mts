// import { changeState } from '../animations/change-state.mjs'

// export function startMonitor() {
// const $btnStart = document.getElementById(
// 'start-monitoring-parcela'
// ) as HTMLButtonElement

// $btnStart.addEventListener('click', (e) => {
// e.stopPropagation()
// changeState()
// })
// }
// import { changeState } from '../animations/change-state.mjs'
// import { updateStatus } from '../dom-interaction/update-status.mjs'
// import { updateTable } from '../dom-interaction/update-table.mjs'

// export function startMonitor() {
// 	const $btnStart = document.getElementById('start-monitoring-parcela')
// 	// const $porcentaje = document.querySelector('.parcela__percent')
// 	// const $estado = document.querySelector('.parcela__type')
// 	// const $cabeza = document.querySelector('.parcela__head')
// 	// const $gota = document.querySelector('.parcela__gota')

// 	$btnStart?.addEventListener('click', (e) => {
// 		e.stopPropagation()
// 		changeState()

// 		const socket = new WebSocket('ws://localhost:4000')

// 		socket.addEventListener('open', () => {
// 			console.log('WebSocket activo')
// 		})

// 		socket.addEventListener('message', (event) => {
// 			const lectura = JSON.parse(event.data)
// 			const porcentaje = lectura.porcentaje
// 			updateStatus(porcentaje)
// 			updateTable(lectura)

// 			// $porcentaje?.textContent = `${porcentaje}%`
// 			// $estado?.textContent = nivel.charAt(0).toUpperCase() + nivel.slice(1)

// 			// $cabeza?.classList.remove('low', 'medium', 'high')
// 			// $gota?.classList.remove('low', 'medium', 'high')

// 			// $cabeza?.classList.add(nivel)
// 			// $gota?.classList.add(nivel)
// 		})
// 	})
// }

import { changeState } from '../animations/change-state.mjs'
import { resetStatus } from '../dom-interaction/reset-status.mjs'
import { updateStatus } from '../dom-interaction/update-status.mjs'
import { updateTable } from '../dom-interaction/update-table.mjs'
import { updateSpeedmeter } from '../dom-interaction/update-speedmeter.mjs'
import { updateBarAvarage } from '../dom-interaction/update-bar-avarage.mjs'

export function startMonitor() {
	const $btnStart = document.getElementById('start-monitoring-parcela')
	if (!$btnStart) return

	let socket: WebSocket | null = null
	let isMonitoring = false

	const connectWebSocket = () => {
		socket = new WebSocket('ws://localhost:4000')

		socket.onopen = () => console.log('WebSocket conectado')

		socket.onmessage = (event) => {
			const lectura = JSON.parse(event.data)
			console.log(lectura)
			updateStatus(lectura.porcentaje)
			updateTable(lectura)
			updateSpeedmeter(lectura.porcentaje)
			updateBarAvarage(lectura.porcentaje)
		}

		socket.onclose = () => console.log('WebSocket desconectado')

		socket.onerror = (err) => console.error('WebSocket error:', err)
	}

	const disconnectWebSocket = () => {
		if (socket && socket.readyState === WebSocket.OPEN) {
			socket.close()
		}
		socket = null
		$btnStart.setAttribute('aria-pressed', 'false')
		resetStatus()
	}

	$btnStart.addEventListener('click', (e) => {
		e.stopPropagation()
		changeState()

		isMonitoring = !isMonitoring
		if (isMonitoring) {
			connectWebSocket()
			$btnStart.setAttribute('aria-pressed', 'true')
		} else {
			disconnectWebSocket()
			$btnStart.setAttribute('aria-pressed', 'false')
		}
	})
}
