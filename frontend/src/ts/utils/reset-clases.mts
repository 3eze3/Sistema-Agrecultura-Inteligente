const $form = document.querySelector('.historical__form') as HTMLFormElement
export function closeForm() {
	$form.classList.remove('open-form')
}
