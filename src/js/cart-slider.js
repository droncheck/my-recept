import Swiper, {Navigation} from "swiper";
Swiper.use([Navigation]);

export default function initCartSlider() {

  const $cartSlider = document.querySelector('[data-cart-slider]');

  if ($cartSlider) {
    const $prev = $cartSlider.querySelector('[data-cart-slider-prev]');
    const $next = $cartSlider.querySelector('[data-cart-slider-next]');
    const $counter = $cartSlider.querySelector('[data-cart-slider-counter]');
    const $scrollbar = $cartSlider.querySelector('[data-cart-slider-scrollbar]');

    let length;

    new Swiper($cartSlider, {
      slidesPerView: 1,
      spaceBetween: 33,
      navigation: {
        prevEl: $prev,
        nextEl: $next
      },
      scrollbar: {
        el: $scrollbar,
        draggable: false
      },
      breakpoints: {
        576: {
          slidesPerView: 3,
        }
      },
      on: {
        init(swiper) {
          if (!length) {
            length = Array.prototype.filter.call(swiper.slides, (slide) => {
              return !slide.classList.contains('swiper-slide-duplicate');
            }).length;
          }

          let active = swiper.realIndex + 3;

          $counter.innerHTML = `
            <div class="cart__main-slider-counter-active">${active}</div>
            <div class="cart__main-slider-counter-all">&nbsp;/ ${length}</div>
          `;
        },
        slideChange(swiper) {
          if (!length) {
            length = Array.prototype.filter.call(swiper.slides, (slide) => {
              return !slide.classList.contains('swiper-slide-duplicate');
            }).length;
          }

          let active = swiper.realIndex + 3;

          $counter.innerHTML = `
            <div class="cart__main-slider-counter-active">${active}</div>
            <div class="cart__main-slider-counter-all">&nbsp;/ ${length}</div>
          `;
        },
      }
    });
  }

}