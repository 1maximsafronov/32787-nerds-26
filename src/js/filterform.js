(function () {
  const filterForm = document.querySelector(`.filters__form`);
  const minPrice = filterForm.querySelector(`.price-filter__min`);
  const maxPrice = filterForm.querySelector(`.price-filter__max`);
  let layoutType;

  let filteredProducts = [];

  filterForm.addEventListener(`submit`, function (evt) {
    evt.preventDefault();
    layoutType = filterForm.querySelector(`input[name="layout-radio"]:checked`);
    filterProducts();
    renderFilteredProducts();
    if (window.sortmenu.isActive) {
      window.sortmenu.renderProducts();
    }
  });

  function setMinPrice(value) {
    minPrice.value = Math.floor(value);
  }

  function setMaxPrice(value) {
    maxPrice.value = Math.floor(value);
  }

  function filterProducts() {
    let products = window.data.getProducts();

    filteredProducts = products.filter(function (product) {
      if (checkLayout(product.layout) && checkPrice(product.price)) {
        return true;
      }
      return false;
    });

  }

  function renderFilteredProducts() {
    window.catalog.render(filteredProducts);
    filteredProducts = [];
  }

  function checkLayout(layout) {
    return layoutType.value === `any` || layoutType.value === layout;
  }

  function checkPrice(price) {
    return price >= minPrice.value && price <= maxPrice.value;
  }

  window.filterform = {
    setMaxPrice,
    setMinPrice,
  };
})();
