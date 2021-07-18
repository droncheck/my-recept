import initArticles from "./articles";
import initBanners from "./banners";
import initCatalogItem from "./catalog-item";
import initCatalogSliders from "./catalog-sliders";
import initCounters from "./counter";
import initFile from "./file";
import initGallery from "./gallery";
import initMobileMenu from "./header";
import initInputs from "./input";
import initProducts from "./products";
import GLightbox from 'glightbox';
import initCard from "./card";
import initPopups from "./popup";
import initTabs from "./tabs";

document.addEventListener('DOMContentLoaded', function() {

  GLightbox();

  initMobileMenu();

  initBanners();

  initProducts();

  initCatalogItem();

  initInputs();

  initArticles();

  initGallery();

  initCatalogSliders();

  initCounters();

  initFile();

  initCard();

  initPopups();

  initTabs();

});
