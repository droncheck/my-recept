import Swiper, {Navigation, Scrollbar} from 'swiper';
Swiper.use([Navigation, Scrollbar]);

export default function initProducts() {

  const $parents = document.querySelectorAll('[data-products-slider-wrap]');
  $parents.forEach($parent => {
    const $slider = $parent.querySelector('[data-products-slider]');
    const $prev = $parent.querySelector('[data-products-slider-prev]');
    const $next = $parent.querySelector('[data-products-slider-next]');
    const $scrollbar = $parent.querySelector('[data-products-slider-scrollbar]');

    new Swiper($slider, {
      slidesPerView: 1,
      spaceBetween: $slider.dataset.productsSlider
        ? 30
        : 15,
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
          slidesPerView: $slider.dataset.productsSlider
            ? +$slider.dataset.productsSlider
            : 2,
          spaceBetween: $slider.dataset.productsSlider
            ? 50
            : 30,
        }
      }
    });
  });

}