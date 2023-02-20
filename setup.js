import {setCartValues} from "./cart/cartvalues.js";
import {displayCart} from "./cart/displaycart.js";
import {populate} from "./cart/populatecart.js";
import {showCart} from "./cart/showcart.js";
import {getCart, getItems, saveCart, saveItems} from "./localstorage.js";

let items = [];
let buttonsDOM = [];

const productsEl = document.querySelector(".products-content"),
  cartBtn = document.querySelector(".cart-btn"),
  closeBtn = document.querySelector(".close-btn"),
  clearBtn = document.querySelector(".clear-btn"),
  cartContainer = document.querySelector(".cart-container"),
  cartEl = document.querySelector(".cart"),
  cartContent = document.querySelector(".cart-content");

export const getData = async () => {
  const response = await fetch("products.json");
  const data = await response.json();
  let products = data.items;
  products = products.map((item) => {
    const {title, price} = item.fields;
    const {id} = item.sys;
    const image = item.fields.image.fields.file.url;
    return {title, price, id, image};
  });
  let result = "";
  products.forEach((product) => {
    result += `<article class="product">
      <div class="img-container">
        <img src="${product.image}" alt="product" class="product-img" />
        <button class="bag-btn" data-id="${product.id}">
          <i class="fas fa-shopping-cart"></i>
          add to cart
        </button>
      </div>
      <h3>${product.title}</h3>
      <h4>$${product.price}</h4>
    </article>`;
  });

  productsEl.innerHTML = result;
  saveItems(products);
  const buttons = [...document.querySelectorAll(".bag-btn")];
  buttonsDOM = buttons;
  buttons.forEach((button) => {
    let id = button.dataset.id;
    let cart = items.find((item) => item.id === id);
    if (cart) {
      button.innerText = "in cart";
      button.disabled = true;
    }

    button.addEventListener("click", (e) => {
      e.target.innerText = "in cart";
      e.target.disabled = true;
      let cartItem = {...getItems(id), amount: 1};
      items = [...items, cartItem];
      saveCart(items);
      setCartValues(items);
      displayCart(cartItem);
      showCart();
    });
  });
};

const singleButton = (id) => {
  return buttonsDOM.find((button) => button.dataset.id === id);
};

const removeItem = (id) => {
  items = items.filter((item) => item.id !== id);
  setCartValues(items);
  saveCart(items);
  let button = singleButton(id);
  button.disabled = false;
  button.innerHTML = `<i class="fas fa-shopping-cart"></i>add to cart`;
};

const clearCartItems = () => {
  let cartItems = items.map((item) => item.id);
  cartItems.forEach((id) => removeItem(id));
  while (cartContent.children.length > 0) {
    cartContent.removeChild(cartContent.children[0]);
  }
  cartEl.classList.remove("show");
  cartContainer.classList.remove("transparent");
};

export const cartFunctionality = () => {
  clearBtn.addEventListener("click", clearCartItems);
};

export const getCartItems = () => {
  items = getCart();
  setCartValues(items);
  populate(items);
  cartBtn.addEventListener("click", () => {
    cartEl.classList.add("show");
    cartContainer.classList.add("transparent");
  });

  closeBtn.addEventListener("click", () => {
    cartEl.classList.remove("show");
    cartContainer.classList.remove("transparent");
  });
};
