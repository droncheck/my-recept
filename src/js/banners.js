import Swiper, {Navigation} from 'swiper';
Swiper.use([Navigation]);

export default function initBanners() {
  const $container = document.querySelector('[data-banners-slider]');
  if ($container) {
    const $prev = $container.querySelector('[data-banners-slider-prev]');
    const $next = $container.querySelector('[data-banners-slider-next]');
    const $counter = $container.querySelector('[data-banners-slider-counter]');

    let length;

    new Swiper($container, {
      navigation: {
        prevEl: $prev,
        nextEl: $next
      },
      // loop: true,
      direction: 'vertical',
      touchReleaseOnEdges: true,
      on: {
        init(swiper) {
          if (!length) {
            length = Array.prototype.filter.call(swiper.slides, (slide) => {
              return !slide.classList.contains('swiper-slide-duplicate');
            }).length;

            if (length < 10) {
              length = `0${length}`;
            }
          }

          let active = swiper.realIndex + 1;

          if (active < 10) {
            active = `0${active}`;
          }

          $counter.innerHTML = `
            <div class="banners__slider-counter-active">${active}&nbsp;/&nbsp;</div>
            <div class="banners__slider-counter-all"> ${length}</div>
          `
        },
        slideChange(swiper) {
          if (!length) {
            length = Array.prototype.filter.call(swiper.slides, (slide) => {
              return !slide.classList.contains('swiper-slide-duplicate');
            }).length;

            if (length < 10) {
              length = `0${length}`;
            }
          }

          let active = swiper.realIndex + 1;

          if (active < 10) {
            active = `0${active}`;
          }

          $counter.innerHTML = `
            <div class="banners__slider-counter-active">${active}&nbsp;/&nbsp;</div>
            <div class="banners__slider-counter-all"> ${length}</div>
          `
        }
      }
    });
  }

  document.addEventListener('click', (e) => {
    if (e.target.dataset.bannersBtnsClose) {
      e.target.closest('.banners__btns').remove();
    }
  });

}