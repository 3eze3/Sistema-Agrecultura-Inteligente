import { toggleModal } from './dom-interaction/modal-monitor.mjs'
import { startMonitor } from './services/start-monitor.mjs'

class Monitor {
	public static monitor() {
		startMonitor()
		toggleModal()
	}
}

Monitor.monitor()
