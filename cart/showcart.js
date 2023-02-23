import {getElement} from "../utils/getElement.js";

const cartOpen = getElement(".cart-btn"),
  cartClose = getElement(".close-btn"),
  cartOverlay = getElement(".cart-container"),
  cart = getElement(".cart");

cartOpen.addEventListener("click", () => {
  cartOverlay.classList.add("transparent");
  cart.classList.add("show");
});

cartClose.addEventListener("click", () => {
  cartOverlay.classList.remove("transparent");
  cart.classList.remove("show");
});

export const openCart = () => {
  cartOverlay.classList.add("transparent");
  cart.classList.add("show");
};
