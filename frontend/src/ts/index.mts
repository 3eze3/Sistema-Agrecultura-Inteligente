import { upLabels } from './animations/effect-input.mjs'
import { login } from './services/log-in.mjs'

class Main {
	public static main() {
		login()
		upLabels('.form__input', '.form__label', 'form__label--up-label')
	}
}

Main.main()
