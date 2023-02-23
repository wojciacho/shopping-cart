export const saveItems = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};

export const getItems = (item) => {
  let products = localStorage.getItem(item);
  if (products) {
    products = JSON.parse(localStorage.getItem(item));
  } else {
    products = [];
  }
  return products;
};
