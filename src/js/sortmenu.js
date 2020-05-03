(function () {
  const SortType = {
    BY_PRICE: 'price',
    BY_TYPE: 'layout',
    BY_NAME: 'title'
  };

  let isSortUp = true;
  let activSortType = '';
  const sortingmenu = document.querySelector('.catalog__sort');
  const toggleByPrice = sortingmenu.querySelector('.sorting__item--by-price');
  const toggleByType = sortingmenu.querySelector('.sorting__item--by-type');
  const toggleByName = sortingmenu.querySelector('.sorting__item--by-name');
  const toggleDown = sortingmenu.querySelector('.sorting__toggle--down');
  const toggleUp = sortingmenu.querySelector('.sorting__toggle--up');

  toggleByPrice.addEventListener('click', function (evt) {
    evt.preventDefault();
    toggleActiveSortType(SortType.BY_PRICE);
    toggleActiveSortingItem(toggleByPrice);
    renderSorteredProducts();
  });

  toggleByType.addEventListener('click', function (evt) {
    evt.preventDefault();
    toggleActiveSortType(SortType.BY_TYPE);
    toggleActiveSortingItem(toggleByType);
    renderSorteredProducts();
  });

  toggleByName.addEventListener('click', function (evt) {
    evt.preventDefault();
    toggleActiveSortType(SortType.BY_NAME);
    toggleActiveSortingItem(toggleByName);
    renderSorteredProducts();
  });

  toggleDown.addEventListener('click', function (evt) {
    evt.preventDefault();
    let products = window.catalog.getLoadedProducts();
    isSortUp = false;
    renderSorteredProducts();
  });

  toggleUp.addEventListener('click', function (evt) {
    evt.preventDefault();
    let products = window.catalog.getLoadedProducts();
    isSortUp = true;
    renderSorteredProducts();
  });

  function toggleActiveSortType(sortType) {
    if(activSortType === sortType) {
      isSortUp = !isSortUp;
    }
    activSortType = sortType;
  }
  function toggleActiveSortingItem(sortinItem) {
    let activeSortinItem = sortingmenu.querySelector('.sorting__item--active');
    activeSortinItem.classList.remove('sorting__item--active');
    sortinItem.classList.add('sorting__item--active');
  }

  function toggleActiveSortingToggler() {
    let activeSortinItem = sortingmenu.querySelector('.sorting__toggle--active');
    activeSortinItem.classList.remove('sorting__toggle--active');
    if(isSortUp) {
      toggleUp.classList.add('sorting__toggle--active');
    }
    else {
      toggleDown.classList.add('sorting__toggle--active');
    }
  }

function renderSorteredProducts() {
  let products = window.catalog.getLoadedProducts();
  window.catalog.render(sortProducts(products, activSortType));
  toggleActiveSortingToggler();
}
  function sortProducts(products, value) {
    const length = products.length;
    for (var i = 0; i < length-1; i++){
      for (var j = 0; j < length-1-i; j++){
        if (isSortUp) {
          if (products[j+1][value] < products[j][value]){
            let temp = products[j+1];
            products[j+1] = products[j];
            products[j] = temp;
          }
        }
        else {
          if (products[j+1][value] > products[j][value]){
            let temp = products[j+1];
            products[j+1] = products[j];
            products[j] = temp;
          }
        }

      }
    }

    return products;
  }

})();
