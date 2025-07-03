import { updateBgs } from '../animations/update-bg-cards.mjs';
function getRadianes(percent) {
    return (percent * Math.PI) / 100;
}
export function updateSpeedmeter(humidityPercent) {
    const $needle = document.querySelector('.speedmeter__needle ');
    const $percentLabel = document.querySelector('.speedmeter__percent ');
    const radianes = getRadianes(humidityPercent);
    const gradosLine = Math.cos(radianes) * -90;
    const gradosLabel = Math.cos(radianes) * 90;
    $needle.style.rotate = `${gradosLine}deg`;
    $percentLabel.style.rotate = `${gradosLabel}deg`;
    $percentLabel.textContent = `${humidityPercent}%`;
    updateBgs(humidityPercent);
}
