export function setModalPopup(modal, btnModal) {
  const modalClose = modal.querySelector('.modal__close');

  btnModal.addEventListener('click', function(evt){
      evt.preventDefault();
      modal.classList.add('modal--show');
      document.addEventListener('keydown', onModalEscPress);
      modalClose.addEventListener('click', onModalCloseClick);
  });

  function closeOpenedModal() {
    modal.classList.remove('modal--show');
    modalClose.removeEventListener('click', onModalCloseClick);
    document.removeEventListener('keydown', onModalEscPress);
  }

  function onModalCloseClick(evt) {
    evt.preventDefault();
    closeOpenedModal();
  }

  function onModalEscPress(evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeOpenedModal();
    }
  }

}
