import {addToCart} from "./cart/setupCart.js";
import {formatPrice} from "./formatPrice.js";

export const displayProducts = (products, element) => {
  element.innerHTML = products
    .map((product) => {
      const {id, title, image, price} = product;
      return `<article class="product">
            <div class="img-container">
              <img src="${image}" alt="product" class="product-img" />
              <button class="bag-btn" data-id="${id}">
                <i class="fas fa-shopping-cart"></i>
                add to cart
              </button>
              <button class="search-btn" data-id="${id}">
              <a href="product.html?id=${id}">
                <i class="fas fa-search"></i>
                view details
                </a>
              </button>
            </div>
            <h3>${title}</h3>
            <h4>${formatPrice(price)}</h4>
          </article>`;
    })
    .join("");

  element.addEventListener("click", (e) => {
    if (e.target.classList.contains("bag-btn")) {
      addToCart(e.target.dataset.id);
    }
  });
};
