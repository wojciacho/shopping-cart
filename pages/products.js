import "../toggleNav.js";
import "../cart/showCart.js";
import "../cart/setupCart.js";

import {displayProducts} from "../displayProducts.js";
import {getElement} from "../utils/getElement.js";
import {setupStore, store} from "../setup.js";
import {fetchProducts} from "../fetchProducts.js";

const init = async () => {
  if (store.length < 1) {
    const products = await fetchProducts();
    setupStore(products);
  }
  displayProducts(store, getElement(".products-content"));
};

init();
