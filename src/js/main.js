import {slider} from './modules/slider.js';
import {modalPopup} from './modules/modalpopup.js';
import {data} from "./modules/data";
import {filterForm as filter} from './modules/filterform.js';
import {rangeControls} from './modules/rangeControls.js'


const writeUsOpenBtn = document.querySelector('.contacts__write-us');
const writeUsModal = document.querySelector('.modal-write-us');
const promoSlider = document.querySelector('.promo__slider');
const catalogtList = document.querySelector('.catalog__list');
const filterForm = document.querySelector('.filters__form');
const filterRange = document.querySelector('.price-filter__range-controls');

if(promoSlider) {
  slider.activate(promoSlider);
}


if(catalogtList) {
  data.load();
}

if (writeUsModal && writeUsOpenBtn) {
  modalPopup.set(writeUsModal, writeUsOpenBtn);
}

if (filterForm) {
 filterForm.addEventListener('submit', function (evt) {
   evt.preventDefault();
   filter.filterProducts();
 });
}

if (filterRange) {
  rangeControls.activate();
}
