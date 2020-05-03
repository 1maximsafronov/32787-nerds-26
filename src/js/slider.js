(function () {
  const slider = document.querySelector(`.promo__slider`);
  const sliderItems = slider.querySelectorAll(`.slider__item`);
  const sliderToggles = slider.querySelectorAll(`.slider__toggle`);

  function setOnTogglerClick(toggler, slide) {

    toggler.addEventListener(`click`, onToggleClick);

    function onToggleClick(evt) {
      evt.preventDefault();
      slider.querySelector(`.slider__item--show`).classList.remove(`slider__item--show`);
      slider.querySelector(`.slider__toggle--active`).classList.remove(`slider__toggle--active`);

      toggler.classList.add(`slider__toggle--active`);
      slide.classList.add(`slider__item--show`);
    }
  }

  for (let i = 0; i < sliderToggles.length; i++) {
    setOnTogglerClick(sliderToggles[i], sliderItems[i]);

  }
})();
