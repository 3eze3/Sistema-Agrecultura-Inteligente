import { changeState } from '../animations/change-state.mjs';
export function startMonitor() {
    const $btnStart = document.getElementById('start-monitoring-parcela');
    $btnStart.addEventListener('click', (e) => {
        e.stopPropagation();
        changeState();
    });
}
