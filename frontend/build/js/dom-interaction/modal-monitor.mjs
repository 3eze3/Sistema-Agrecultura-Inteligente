export function toggleModal() {
    const $modal = document.getElementById('modal');
    const $parcela = document.querySelector('.parcela');
    const $closeBtn = document.getElementById('modal-exit');
    $parcela?.addEventListener('click', () => {
        $modal.open = true;
    });
    $closeBtn?.addEventListener('click', () => {
        $modal.close();
    });
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && $modal.open) {
            $modal.close();
        }
    });
}
