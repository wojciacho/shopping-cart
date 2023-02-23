import {formatPrice} from "../formatPrice.js";
import {getElement} from "../utils/getElement.js";

const cartContent = getElement(".cart-content");

export const cartDom = ({id, title, price, image, amount}) => {
  const element = document.createElement("div");
  element.classList.add("cart-item");
  element.setAttribute("data-id", id);
  element.innerHTML = `<img src="${image}" alt="${title}" />
      <div>
        <h4>${title}</h4>
        <h5>${formatPrice(price)}</h5>
        <span class="remove-item" data-id=${id}>remove</span>
      </div>
      <div>
        <i class="fas fa-chevron-up" data-id=${id}></i>
        <p class="item-amount" data-id="${id}">${amount}</p>
        <i class="fas fa-chevron-down" data-id=${id}></i>
      </div>`;
  cartContent.appendChild(element);
};
