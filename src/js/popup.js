import Swiper, {Navigation, Scrollbar} from 'swiper';
Swiper.use([Navigation, Scrollbar]);

export default function initPopups() {

  const $popups = document.querySelectorAll('[data-popup]');
  const $overlay = document.querySelector('[data-popup-overlay]');
  const $parents = document.querySelectorAll('[data-popup-slider-wrap]');

  $parents.forEach($parent => {
    const $slider = $parent.querySelector('[data-popup-slider]');
    const $prev = $parent.querySelector('[data-popup-slider-prev]');
    const $next = $parent.querySelector('[data-popup-slider-next]');
    const $scrollbar = $parent.querySelector('[data-popup-slider-scrollbar]');

    new Swiper($slider, {
      slidesPerView: 1,
      spaceBetween: 15,
      navigation: {
        prevEl: $prev,
        nextEl: $next,
      },
      scrollbar: {
        el: $scrollbar,
        draggable: false
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1624: {
          slidesPerView: 3,
          spaceBetween: 45,
        }
      }
    });
  });

  document.addEventListener('click', (e) => {

    const $target = e.target;

    if ($target.dataset.popupBtn) {
      const name = $target.dataset.popupBtn
      $overlay.classList.add('active');
      document.body.classList.add('overflow-hidden');

      $popups.forEach($popup => {

        if ($popup.dataset.popup === name) {
          $popup.classList.add('active');
        } else {
          $popup.classList.remove('active');
        }

      });
    } else if ($target.dataset.popupClose) {

      $overlay.classList.remove('active');
      document.body.classList.remove('overflow-hidden');

      $popups.forEach($popup => {

        $popup.classList.remove('active');

      });
    }

  })

}