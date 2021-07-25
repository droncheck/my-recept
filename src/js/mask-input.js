import IMask from 'imask';

export default function initMasks() {

  const $inputs = document.querySelectorAll('[type="tel"]');

  $inputs.forEach($input => {
    IMask($input, {
      mask: '+{7}(000)000-00-00',
    });
  });

}