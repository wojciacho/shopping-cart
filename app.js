import {getData, getCartItems, cartFunctionality} from "./setup.js";

document.addEventListener("DOMContentLoaded", () => {
  getCartItems();
  getData();
  cartFunctionality()
});
