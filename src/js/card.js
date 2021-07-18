import Swiper, {Navigation} from "swiper";
Swiper.use([Navigation]);

export default function initCard() {

  const $cardImgSlider = document.querySelector('[data-card-img-slider]');

  if ($cardImgSlider) {
    const $prev = $cardImgSlider.querySelector('[data-card-img-slider-prev]');
    const $next = $cardImgSlider.querySelector('[data-card-img-slider-next]');
    const $counter = $cardImgSlider.querySelector('[data-card-img-slider-counter]');

    let length;

    new Swiper($cardImgSlider, {
      loop: true,
      navigation: {
        prevEl: $prev,
        nextEl: $next
      },
      on: {
        slideChange(swiper) {
          if (!length) {
            length = Array.prototype.filter.call(swiper.slides, (slide) => {
              return !slide.classList.contains('swiper-slide-duplicate');
            }).length;
          }

          let active = swiper.realIndex + 1;

          $counter.innerHTML = `
            <div class="card__img-slider-counter-active">${active}</div>
            <div class="card__img-slider-counter-all">&nbsp;/ ${length}</div>
          `;
        }
      }
    });
  }

  document.addEventListener('click', (e) => {

    const $target = e.target;

    if ($target.dataset.fillingBtn) {

      const filling = $target.dataset.filling;
      const $input = document.querySelector(`[data-filling-input="${$target.dataset.fillingBtn}"]`);
      const $btns = document.querySelectorAll(`[data-filling-btn="${$target.dataset.fillingBtn}"]`);

      $btns.forEach($btn => {

        if ($btn.dataset.filling !== filling) {
          $btn.classList.remove('disabled');
          $btn.querySelector('.popup__slide-btn-text').textContent = 'выбрать';
        } else {
          $btn.classList.add('disabled');
          $btn.querySelector('.popup__slide-btn-text').textContent = 'убрать';
        }

      });

      $input.value = filling;

    }

  });

}