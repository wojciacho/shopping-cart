import {getProducts, setup} from "./getproducts.js";

const cartBtn = document.querySelector(".cart-btn"),
  closeBtn = document.querySelector(".close-btn"),
  clearBtn = document.querySelector(".clear-btn"),
  cartContainer = document.querySelector(".cart-container"),
  cartEl = document.querySelector(".cart");

cartBtn.addEventListener("click", () => {
  cartEl.classList.add("show");
  cartContainer.classList.add("transparent");
});

closeBtn.addEventListener("click", () => {
  cartEl.classList.remove("show");
  cartContainer.classList.remove("transparent");
});

document.addEventListener("DOMContentLoaded", () => {
  getProducts();
  setup();
});
