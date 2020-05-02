(function () {
  const productTemplate = document.querySelector('#product').content.querySelector('.product');
  const catalogtList = document.querySelector('.catalog__list');

  function createProduct(product) {
    let productElement = productTemplate.cloneNode(true);

    let productTitle = productElement.querySelector('.product__title');
    let productDesc = productElement.querySelector('.product__desc');
    let productPrice = productElement.querySelector('.product__buy');
    let productPicture = productElement.querySelector('.product__image');

    productTitle.textContent = product.title;
    productDesc.textContent = product.desc;
    productPrice.textContent = product.price + " Руб.";
    productPicture.src = product.picture;
    productPicture.alt = product.title + " - " + product.desc;

    return productElement;
  }

  function renderProducts(products) {
    removeProducts();
    let productsFragment = document.createDocumentFragment();

    products.forEach(function (product) {
      let productElement = createProduct(product);
      productsFragment.appendChild(productElement);
    });

    catalogtList.appendChild(productsFragment);
  }

  function removeProducts() {
    let products = catalogtList.querySelectorAll('.product');

    products.forEach(function (product) {
        product.remove();
    });
  }

  window.product = {
    renderProducts: renderProducts
  }
})();
