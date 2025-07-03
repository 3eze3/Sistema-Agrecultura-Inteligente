import { updateBgs } from '../animations/update-bg-cards.mjs'
const statsHumidity: number[] = []

export function updateBarAvarage(humidityPercent: number) {
	statsHumidity.push(humidityPercent)

	if (statsHumidity.length > 12) {
		statsHumidity.shift()
	}

	if (statsHumidity.length === 12) {
		let averageHumidity =
			statsHumidity.reduce((a, b) => a + b) / statsHumidity.length
		updateBar(averageHumidity)
	}
}
function updateBar(averageHumidity: number) {
	const $bar = document.querySelector('.barAvarage__bar') as HTMLElement
	const $percent = document.querySelector(
		'.barAvarage__percent'
	) as HTMLSpanElement
	$bar.style.height = `${averageHumidity}%`
	$bar.style.backgroundPositionY = `${averageHumidity}%`
	$percent.textContent = `${averageHumidity.toFixed(1)}%`
	$percent.style.bottom = `${averageHumidity - 3}%`
	updateBgs(averageHumidity)
}
