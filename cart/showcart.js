const cartContainer = document.querySelector(".cart-container"),
  cartEl = document.querySelector(".cart");

export const showCart = () => {
  cartContainer.classList.add("transparent");
  cartEl.classList.add("show");
};
