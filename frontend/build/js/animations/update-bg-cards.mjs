export function updateBgs(humidityPercent) {
    const $graphicMeter = document.querySelectorAll('.modal__graphic');
    $graphicMeter.forEach((graphic) => {
        graphic.style.backgroundPositionX = `${humidityPercent}%`;
    });
}
