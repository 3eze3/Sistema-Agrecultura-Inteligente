export function toogleClass(
	$inputs: NodeListOf<HTMLInputElement>,
	$labels: NodeListOf<HTMLLabelElement>,
	classAnimated: string
) {
	$inputs.forEach(($input, index) => {
		$input.addEventListener('input', () => {
			const texto = $input.value
			$labels[index]?.classList.toggle(classAnimated, texto.trim() != '')
		})
	})
}
