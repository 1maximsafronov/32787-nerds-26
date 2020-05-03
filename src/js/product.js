(function () {
  const productTemplate = document.querySelector('#product').content.querySelector('.product');

  function createElement(product) {
    let productElement = productTemplate.cloneNode(true);
    let productTitle = productElement.querySelector('.product__title');
    let productDesc = productElement.querySelector('.product__desc');
    let productPrice = productElement.querySelector('.product__buy');
    let productPicture = productElement.querySelector('.product__image');

    productTitle.textContent = product.title;
    productDesc.textContent = product.desc;
    productPrice.textContent = formatePriceString(product.price) + " Руб.";
    productPicture.src = product.picture;
    productPicture.alt = product.title + " - " + product.desc;

    return productElement;
  }

  function formatePriceString(price) {
    let priceString = price.toString().split('');
    priceString.splice(-3,0, ' ');
    return priceString.join('');
  }

  window.product = {
    createElement: createElement,
  }
})();
