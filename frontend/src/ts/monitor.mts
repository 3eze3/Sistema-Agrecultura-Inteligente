import { changeRadioInputs } from './dom-interaction/change-radio.mjs'
import { upLabels } from './animations/effect-input.mjs'
import { toggleModal } from './dom-interaction/modal-monitor.mjs'
import { startMonitor } from './services/start-monitor.mjs'

class Monitor {
	public static monitor() {
		startMonitor()
		toggleModal()
		changeRadioInputs()
		upLabels(
			'.historical__input',
			'.historical__label',
			'historical__label--up-label'
		)
	}
}

Monitor.monitor()
