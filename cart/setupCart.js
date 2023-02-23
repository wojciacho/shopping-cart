import {formatPrice} from "../formatPrice.js";
import {getElement} from "../utils/getElement.js";
import {getItems, saveItems} from "../utils/localstorage.js";
import {openCart} from "./showCart.js";
import {cartDom} from "./cartDom.js";
import {findProduct} from "./findProduct.js";

const cartAmount = getElement(".cart-items"),
  cartItem = getElement(".cart-item"),
  cartContent = getElement(".cart-content"),
  cartTotal = getElement(".cart-total"),
  itemAmount = getElement(".cart-total");

let cart = getItems("cart");

export const addToCart = (id) => {
  let item = cart.find((cartItem) => cartItem.id === id);
  if (!item) {
    let product = findProduct(id);
    product = {...product, amount: 1};
    cart = [...cart, product];
    cartDom(product);
  } else {
    const amount = increaseCart(id);
    const items = [...cartContent.querySelectorAll(".item-amount")];
    const newAmount = items.find((value) => value.dataset.id === id);
    newAmount.textContent = amount;
  }
  displayCartAmount();
  displayCartTotal();
  saveItems("cart", cart);
  openCart();
};

const increaseCart = (id) => {
  let newAmount;
  cart = cart.map((cartItem) => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount + 1;
      cartItem = {...cartItem, amount: newAmount};
    }
    return cartItem;
  });
  return newAmount;
};

const displayCartAmount = () => {
  const amount = cart.reduce((total, cartItem) => {
    return (total += cartItem.amount);
  }, 0);
  cartAmount.textContent = amount;
};

const displayCartTotal = () => {
  let total = cart.reduce((total, cartItem) => {
    return (total += cartItem.price * cartItem.amount);
  }, 0);
  cartTotal.textContent = formatPrice(total);
};

const cartFunctionality = () => {};

const displayCartItems = () => {
  cart.forEach((item) => {
    cartDom(item);
  });
};

const init = () => {
  displayCartAmount();
  displayCartTotal();
  displayCartItems();
  cartFunctionality();
};

init();
