'use strict';
// По клику меняю цвета частей волшебника
(function () {
  window.colorize = {
    generateRandomParameter: function (arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },
    colorizeWizard: function (element, array, hiddenInput) {
      element.addEventListener('click', function () {
        var color = window.colorize.generateRandomParameter(array);
        if (element.tagName.toLowerCase() === 'div') {
          element.style.backgroundColor = color;
        } else {
          element.style.fill = color;
        }
        hiddenInput.value = color;
      });
    }
  };
})();
