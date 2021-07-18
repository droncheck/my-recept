export default function initFile() {

  const $wrap = document.querySelector('[data-file-wrap]');

  if ($wrap) {
    const $input = $wrap.querySelector('[data-file]');
    const $label = $wrap.querySelector('[data-file-label]');

    const placeholder = $label.dataset.fileLabel;

    $input.addEventListener('change', () => {
      let value = $input.value.split(/(\\|\/)/g).pop();

      $input.value ?
        $label.textContent = value :
        $label.textContent = placeholder;

    });

  }

}