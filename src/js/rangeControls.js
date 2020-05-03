(function () {
  const rangeControl = document.querySelector('.range-controls');
  const rangeScale = rangeControl.querySelector('.range-controls__scale');
  const rangeBar = rangeControl.querySelector('.range-controls__bar');
  const rangeMin = rangeControl.querySelector('.range-controls__toggle--min');
  const rangeMax = rangeControl.querySelector('.range-controls__toggle--max');

  let priceValue = {
    step: 30000 / rangeScale.offsetWidth,
    min: 0,
    max: 0,
    setMin: function(value) {
      this.min = value;
      window.filterform.setMinPrice(this.min);
    },
    setMax: function (value) {
      this.max = value;
      window.filterform.setMaxPrice(this.max);
    }
  };

  setStartPosition();
  rangeMin.addEventListener('mousedown', onRangeMinMousedow);
  rangeMax.addEventListener('mousedown', onRangeMaxMousedow);


  function setStartPosition() {
    rangeBar.style.left = rangeMin.offsetLeft + 'px';
    rangeBar.style.right = (rangeScale.offsetWidth - rangeMax.offsetLeft) + 'px';

    priceValue.setMin(priceValue.step * (rangeMin.offsetLeft + (rangeMin.offsetWidth / 2)));
    priceValue.setMax(priceValue.step * (rangeScale.offsetWidth - rangeMax.offsetLeft / 2));
  }

  function checkRangeMinCoords(coord) {
    let xCoord = coord + rangeMin.offsetWidth / 2;

    let isXCoordMatch = (
      xCoord <= rangeMax.offsetLeft && xCoord >= 0
    );

    return isXCoordMatch;
  }

  function onRangeMinMousedow(evt) {
    evt.preventDefault();

      let startCoord = evt.clientX;

      function onRangeMinMove(moveEvt) {
        moveEvt.preventDefault();

        let newToggleCoord = rangeMin.offsetLeft - (startCoord - moveEvt.clientX);

        startCoord = moveEvt.clientX;


        if (checkRangeMinCoords(newToggleCoord)) {
          rangeMin.style.left = newToggleCoord + 'px';
          rangeBar.style.left = newToggleCoord + 'px';
          priceValue.setMin((newToggleCoord + (rangeMin.offsetWidth / 2)) * priceValue.step);
        }
      }

      function onRangeMinMouseUp(upEvt) {
        upEvt.preventDefault();
        document.removeEventListener('mousemove', onRangeMinMove);
        document.removeEventListener('mouseup', onRangeMinMouseUp);

      }

      if (evt.button === 0) {
        document.addEventListener('mousemove', onRangeMinMove);
        document.addEventListener('mouseup', onRangeMinMouseUp);
      }
  }

  function checkRangeMaxCoords(coord) {
    let xCoord = coord + rangeMax.offsetWidth / 2;

    let isXCoordMatch = (
      xCoord <= rangeScale.offsetWidth && xCoord >= rangeMin.offsetLeft
    );

    return isXCoordMatch;
  }

  function onRangeMaxMousedow(evt) {
    evt.preventDefault();

      let startCoord = evt.clientX;

      function onRangeMaxMove(moveEvt) {
        moveEvt.preventDefault();

        let newToggleCoord = rangeMax.offsetLeft - (startCoord - moveEvt.clientX);

        startCoord = moveEvt.clientX;


        if (checkRangeMaxCoords(newToggleCoord)) {
          rangeMax.style.left = newToggleCoord + 'px';
          rangeBar.style.right = rangeScale.offsetWidth - newToggleCoord + 'px';
          priceValue.setMax((newToggleCoord + (rangeMax.offsetWidth / 2)) * priceValue.step)
        }
      }

      function onRangeMaxMouseUp(upEvt) {
        upEvt.preventDefault();
        document.removeEventListener('mousemove', onRangeMaxMove);
        document.removeEventListener('mouseup', onRangeMaxMouseUp);
      }

      if (evt.button === 0) {
        document.addEventListener('mousemove', onRangeMaxMove);
        document.addEventListener('mouseup', onRangeMaxMouseUp);
      }
  }
})();
