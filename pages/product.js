import "../toggleNav.js";
import "../cart/showCart.js";
import "../cart/setupCart.js";
import {addToCart} from "../cart/setupCart.js";
import {getElement} from "../utils/getElement.js";
import {formatPrice} from "../formatPrice.js";
import {fetchProducts} from "../fetchProducts.js";
import {setupStore, store} from "../setup.js";

const pageTitle = getElement(".page-hero-title")

const displayProduct = (products, element) => {
  element.innerHTML = products
    .map((product) => {
      const {id, title, image, price} = product;
      document.title = `${title.toUpperCase()} | .STORE`
      pageTitle.textContent = `HOME / ${title}`
      return `<div class="section-center single-product-center">
      <img src="${image}" class="single-product-img img"alt="">
      <article class="single-product-info">
          <div>
              <h2 class="products-title">${title}</h2>
              <p class="single-product-price">${formatPrice(price)}</p>
              <div class="single-product-color-first"></div>
              <div class="single-product-color-second"></div>
              <p class="single-product-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, veritatis ea! Nisi ipsam laudantium illo amet, praesentium fuga vel. Dolore.</p>
              <button class="btn" data-id="${id}">add to cart</button>
          </div>
      </article>
  </div>`;
    })
    .join("");

  element.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn")) {
      addToCart(e.target.dataset.id);
    }
  });
};

window.addEventListener("DOMContentLoaded", async () => {
  const URL = location.search.slice(1).split("&")[0].split("=")[1];
  const products = await fetchProducts();
  if (products) {
    setupStore(products);
    const singleProduct = store.filter((product) => product.id === URL);
    displayProduct(singleProduct, getElement(".single-product"));
  }
});

