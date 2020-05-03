function set(modal, btnOpenModal) {
  const modalClose = modal.querySelector('.modal__close');

  btnOpenModal.addEventListener('click', function(evt){
    evt.preventDefault();
    openModal();
  });

  function openModal() {
    modal.classList.add('modal--show');
    document.addEventListener('keydown', onModalEscPress);
    modalClose.addEventListener('click', onModalCloseClick);
  }

  function closeModal() {
    modal.classList.remove('modal--show');
    modalClose.removeEventListener('click', onModalCloseClick);
    document.removeEventListener('keydown', onModalEscPress);
  }

  function onModalCloseClick(evt) {
    evt.preventDefault();
    closeModal();
  }

  function onModalEscPress(evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeModal();
    }
  }
}

export const modalPopup = {
  set: set
};
