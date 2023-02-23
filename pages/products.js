import "../toggleNav.js";
import "../cart/showCart.js";
import "../cart/setupCart.js";

import {displayProducts} from "../displayProducts.js";
import {getElement} from "../utils/getElement.js";
import {store} from "../setup.js";

displayProducts(store, getElement(".products-content"));
