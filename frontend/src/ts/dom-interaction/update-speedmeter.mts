import { updateBgs } from "../animations/update-bg.mjs"

function getRadianes(percent: number) {
	return (percent * Math.PI) / 100
}
export function updateSpeedmeter(humidityPercent: number) {
	const $needle = document.querySelector(
		'.speedmeter__needle '
	) as HTMLDivElement
	const $percentLabel = document.querySelector(
		'.speedmeter__percent '
	) as HTMLSpanElement
	//
	const radianes = getRadianes(humidityPercent)
	const gradosLine = Math.cos(radianes) * -90
	const gradosLabel = Math.cos(radianes) * 90
	$needle.style.rotate = `${gradosLine}deg`
	$percentLabel.style.rotate = `${gradosLabel}deg`
	$percentLabel.textContent = `${humidityPercent}%`
	updateBgs(humidityPercent)
}
