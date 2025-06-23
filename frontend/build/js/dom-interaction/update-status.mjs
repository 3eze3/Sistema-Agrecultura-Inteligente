export function updateStatus(humidityPercent) {
    const $head = document.querySelector('.parcela__head');
    const $gota = document.querySelector('.parcela__gota');
    const $parcelaType = document.querySelector('.parcela__type');
    const $percent = document.querySelector('.parcela__percent');
    let statusClass;
    if (humidityPercent < 30) {
        statusClass = 'is-low';
        $percent.textContent = `${humidityPercent.toString()}%`;
        $parcelaType.textContent = `Low`;
    }
    else if (humidityPercent < 50) {
        statusClass = 'is-medium';
        $percent.textContent = `${humidityPercent.toString()}%`;
        $parcelaType.textContent = `Medium`;
    }
    else {
        statusClass = 'is-high';
        $parcelaType.textContent = `High`;
        $percent.textContent = `${humidityPercent.toString()}%`;
    }
    $head?.classList.remove('is-low', 'is-medium', 'is-high');
    $gota?.classList.remove('is-low', 'is-medium', 'is-high');
    $head?.classList.add(statusClass);
    $gota?.classList.add(statusClass);
}
