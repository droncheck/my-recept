export default function initMobileMenu() {

  // const $header = document.querySelector('.header');
  const $menu = document.querySelector('.menu');
  const $burger = document.querySelector('.header__burger');
  const $search = document.querySelector('.header__search-wrap');
  const $searchBtn = document.querySelector('[data-search-open]');

  $burger.addEventListener('click', () => {
    $burger.classList.toggle('active');
    $menu.classList.toggle('active');
    document.body.classList.toggle('overflow-hidden');
  });

  $searchBtn.addEventListener('click', () => {
    $search.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    const $target = e.target;

    if ($search.classList.contains('active')) {

      if (!$target.closest('.header__search-wrap') && $target !== $searchBtn) {
        $search.classList.remove('active');
      }

    }
  });

}