import Swiper, {Navigation} from 'swiper';
Swiper.use([Navigation]);

export default function initLearingSlider() {

  const $parent = document.querySelector('[data-learning-slider-wrap]');

  if ($parent) {
    const $slider = $parent.querySelector('[data-learning-slider]');
    const $prev = $parent.querySelector('[data-learning-slider-prev]');
    const $next = $parent.querySelector('[data-learning-slider-next]');

    new Swiper($slider, {
      loop: true,
      navigation: {
        prevEl: $prev,
        nextEl: $next
      }
    });
  }

}