export function changeState() {
    const $btnCover = document.querySelector('.parcela__btn-cover');
    const $btnLabel = document.querySelector('.parcela__btn-label-1');
    const $btnLabel2 = document.querySelector('.parcela__btn-label-2');
    $btnCover?.classList.toggle('parcela__btn-cover--active');
    $btnLabel?.classList.toggle('parcela__btn-label-1--active');
    $btnLabel2?.classList.toggle('parcela__btn-label-2--active');
}
