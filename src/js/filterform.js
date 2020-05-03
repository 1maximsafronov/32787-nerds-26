(function () {
  const filterForm = document.querySelector('.filters__form');
  const minPrice = filterForm.querySelector('.price-filter__min');
  const maxPrice = filterForm.querySelector('.price-filter__max');
  let layoutType;
  let blockFeatures;

  filterForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    layoutType = filterForm.querySelector('input[name="layout-radio"]:checked');
    blockFeatures = filterForm.querySelectorAll('.filters__group--features input[type="checkbox"]:checked');
    filterProducts();
  });

  function setMinPrice(value) {
    minPrice.value = Math.floor(value);
  }

  function setMaxPrice(value) {
    maxPrice.value = Math.floor(value);
  }

  function filterProducts() {
    let products = window.data.getProducts();

    let filteredProducts = products.filter(function (product) {
      if (checkLayout(product.layout) && checkPrice(product.price)) {
        return true;
      }
      return false;
    });

    window.catalog.render(filteredProducts);
  }

  function checkLayout(layout){
    return layoutType.value === layout;
  }

  function checkPrice(price) {
    return price >= minPrice.value && price <= maxPrice.value;
  }

  window.filterform = {
    setMaxPrice: setMaxPrice,
    setMinPrice: setMinPrice
  };
})();
