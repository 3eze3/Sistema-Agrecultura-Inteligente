import { formatDate } from './format-date.mjs'

export function createRange(type: string) {
	const date = new Date()

	if (type === 'today') {
		const year = date.getFullYear()
		const month = String(date.getMonth() + 1).padStart(2, '0')
		const day = String(date.getDate()).padStart(2, '0')
		const baseDate = `${year}-${month}-${day}`

		const start = `${baseDate} 00:00:00`
		const end = `${baseDate} 23:59:00`

		return { start, end }
	}

	if (type === 'week') {
		const oneWeeAge = new Date(date)
		oneWeeAge.setTime(oneWeeAge.getTime() - 7 * 24 * 60 * 60 * 1000)
		const end = formatDate(date)
		const start = formatDate(oneWeeAge)
		return { start, end }
	}
	return {}
}
