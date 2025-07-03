export function toggleModal() {
    const $modal = document.getElementById('modal');
    const $parcela = document.querySelector('.parcela');
    const $closeBtn = document.getElementById('modal-exit');
    const wasModalVisible = localStorage.getItem('modalVisible') === 'true';
    if (wasModalVisible) {
        $modal.showModal();
    }
    $parcela?.addEventListener('click', () => {
        $modal.showModal();
        localStorage.setItem('modalVisible', 'true');
    });
    $closeBtn?.addEventListener('click', () => {
        $modal.close();
        localStorage.setItem('modalVisible', 'false');
    });
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && $modal.open) {
            $modal.close();
            localStorage.setItem('modalVisible', 'false');
        }
    });
}
