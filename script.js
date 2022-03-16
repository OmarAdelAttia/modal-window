'use strict';

const modalOpenBtns = document.querySelectorAll('.show-modal');
const modalBtn = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

for (let i = 0; i < modalOpenBtns.length; i++) {
  console.log(modalOpenBtns[i].textContent);
}

