export function updateBgs(humidityPercent: number) {
	const $graphicMeter = document.querySelectorAll(
		'.modal__graphic'
	) as NodeListOf<HTMLDivElement>

	$graphicMeter.forEach((graphic) => {
		graphic.style.backgroundPositionX = `${humidityPercent}%`
	})
}
