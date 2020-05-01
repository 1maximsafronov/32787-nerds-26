var writeUsBtn = document.querySelector('.contacts__write-us');
var writeUsModal = document.querySelector('.modal-write-us');
var modalClose = writeUsModal.querySelector('.modal__close');

writeUsBtn.addEventListener('click', function(evnt){
    evnt.preventDefault();
    writeUsModal.classList.add('modal--show');
});

modalClose.addEventListener('click', function(evnt){
    evnt.preventDefault();
    writeUsModal.classList.remove('modal--show');
});
document.addEventListener('keydown', function(evnt){
  if(evnt.keycode = 27) {
    writeUsModal.classList.remove('modal--show');
  }
});
