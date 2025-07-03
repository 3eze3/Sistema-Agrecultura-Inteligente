export function updateStatus(humidityPercent: number) {
	let statusClass
	if (humidityPercent < 30) {
		statusClass = 'Low'
		updateLabelsAndParcela(statusClass, humidityPercent)
	} else if (humidityPercent < 50) {
		statusClass = 'Medium'
		updateLabelsAndParcela(statusClass, humidityPercent)
	} else {
		statusClass = 'High'
		updateLabelsAndParcela(statusClass, humidityPercent)
	}
	resetStatusClass(statusClass)
}

function resetStatusClass(status: string) {
	const $head = document.querySelector('.parcela__head')
	const $gota = document.querySelector('.parcela__gota')

	$head?.classList.remove('low', 'medium', 'high')
	$gota?.classList.remove('low', 'medium', 'high')

	$head?.classList.add(status)
	$gota?.classList.add(status)
}

function updateLabelsAndParcela(state: string, humidityPercent: number) {
	const $status = document.querySelector('.parcela__type') as HTMLSpanElement
	const $percent = document.querySelector(
		'.parcela__percent'
	) as HTMLSpanElement

	$status.textContent = state.toUpperCase()
	$percent.textContent = `${humidityPercent.toString()}%`
}
