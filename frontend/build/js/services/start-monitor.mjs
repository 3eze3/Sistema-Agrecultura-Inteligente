import { changeState } from '../animations/change-state-btns.mjs';
import { resetStatus } from '../dom-interaction/reset-status.mjs';
import { updateStatus } from '../dom-interaction/update-status.mjs';
import { updateTable } from '../dom-interaction/update-table.mjs';
import { updateSpeedmeter } from '../dom-interaction/update-speedmeter.mjs';
import { updateBarAvarage } from '../dom-interaction/update-bar-avarage.mjs';
export function startMonitor() {
    const $btnStart = document.getElementById('start-monitoring-parcela');
    if (!$btnStart)
        return;
    let socket = null;
    let isMonitoring = false;
    const connectWebSocket = () => {
        socket = new WebSocket('ws://localhost:4000');
        socket.onopen = () => console.log('WebSocket conectado');
        socket.onmessage = (event) => {
            const lectura = JSON.parse(event.data);
            updateStatus(lectura.porcentaje);
            updateTable(lectura);
            updateSpeedmeter(lectura.porcentaje);
            updateBarAvarage(lectura.porcentaje);
        };
        socket.onclose = () => console.log('WebSocket desconectado');
        socket.onerror = (err) => console.error('WebSocket error:', err);
    };
    const disconnectWebSocket = () => {
        if (socket && socket.readyState === WebSocket.OPEN) {
            socket.close();
        }
        socket = null;
        $btnStart.setAttribute('aria-pressed', 'false');
        resetStatus();
    };
    $btnStart.addEventListener('click', (e) => {
        e.stopPropagation();
        changeState();
        isMonitoring = !isMonitoring;
        if (isMonitoring) {
            connectWebSocket();
            $btnStart.setAttribute('aria-pressed', 'true');
        }
        else {
            disconnectWebSocket();
            $btnStart.setAttribute('aria-pressed', 'false');
        }
    });
}
