import { getId } from '../utils/get-id-elements.mjs'
import { sliceAnimationShoot } from '../animations/slice-animation.mjs'
import {
	appyFilterDateCustom,
	appyFilterDateToday,
	appyFilterDateWeek,
} from './apply-filter.mjs'

const $form = document.querySelector('.historical__form') as HTMLFormElement
const $listRadioInputs = document.querySelectorAll(
	'.historical__radio'
) as NodeListOf<HTMLInputElement>

export function changeRadioInputs() {
	$listRadioInputs.forEach((radioInputs) => {
		radioInputs.addEventListener('change', (e: Event) => {
			sliceAnimationShoot(e)
			const id = getId(e)

			if (id === 'custom') {
				$form.classList.add('open-form')
				appyFilterDateCustom()
			}

			if (id === 'today') {
				appyFilterDateToday()
			}

			if (id === 'days-7') {
				appyFilterDateWeek()
			}
		})
	})
}
