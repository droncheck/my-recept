function getCoords($el) {
  const top = $el.getBoundingClientRect().top;

  return top + window.pageYOffset;
}

export default function initScroll() {
  const $header = document.querySelector('.header');
  const $parent = document.querySelector('[data-scroll-wrap]');

  if ($parent) {

    const $el = $parent.querySelector('[data-scroll]');
    const parentY = getCoords($parent);

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop + $header.offsetHeight < parentY) {
        $el.style.transform = `translateY(0px)`;
      } else if (scrollTop + $header.offsetHeight >= parentY && scrollTop + $header.offsetHeight + $el.offsetHeight < parentY + $parent.offsetHeight) {
        $el.style.transform = `translateY(${scrollTop + $header.offsetHeight - parentY}px`;
      } else {
        $el.style.transform = `translateY(${$parent.offsetHeight - $el.offsetHeight}px`;
      }
    }

    if (window.matchMedia('(min-width: 992px)').matches) {
      window.addEventListener('scroll', handleScroll);
    } else {
      window.removeEventListener('scroll', handleScroll);
      $el.style.transform = `translateY(0px)`;
    }

    window.addEventListener('resize', () => {
      if (window.matchMedia('(min-width: 992px)').matches) {
        window.addEventListener('scroll', handleScroll);
      } else {
        window.removeEventListener('scroll', handleScroll);
        $el.style.transform = `translateY(0px)`;
      }
    });

  }

}