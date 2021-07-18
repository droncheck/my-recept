export default function initCounters() {

  const $counters = document.querySelectorAll('[data-counter]');

  $counters.forEach($counter => {

    const $input = $counter.querySelector('[data-counter-input]');
    const $minus = $counter.querySelector('[data-counter-minus]');
    const $plus = $counter.querySelector('[data-counter-plus]');
    const $parts = $counter.querySelector('[data-counter-parts]');
    const step = parseFloat($input.dataset.counterStep);
    const min = parseFloat($input.dataset.counterMin);

    $minus.addEventListener('click', () => {

      const value = +$input.value;

      if (value - step >= min) {
        $input.value = value - step;
      }

      if ($parts) {
        $parts.innerHTML = $input.value / 0.2
      }

    });

    $plus.addEventListener('click', () => {

      const value = +$input.value;

      $input.value = value + step;

      if ($parts) {
        $parts.innerHTML = ` ${Math.round($input.value / 0.2)} `;
      }

    });

  });

}