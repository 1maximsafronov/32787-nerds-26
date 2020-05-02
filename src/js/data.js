import {load as backendload, upload as backenduload} from './backend.js';
import {renderProducts} from './product.js';

  let productsArr = [];

  function onSuccess(data) {
    data.forEach(function (item, index) {
      productsArr[index] = item;
    });

    renderProducts(productsArr);
  }

  function onError(errorMessage) {
    let node = document.createElement('div');
    node.classList.add('error-data-load');
    node.textContent = errorMessage + ' Мы сгенерировали случайные объявления';
    document.body.appendChild(node);

    function hideError() {
      node.remove();
    }

    setTimeout(hideError, 5000);
  }

  function load() {
    backendload(onSuccess, onError);
  }

  function getProducts() {
    return productsArr;
  }

export {load, getProducts};
