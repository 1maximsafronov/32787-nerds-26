import {setSlider} from './modules/slider.js';
import {setModalPopup} from './modules/modalpopup.js';
import {load as dataload, getProducts} from "./modules/data";
import {filterProducts} from './modules/filterform.js';

const slider = document.querySelector('.slider');
const writeUsLink = document.querySelector('.contacts__write-us');
const writeUsModal = document.querySelector('.modal-write-us');
const catalogtList = document.querySelector('.catalog__list');
const filterform = document.querySelector('.filters__form');

if(slider) {
  setSlider(slider);
}
if(catalogtList) {
  dataload();
}
if (writeUsModal && writeUsLink) {
  setModalPopup(writeUsModal, writeUsLink);
}

filterform.addEventListener('submit', function (evt) {
  evt.preventDefault();
  filterProducts();
});


const rangeControls = filterform.querySelector('.range-controls');
const rangeScale = rangeControls.querySelector('.range-controls__scale');
const rangeBar = rangeControls.querySelector('.range-controls__bar');
const rangeMin = rangeControls.querySelector('.range-controls__toggle--min');
const rangeMax = rangeControls.querySelector('.range-controls__toggle--max');


rangeMin.addEventListener('mousedown', onRangeMinMousedow);
rangeMax.addEventListener('mousedown', onRangeMaxMousedow);

rangeBar.style.left = rangeMin.offsetLeft + 'px';
rangeBar.style.right = (rangeScale.offsetWidth - rangeMax.offsetLeft) + 'px';

function checkRangeMinCoords(coord) {
  let xCoord = coord + rangeMin.offsetWidth / 2;

  let isXCoordMatch = (
    xCoord <= rangeMax.offsetLeft && xCoord >= 0
  );

  return isXCoordMatch;
}

function onRangeMinMousedow(evt) {
  evt.preventDefault();

    let startCoord = evt.clientX;

    function onRangeMinMove(moveEvt) {
      moveEvt.preventDefault();

      let newToggleCoord = rangeMin.offsetLeft - (startCoord - moveEvt.clientX);

      startCoord = moveEvt.clientX;


      if (checkRangeMinCoords(newToggleCoord)) {
        rangeMin.style.left = newToggleCoord + 'px';
        rangeBar.style.left = newToggleCoord + 'px';
        setMinPrice(newToggleCoord + (rangeMin.offsetWidth / 2));
      }
    }

    function onRangeMinMouseUp(upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onRangeMinMove);
      document.removeEventListener('mouseup', onRangeMinMouseUp);

    }

    if (evt.button === 0) {
      document.addEventListener('mousemove', onRangeMinMove);
      document.addEventListener('mouseup', onRangeMinMouseUp);
    }
}

function checkRangeMaxCoords(coord) {
  let xCoord = coord + rangeMax.offsetWidth / 2;

  let isXCoordMatch = (
    xCoord <= rangeScale.offsetWidth && xCoord >= rangeMin.offsetLeft
  );

  return isXCoordMatch;
}

function onRangeMaxMousedow(evt) {
  evt.preventDefault();

    let startCoord = evt.clientX;

    function onRangeMaxMove(moveEvt) {
      moveEvt.preventDefault();

      let newToggleCoord = rangeMax.offsetLeft - (startCoord - moveEvt.clientX);

      startCoord = moveEvt.clientX;


      if (checkRangeMaxCoords(newToggleCoord)) {
        rangeMax.style.left = newToggleCoord + 'px';
        rangeBar.style.right = rangeScale.offsetWidth - newToggleCoord + 'px';
        setMaxPrice(newToggleCoord + (rangeMax.offsetWidth / 2));
      }
    }

    function onRangeMaxMouseUp(upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onRangeMaxMove);
      document.removeEventListener('mouseup', onRangeMaxMouseUp);

    }

    if (evt.button === 0) {
      document.addEventListener('mousemove', onRangeMaxMove);
      document.addEventListener('mouseup', onRangeMaxMouseUp);
    }
}

const minPrice = document.querySelector('.price-filter__min');
const maxPrice = document.querySelector('.price-filter__max');

function setMinPrice(value) {
  const priceStep = 30000 / rangeScale.offsetWidth;
  minPrice.value = Math.floor(value * priceStep);
}

function setMaxPrice(value) {
  const priceStep = 30000 / rangeScale.offsetWidth;
  maxPrice.value = Math.floor(value * priceStep);
}
