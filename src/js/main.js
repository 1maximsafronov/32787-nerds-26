import {setSlider} from './slider.js';
import {load as dataload, getProducts} from "./data";

const catalogtList = document.querySelector('.catalog__list');
const slider = document.querySelector('.slider');
if(slider) {
  setSlider(slider);
}
if(catalogtList) {
  dataload();
}
