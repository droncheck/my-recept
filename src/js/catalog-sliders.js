import noUiSlider from 'nouislider';

export default function initCatalogSliders() {
  const $sliders = document.querySelectorAll('[data-slider]');

  $sliders.forEach($slider => {

    const $parent = $slider.closest('[data-slider-parent]');
    const $values = $parent.querySelectorAll('[data-slider-value]');

    const min = +$slider.dataset.sliderMin;
    const max = +$slider.dataset.sliderMax;
    const step = +$slider.dataset.sliderStep;
    const decimals = +$slider.dataset.sliderDecimals;
    const postfix = $slider.dataset.sliderPostfix;

    noUiSlider.create($slider, {
      range: {
        min: [min],
        max: [max],
      },
      step: step,
      start: [min, max],
      connect: true,
      format: {
        to: (value) => {
          return value.toFixed(decimals) + postfix;
        },
        from: (value) => {
          return value;
        }
      }
    });

    $slider.noUiSlider.on('update', function() {
      const values = this.get();

      $values[0].innerHTML = values[0];
      $values[1].innerHTML = values[1];
    });

  });
}