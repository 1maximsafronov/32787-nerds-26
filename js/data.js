(function () {
  let products = [];

  function onSuccess(data) {
    data.forEach(function (item, index) {
      products[index] = item;
    });
    window.catalog.render(products);
  }

  function onError(errorMessage) {
    let node = document.createElement('div');
    node.classList.add('error-data-load');
    node.textContent = errorMessage + ' Мы сгенерировали случайные объявления';
    node.backgroundColor = 'red';
    node.color = 'white';
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
    return products;
  }

  window.data = {
    load: load,
    getProducts: getProducts
  };
})();
