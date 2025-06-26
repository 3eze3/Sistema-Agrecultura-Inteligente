export function resetStatus(): void {
	const $porcentaje = document.querySelector<HTMLElement>('.parcela__percent')
	const $estado = document.querySelector<HTMLElement>('.parcela__type')
	const $cabeza = document.querySelector<HTMLElement>('.parcela__head')
	const $gota = document.querySelector<HTMLElement>('.parcela__gota')
	const $tablaBody =
		document.querySelector<HTMLTableSectionElement>('.table__body')

	if ($porcentaje) $porcentaje.textContent = '0%'
	if ($estado) $estado.textContent = 'Low'

	$cabeza?.classList.remove('is-medium', 'is-high', 'is-low')
	$gota?.classList.remove('is-medium', 'is-high', 'is-low')
	if ($tablaBody) {
		$tablaBody.innerHTML = `
			<tr class="table__row">
				<td colspan="4" class="table__cell" style="text-align:center; font-style:italic;">
					No data available
				</td>
			</tr>
		`
	}
}
