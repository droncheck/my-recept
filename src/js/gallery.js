import Swiper, {Autoplay} from 'swiper';
Swiper.use([Autoplay]);

export default function initGallery() {

  new Swiper('[data-gallery-slider]', {
    slidesPerView: 2,
    spaceBetween: 8,
    loop: true,
    speed: 6000,
    centeredSlides: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      waitForTransition: true,
    },
    breakpoints: {
      576: {
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    }
  })

}