const body = document.querySelector('body');
const header = document.querySelector('.header');
const headerBurger = document.querySelector('.header-burger');

headerBurger.addEventListener("click", () => {
  body.classList.toggle('scroll-disabled');
  header.classList.toggle('is-open');
  headerBurger.classList.toggle('is-open');
});

