import Swiper, {Navigation, Scrollbar} from 'swiper';
Swiper.use([Navigation, Scrollbar]);

export default function initProducts() {

  const $parent = document.querySelector('[data-products-slider-wrap]');
  const $slider = $parent.querySelector('[data-products-slider]');
  const $prev = $parent.querySelector('[data-products-slider-prev]');
  const $next = $parent.querySelector('[data-products-slider-next]');
  const $scrollbar = $parent.querySelector('[data-products-slider-scrollbar]');

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
      }
    }
  })

}