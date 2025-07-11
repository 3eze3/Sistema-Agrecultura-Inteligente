import { getId } from '../utils/get-id-elements.mjs'

const COVER_ID = ['today', 'days-7', 'custom']
const $cover = document.querySelector('.historical__cover')
const $form = document.querySelector('.historical__form') as HTMLFormElement

export function sliceAnimationShoot(e: Event) {
	const id = getId(e)
	resetClass()
	moveCover(id)
}

function moveCover(id: string) {
	if (COVER_ID.includes(id)) {
		$cover?.classList.add(id)
		$cover?.classList.add('color-cover')
	}
}

function resetClass() {
	$cover?.classList.remove(...COVER_ID)
	$cover?.classList.remove('color-cover')
	$form.classList.remove('open-form')
}
