(function () {
  const SortType = {
    BY_PRICE: 'price',
    BY_TYPE: 'layout',
    BY_NAME: 'title'
  };

  let isSortUp = true;
  let activSortType = '';
  let isSortingActive = false;
  const sortingmenu = document.querySelector('.catalog__sort');
  const toggleByPrice = sortingmenu.querySelector('.sorting__item--by-price');
  const toggleByType = sortingmenu.querySelector('.sorting__item--by-type');
  const toggleByName = sortingmenu.querySelector('.sorting__item--by-name');
  const toggleDown = sortingmenu.querySelector('.sorting__toggle--down');
  const toggleUp = sortingmenu.querySelector('.sorting__toggle--up');

  toggleByPrice.addEventListener('click', function (evt) {
    evt.preventDefault();
    toggleSortMenuElements(SortType.BY_PRICE, toggleByPrice);
    renderSorteredProducts();
  });

  toggleByType.addEventListener('click', function (evt) {
    evt.preventDefault();
    toggleSortMenuElements(SortType.BY_TYPE, toggleByType);
    renderSorteredProducts();
  });

  toggleByName.addEventListener('click', function (evt) {
    evt.preventDefault();
    toggleSortMenuElements(SortType.BY_NAME, toggleByName);
    renderSorteredProducts();
  });

  toggleDown.addEventListener('click', function (evt) {
    evt.preventDefault();
    let products = window.catalog.getLoadedProducts();
    isSortUp = false;
    toggleActiveSortingToggler();
    renderSorteredProducts();
  });

  toggleUp.addEventListener('click', function (evt) {
    evt.preventDefault();
    let products = window.catalog.getLoadedProducts();
    isSortUp = true;
    toggleActiveSortingToggler();
    renderSorteredProducts();
  });

  function toggleSortMenuElements(sortType, sortMenuItem) {
    toggleActiveSortType(sortType);
    toggleActiveSortingItem(sortMenuItem);
    toggleActiveSortingToggler();
    isSortingActive = true;
  }

  function toggleActiveSortType(sortType) {
    if(activSortType === sortType) {
      isSortUp = !isSortUp;
    }
    activSortType = sortType;
  }

  function toggleActiveSortingItem(sortinItem) {
    let activeSortinItem = sortingmenu.querySelector('.sorting__item--active');
    if (activeSortinItem) {
      activeSortinItem.classList.remove('sorting__item--active');
    }
    sortinItem.classList.add('sorting__item--active');
  }

  function toggleActiveSortingToggler() {
    let activeSortingRoggler = sortingmenu.querySelector('.sorting__toggle--active');
    if (activeSortingRoggler) {
      activeSortingRoggler.classList.remove('sorting__toggle--active');
    }

    if (isSortUp) {
      toggleUp.classList.add('sorting__toggle--active');
    }
    else {
      toggleDown.classList.add('sorting__toggle--active');
    }
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

  function renderSorteredProducts() {
    let products = window.catalog.getLoadedProducts();
    window.catalog.render(sortProducts(products, activSortType));
  }

  window.sortmenu = {
    isActive: isSortingActive,
    renderProducts: renderSorteredProducts()
  }

})();
