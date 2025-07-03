export function toogleClass($inputs, $labels, classAnimated) {
    $inputs.forEach(($input, index) => {
        $input.addEventListener('input', () => {
            const texto = $input.value;
            $labels[index]?.classList.toggle(classAnimated, texto.trim() != '');
        });
    });
}
