import { getInputs } from '../utils/getInputs.mjs';
export function upLabels() {
    const $inputs = getInputs();
    const $labels = document.querySelectorAll('.form__label');
    $inputs.forEach(($input, index) => {
        $input.addEventListener('input', () => {
            const texto = $input.value;
            $labels[index]?.classList.toggle('form__label--up-label', texto.trim() != '');
        });
    });
}
