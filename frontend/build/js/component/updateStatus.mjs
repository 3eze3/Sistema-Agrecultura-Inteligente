export function updateStatus(humidityPercent) {
    const $head = document.querySelector('.parcela__head');
    const $gota = document.querySelector('.parcela__gota');
    const $percent = document.querySelector('.parcela__percent');
    let statusClass;
    if (humidityPercent < 30) {
        statusClass = 'is-low';
        $percent.textContent = `${humidityPercent.toString()}%`;
    }
    else if (humidityPercent < 50) {
        statusClass = 'is-medium';
        $percent.textContent = `${humidityPercent.toString()}%`;
    }
    else {
        statusClass = 'is-high';
        $percent.textContent = `${humidityPercent.toString()}%`;
    }
    $head?.classList.remove('is-low', 'is-medium', 'is-high');
    $gota?.classList.remove('is-low', 'is-medium', 'is-high');
    $head?.classList.add(statusClass);
    $gota?.classList.add(statusClass);
}
