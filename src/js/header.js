export default function initMobileMenu() {

  // const $header = document.querySelector('.header');
  const $menu = document.querySelector('.menu');
  const $burger = document.querySelector('.header__burger');

  $burger.addEventListener('click', () => {
    $burger.classList.toggle('active');
    $menu.classList.toggle('active');
    document.body.classList.toggle('overflow-hidden');
  });

}