export function getInputs(): NodeListOf<HTMLInputElement> {
	const $inputs = document.querySelectorAll(
		'.form__input'
	) as NodeListOf<HTMLInputElement>
	return $inputs
}
