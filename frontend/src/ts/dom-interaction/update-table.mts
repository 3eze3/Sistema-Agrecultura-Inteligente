export function updateTable(lectura: {
	timestamp: string | number | Date
	id: any
	porcentaje: any
	status: any
}) {
	const $tbody = document.querySelector('.table__body') as HTMLTableElement

	const date = new Date(lectura.timestamp)
	const formattedTime = date.toLocaleTimeString([], {
		hour: '2-digit',
		minute: '2-digit',
	})

	const emptyRow = $tbody.querySelector('.table__row td[colspan="4"]')

	if (emptyRow) {
		$tbody.innerHTML = ''
	}

	const $newRow = createRow(lectura, formattedTime)
	$tbody.appendChild($newRow)
}



function createRow(
	lectura: { id: any; porcentaje: any; status: any },
	formattedTime: string
): HTMLElement {
	const $newRow = document.createElement('tr')
	$newRow.classList.add('table__row')

	$newRow.innerHTML = `
		<th data-cell="PLOT" class="table__cell table__cell--id" scope="row">
			${lectura.id ?? 'N/A'}
		</th>
		<td data-cell="HUMIDITY" class="table__cell">${lectura.porcentaje}%</td>
		<td data-cell="STATE" class="table__cell">${lectura.status}</td>
		<td data-cell="DATE" class="table__cell">${formattedTime}</td>
	`
	return $newRow
}
