import {data} from './data.js';
import {product} from "./product.js"

const filterform = document.querySelector('.filters__form');
const minPrice = document.querySelector('.price-filter__min');
const maxPrice = document.querySelector('.price-filter__max');

// let priceFilter = {
//   min: {
//     get: function () {
//       return minPrice.value;
//     },
//     set: function (value) {
//       minPrice.value = Math.floor(value);
//     }
//   },
//   max: {
//     get: function () {
//       return maxPrice.value;
//     },
//     set: function (value) {
//       maxPrice.value = Math.floor(value);
//     }
//   }
// }

function setMinPrice(value) {
  minPrice.value = Math.floor(value);
}

function setMaxPrice(value) {
  maxPrice.value = Math.floor(value);
}

function filterProducts() {
  let products = data.getProducts();

  const priceFilter = {
    min: document.querySelector('.price-filter__min').value,
    max: document.querySelector('.price-filter__max').value
  };
  const layoutType = document.querySelector('input[name="layout-radio"]:checked').value;
  const blockFeatures = document.querySelectorAll('.filters__group--features input[type="checkbox"]:checked');

  let filteredProducts = products.filter(function (product) {
    let price = product.price;
    let layout = product.layout;
    if (layoutType === layout && price >= priceFilter.min && price <= priceFilter.max) {
      return true;
    }
    return false;
  });

  product.render(filteredProducts);
}

export const filterForm = {
  filterProducts: filterProducts,
  setMaxPrice: setMaxPrice,
  setMinPrice: setMinPrice
};
