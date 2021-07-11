export default function initCatalogItem() {

  document.addEventListener('click', (e) => {

    const $target = e.target;
    const cartBtn = `
      <button class="catalog__item-cart" type="button" data-catalog-item-cart="true">в корзину</button>
    `;
    const cartText = `
      <div class="catalog__item-cart" data-catalog-item-cart="">в корзине</div>
    `;

    if ($target.dataset.catalogItemCart) {
      const $parent = $target.closest('[data-catalog-item-controls]');
      const $input = $parent.querySelector('[data-catalog-item-input]');

      $input.value = 1;
      $parent.classList.remove('hidden');
      $target.remove();
      $parent.insertAdjacentHTML('beforeend', cartText);
    } else if ($target.dataset.catalogItemInc) {
      const $parent = $target.closest('[data-catalog-item-controls]');
      const $input = $parent.querySelector('[data-catalog-item-input]');
      const $cartBtn = $parent.querySelector('[data-catalog-item-cart]');

      $input.value = +$input.value + 1;

      if (+$input.value === 1) {
        $parent.classList.remove('hidden');
        $cartBtn.remove();
        $parent.insertAdjacentHTML('beforeend', cartText);
      }
    } else if ($target.dataset.catalogItemDec) {
      const $parent = $target.closest('[data-catalog-item-controls]');
      const $input = $parent.querySelector('[data-catalog-item-input]');
      const $cartBtn = $parent.querySelector('[data-catalog-item-cart]');

      $input.value = +$input.value - 1;

      if (+$input.value === 0) {
        $parent.classList.add('hidden');
        $cartBtn.remove();
        $parent.insertAdjacentHTML('beforeend', cartBtn);
      }
    }

  })

}