import initArticles from "./articles";
import initBanners from "./banners";
import initCatalogItem from "./catalog-item";
import initCatalogSliders from "./catalog-sliders";
import initGallery from "./gallery";
import initMobileMenu from "./header";
import initInputs from "./input";
import initProducts from "./products";

document.addEventListener('DOMContentLoaded', function() {

  initMobileMenu();

  initBanners();

  initProducts();

  initCatalogItem();

  initInputs();

  initArticles();

  initGallery();

  initCatalogSliders();
});
