(function () {

  let productsArr = [];

  function onSuccess(data) {
    data.forEach(function (item, index) {
      productsArr[index] = item;
    });

    window.product.renderProducts(productsArr);
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
    window.backend.load(onSuccess, onError);
  }

  function getProducts() {
    return productsArr;
  }

  window.data = {
    load: load,
    getAdverts: getProducts
  };
})();
