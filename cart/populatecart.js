import {displayCart} from "./displaycart.js";

export const populate = (cart) => {
  cart.forEach((item) => {
    displayCart(item);
  });
};
