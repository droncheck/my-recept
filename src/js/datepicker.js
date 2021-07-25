import {Datepicker} from 'vanillajs-datepicker';
import ru from '../../node_modules/vanillajs-datepicker/js/i18n/locales/ru.js';
Object.assign(Datepicker.locales, ru);

export default function initCalendar() {
  const $parent = document.querySelector('[data-calendar]');
  let orientation = 'right bottom'
  if (window.matchMedia('(max-width: 575.98px)').matches) {
    orientation = 'left bottom'
  }

  if ($parent) {
    const $calendar = $parent.querySelector('input');

    new Datepicker($calendar, {
      language: 'ru',
      orientation: orientation,
      minDate: new Date(),
    });

    $calendar.addEventListener('show', () => {
      $calendar.classList.add('active');
    });

    $calendar.addEventListener('hide', () => {
      $calendar.classList.remove('active');
    });

    $calendar.addEventListener('changeDate', () => {
      $calendar.dispatchEvent(new Event('change'));
    });
  }
}