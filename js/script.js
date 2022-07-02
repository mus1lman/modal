const btn = document.querySelector('.btn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');
const div = document.querySelector('.div');

const openModal = function () {
  modal.classList.remove('hidden');
  div.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  div.classList.add('hidden');
};

btn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
div.addEventListener('click', closeModal);