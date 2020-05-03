(function () {
  const catalogtList = document.querySelector('.catalog__list');
  let loadedProducts = [];

  function render(products) {
    loadedProducts = products;
    let productsFragment = document.createDocumentFragment();

    products.forEach(function (product) {
      productsFragment.appendChild(window.product.createElement(product));
    });
    removeProducts();
    catalogtList.appendChild(productsFragment);
  }

  function removeProducts() {
    let products = catalogtList.querySelectorAll('.product');

    products.forEach(function (product) {
      product.remove();
    });
  }

  function getLoadedProducts() {
    return loadedProducts;
  }

  window.catalog = {
    render: render,
    getLoadedProducts: getLoadedProducts
  }
})();
