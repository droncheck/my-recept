export default function initInputs() {
  const $inputs = document.querySelectorAll('[data-input');

  $inputs.forEach($parent => {

    const $input = $parent.querySelector('[data-input-field]');
    const $placeholder = $parent.querySelector('[data-input-placeholder]');

    $input.addEventListener('change', () => {
      if ($input.value !== '') {
        $placeholder.classList.add('focus');
      } else {
        $placeholder.classList.remove('focus');
      }
    });

  });
}