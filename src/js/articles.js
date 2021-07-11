import MagicGrid from './magic-grid.esm'

export default function initArticles() {

  const $container = document.querySelector('.articles__items');

  if ($container) {
    let articlesGrid;

    const initGrid = () => {
      if (window.matchMedia('(min-width: 992px)').matches && !articlesGrid) {
        articlesGrid = new MagicGrid({
          container: $container,
          gutter: 0,
          maxColumns: 2,
          static: true,
          useMin: false,
          useTransform: false
        });

        window.articlesGrid = articlesGrid;

        articlesGrid.listen();
      } else {

        if (articlesGrid) {
          $container.style = '';
          articlesGrid.unlisten();
          articlesGrid = null;

          $container.querySelectorAll('.articles__item-wrap').forEach($item => {
            $item.style = '';
          });
        }
      }
    }

    initGrid();

    window.addEventListener('resize', initGrid);
  }
}