// DOM
'use strict';

(function () {
  var userDialog = document.querySelector('.setup');

  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var WIZARD_QUANTITY = 4;
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var wizards = [];
  var newWizard;

  window.setup = document.querySelector('.setup');
  var setupWizard = window.setup.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardCoatInput = document.querySelector('input[name="coat-color"]');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardEyesInput = document.querySelector('input[name="eyes-color"]');
  var setupFireball = window.setup.querySelector('.setup-fireball-wrap');
  var setupFireballInput = document.querySelector('input[name="fireball-color"]');
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  // Генерация новых волшебников и добавление в дерево
  var generateRandomAppearance = function (currentWizards) {
    for (var i = 0; i < WIZARD_QUANTITY; i++) {
      newWizard = {
        name: window.colorize.generateRandomParameter(WIZARD_NAMES) + ' ' + window.colorize.generateRandomParameter(WIZARD_SECOND_NAMES),
        coatColor: window.colorize.generateRandomParameter(WIZARD_COAT_COLOR),
        eyesColor: window.colorize.generateRandomParameter(WIZARD_EYES_COLOR)
      };
      currentWizards[i] = newWizard;
    }
    return currentWizards;
  };

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  var addWizardsInDOM = function () {
    var fragment = document.createDocumentFragment();
    generateRandomAppearance(wizards);
    for (var j = 0; j < wizards.length; j++) {
      fragment.appendChild(renderWizard(wizards[j]));
    }
    similarListElement.appendChild(fragment);
  };
  addWizardsInDOM();

  userDialog.querySelector('.setup-similar').classList.remove('hidden');

  // Раскраска основного волшебника по клику на его определенную часть
  window.colorize.changeColorOfWizard(wizardCoat, coatColors, wizardCoatInput);
  window.colorize.changeColorOfWizard(wizardEyes, eyesColors, wizardEyesInput);
  window.colorize.changeColorOfWizard(setupFireball, fireballColors, setupFireballInput);
})();
