'use strict';

const modalOpenBtns = document.querySelectorAll('.show-modal');
const modalBtn = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const removeHiddenClass = function () {
  modalBtn.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const addHiddenClass = function () {
  modalBtn.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < modalOpenBtns.length; i++) {
  modalOpenBtns[i].addEventListener('click', removeHiddenClass);
}

modalCloseBtn.addEventListener('click', addHiddenClass);

overlay.addEventListener('click', addHiddenClass);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modalBtn.classList.contains('hidden')) {
    addHiddenClass();
  }
});
