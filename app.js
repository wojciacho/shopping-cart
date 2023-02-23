
import {fetchProducts} from "./fetchProducts.js";
import {setupStore, store} from "./setup.js";
import {getElement} from "./utils/getElement.js";
import "./cart/showCart.js";
import "./toggleNav.js";
import {displayProducts} from "./displayProducts.js";

const init = async () => {
  const products = await fetchProducts();
  if (products) {
    setupStore(products);
    const featured = store.filter((product) => product.featured === true);
    displayProducts(featured, getElement(".products-content"));
  }
};

window.addEventListener("DOMContentLoaded", () => {
  init();
});
