export function getInputs(className: string): NodeListOf<HTMLInputElement> {
	const $inputs = document.querySelectorAll(
		className
	) as NodeListOf<HTMLInputElement>
	return $inputs
}
