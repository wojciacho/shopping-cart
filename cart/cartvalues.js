const cartTotal = document.querySelector(".cart-total"),
  cartItems = document.querySelector(".cart-items");

export const setCartValues = (cart) => {
  let tempTotal = 0;
  let itemsTotal = 0;
  cart.map((item) => {
    tempTotal += item.price * item.amount;
    itemsTotal += item.amount;
  });

  cartTotal.innerText = +tempTotal.toFixed(2);
  cartItems.innerText = itemsTotal;
};
