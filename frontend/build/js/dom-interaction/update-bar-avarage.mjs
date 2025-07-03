import { updateBgs } from '../animations/update-bg-cards.mjs';
const statsHumidity = [];
export function updateBarAvarage(humidityPercent) {
    statsHumidity.push(humidityPercent);
    if (statsHumidity.length > 12) {
        statsHumidity.shift();
    }
    if (statsHumidity.length === 12) {
        let averageHumidity = statsHumidity.reduce((a, b) => a + b) / statsHumidity.length;
        updateBar(averageHumidity);
    }
}
function updateBar(averageHumidity) {
    const $bar = document.querySelector('.barAvarage__bar');
    const $percent = document.querySelector('.barAvarage__percent');
    $bar.style.height = `${averageHumidity}%`;
    $bar.style.backgroundPositionY = `${averageHumidity}%`;
    $percent.textContent = `${averageHumidity.toFixed(1)}%`;
    $percent.style.bottom = `${averageHumidity - 3}%`;
    updateBgs(averageHumidity);
}
