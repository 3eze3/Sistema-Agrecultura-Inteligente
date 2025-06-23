import { toggleModal } from './dom-interaction/modal-monitor.mjs'
// import { updateStatus } from './dom-interaction/update-status.mjs'
import { startMonitor } from './services/start-monitor.mjs'

class Monitor {
	public static monitor() {
		startMonitor()
		toggleModal()
		// Solo prueba
		// updateStatus(88)
	}
}

Monitor.monitor()
