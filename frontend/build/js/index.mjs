import { upLabels } from './animations/effect-input.mjs';
import { login } from './services/login.mjs';
class Main {
    static main() {
        login();
        upLabels();
    }
}
Main.main();
