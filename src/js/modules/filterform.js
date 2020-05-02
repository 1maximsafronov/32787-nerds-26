import {getProducts} from './data.js';
import {renderProducts} from './product.js';


const filterform = document.querySelector('.filters__form');

export function filterProducts() {
  let products = getProducts();

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

  renderProducts(filteredProducts);
}
