export default function initTabs() {
  const $parents = document.querySelectorAll('[data-tabs]');

  $parents.forEach($parent => {

    const $pills = $parent.querySelectorAll('[data-pill]');
    const $tabs = $parent.querySelectorAll('[data-tab]');

    $pills.forEach($pill => {

      $pill.addEventListener('click', () => {
        const name = $pill.dataset.pill;

        $pills.forEach($pill => {

          if ($pill.dataset.pill === name) {
            $pill.classList.add('active');
          } else {
            $pill.classList.remove('active');
          }

        });

        $tabs.forEach($tab => {

          if ($tab.dataset.tab === name) {
            $tab.classList.add('active');
          } else {
            $tab.classList.remove('active');
          }

        });

      });

    });

  });
}