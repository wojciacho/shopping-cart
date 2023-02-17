export const saveItems = (products) => {
  localStorage.setItem("products", JSON.stringify(products));
};

export const getItems = (id) => {
  let products = JSON.parse(localStorage.getItem("products"));
  return products.find((product) => product.id === id);
};

export const saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const getCart = () => {
  return localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
};
