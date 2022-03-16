'use strict';

const modalOpenBtns = document.querySelectorAll('.show-modal');
const modalBtn = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

function removeHiddenClass() {
  modalBtn.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function addHiddenClass() {
  modalBtn.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < modalOpenBtns.length; i++) {
  modalOpenBtns[i].addEventListener('click', () => removeHiddenClass());
}

modalCloseBtn.addEventListener('click', () => addHiddenClass());

overlay.addEventListener('click', () => addHiddenClass());

document.addEventListener('keydown', event =>
  event.key === 'Escape' ? addHiddenClass() : removeHiddenClass()
);
