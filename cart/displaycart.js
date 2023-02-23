import {formatPrice} from "../formatPrice.js";

const cartContent = document.querySelector(".cart-content");

export const displayCart = (item) => {
  const element = document.createElement("div");
  element.classList.add("cart-item");
  element.innerHTML = `<img src="${item.image}" alt="cart" />
    <div>
      <h4>${item.title}</h4>
      <h5>${formatPrice(item.price)}</h5>
      <span class="remove-item" data-id=${item.id}>remove</span>
    </div>
    <div>
      <i class="fas fa-chevron-up" data-id=${item.id}></i>
      <p class="item-amount">${item.amount}</p>
      <i class="fas fa-chevron-down" data-id=${item.id}></i>
    </div>`;

  cartContent.appendChild(element);
};
