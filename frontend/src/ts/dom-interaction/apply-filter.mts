import { fetchDataHumidity } from '../services/get-data.mjs'
import { createRange } from '../utils/create-range.mjs'
import { getFilterRangeInput } from '../utils/get-range.mjs'
import { closeForm } from '../utils/reset-clases.mjs'
import { updateHistorica } from './update-historical.mjs'

export async function appyFilterDateToday() {
	const range = createRange('today')
	const { start, end } = range
	const data = await fetchDataHumidity(start, end)
	updateHistorica(data)
}

export async function appyFilterDateWeek() {
	const range = createRange('week')
	const { start, end } = range
	const data = await fetchDataHumidity(start, end)
	updateHistorica(data)
}

export function appyFilterDateCustom() {
	const $btnApply = document.getElementById('appy') as HTMLButtonElement
	$btnApply.addEventListener('click', async (e) => {
		e.preventDefault()
		const range = getFilterRangeInput()
		const { start, end } = range
		const data = await fetchDataHumidity(start, end)
		updateHistorica(data)
		closeForm()
	})
}
