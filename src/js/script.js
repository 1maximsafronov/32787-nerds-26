const writeUsBtn = document.querySelector('.contacts__write-us');
const writeUsModal = document.querySelector('.modal-write-us');
const modalClose = writeUsModal.querySelector('.modal__close');
const catalogtList = document.querySelector('.catalog__list');

writeUsBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    writeUsModal.classList.add('modal--show');
});

modalClose.addEventListener('click', function(evt){
    evt.preventDefault();
    writeUsModal.classList.remove('modal--show');
});
document.addEventListener('keydown', function(evt){
  if (evt.key === 'Escape') {
    evt.preventDefault();
    writeUsModal.classList.remove('modal--show');
  }
});

if (catalogtList) {
  window.data.load();
}
