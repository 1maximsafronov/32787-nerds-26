(function () {
  const catalogList = document.querySelector(`.catalog__list`);

  if (catalogList) {
    window.data.load();
  }
})();
