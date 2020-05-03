(function () {
  let isSortUp = false;
  let activSortType = '';
  const sortingmenu = document.querySelector('.catalog__sort');
  const toggleByPrice = sortingmenu.querySelector('.sorting__item--by-price');
  const toggleByType = sortingmenu.querySelector('.sorting__item--by-type');
  const toggleByName = sortingmenu.querySelector('.sorting__item--by-name');
  const toggleDown = sortingmenu.querySelector('.sorting__toggle--down');
  const toggleUp = sortingmenu.querySelector('.sorting__toggle--up');

  toggleDown.addEventListener('click', function (evt) {
    evt.preventDefault();
    let products = window.catalog.getLoadedProducts();
    isSortUp = false;
    window.catalog.render(sortProducts(products, activSortType));
  });

  toggleUp.addEventListener('click', function (evt) {
    evt.preventDefault();
    let products = window.catalog.getLoadedProducts();
    isSortUp = true;
    window.catalog.render(sortProducts(products, activSortType));
  });

  toggleByName.addEventListener('click', function (evt) {
    evt.preventDefault();
    activSortType = 'title';
    let products = window.catalog.getLoadedProducts();
    window.catalog.render(sortProducts(products, activSortType));
    isSortUp = !isSortUp;
    toggleActiveSortingItem(toggleByName);
  });

  toggleByType.addEventListener('click', function (evt) {
    evt.preventDefault();
    activSortType = 'layout';
    let products = window.catalog.getLoadedProducts();
    window.catalog.render(sortProducts(products, activSortType));
    isSortUp = !isSortUp;
    toggleActiveSortingItem(toggleByType);
  });

  toggleByPrice.addEventListener('click', function (evt) {
    evt.preventDefault();
    activSortType = 'price';
    let products = window.catalog.getLoadedProducts();
    window.catalog.render(sortProducts(products, activSortType));
    isSortUp = !isSortUp;
    toggleActiveSortingItem(toggleByPrice);
  });

  function toggleActiveSortingItem(sortinItem) {
    let activeSortinItem = sortingmenu.querySelector('.sorting__item--active');

    activeSortinItem.classList.remove('sorting__item--active');
    sortinItem.classList.add('sorting__item--active');
  }

  // function toggleActiveSortingToggler(sortinToggler) {
  //   let activeSortinItem = sortingmenu.querySelector('.sorting__item--active');
  //
  //   activeSortinItem.classList.remove('sorting__item--active');
  //   sortinToggler.classList.add('sorting__item--active');
  // }

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
