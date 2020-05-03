(function () {
  const writeUsOpenBtn = document.querySelector(`.contacts__write-us`);
  const writeUsModal = document.querySelector(`.modal-write-us`);

  setModalPopup(writeUsModal, writeUsOpenBtn);

  function setModalPopup(modal, btnOpenModal = null) {
    const modalClose = modal.querySelector(`.modal__close`);

    if (btnOpenModal) {
      btnOpenModal.addEventListener(`click`, function (evt) {
        evt.preventDefault();
        openModal();
      });
    }
    function openModal() {
      modal.classList.add(`modal--show`);
      document.addEventListener(`keydown`, onModalEscPress);
      modalClose.addEventListener(`click`, onModalCloseClick);
    }

    function closeModal() {
      modal.classList.remove(`modal--show`);
      modalClose.removeEventListener(`click`, onModalCloseClick);
      document.removeEventListener(`keydown`, onModalEscPress);
    }

    function onModalCloseClick(evt) {
      evt.preventDefault();
      closeModal();
    }

    function onModalEscPress(evt) {
      if (evt.key === `Escape`) {
        evt.preventDefault();
        closeModal();
      }
    }
  }
})();
