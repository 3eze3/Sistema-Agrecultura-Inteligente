import { getInputs } from '../utils/get-inputs.mjs';
import { getLabels } from '../utils/get-labels.mjs';
import { toogleClass } from '../utils/toggle-class.mjs';
export function upLabels(input, label, classNameAnimated) {
    const $inputs = getInputs(input);
    const $labels = getLabels(label);
    toogleClass($inputs, $labels, classNameAnimated);
}
