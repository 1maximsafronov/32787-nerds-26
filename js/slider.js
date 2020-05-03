(function () {
  const slider = document.querySelector('.promo__slider');
  const sliderItems = slider.querySelectorAll('.slider__item');
  const sliderToggles = slider.querySelectorAll('.slider__toggle');

  for (let i = 0; i < sliderToggles.length; i++) {
    sliderToggles[i].addEventListener('click', onToggleClick);

    function onToggleClick(evt) {
      evt.preventDefault();
      slider.querySelector('.slider__item--show').classList.remove('slider__item--show');
      slider.querySelector('.slider__toggle--active').classList.remove('slider__toggle--active');

      sliderToggles[i].classList.add('slider__toggle--active');
      sliderItems[i].classList.add('slider__item--show');
    }
  }
})();
