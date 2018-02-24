// Events
'use strict';
// Настройка открытия/закрытия окна настройки волшебников
(function () {
  var ESC_KEYCODE = 27;
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.setup.querySelector('.setup-close');
  var setupUserName = window.setup.querySelector('.setup-user-name');

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE && setupUserName !== document.activeElement) {
      closePopup();
    }
  };
  var openPopup = function () {
    window.setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };
  var closePopup = function () {
    window.setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.utils.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.utils.isEnterEvent(evt, closePopup);
  });
})();
