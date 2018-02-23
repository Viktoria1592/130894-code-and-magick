'use strict';
// По клику меняю цвета частей волшебника
(function () {
  window.colorize = function (element, array, hiddenInput) {
    element.addEventListener('click', function () {
      var color = generateRandomParameter(array);
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
      hiddenInput.value = color;
    });
  };
})();
