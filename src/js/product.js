(function () {
  function createElement(product) {
    let productElement = document.createElement(`li`);
    productElement.classList.add(`catalog__item`, `product`);
    productElement.innerHTML = `
    <p class="product__picture">
      <img class="product__image" width="360" height="576" src="${product.picture}" alt="${product.title} - ${product.desc}">
    </p>
    <div class="product__info">
      <a class="product__title" href="#">${product.title}</a>
      <p class="product__desc">${product.desc}</p>
      <a class="product__buy btn  btn--red" href="#">${formatePriceString(product.price)} Руб.</a>
    </div>`;
    return productElement;
  }

  function formatePriceString(price) {
    let priceString = price.toString().split(``);
    priceString.splice(-3, 0, ` `);
    return priceString.join(``);
  }

  window.product = {
    createElement
  };
})();
