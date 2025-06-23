import { toggleModal } from './dom-interaction/modal-monitor.mjs';
import { startMonitor } from './services/start-monitor.mjs';
class Monitor {
    static monitor() {
        startMonitor();
        toggleModal();
    }
}
Monitor.monitor();
