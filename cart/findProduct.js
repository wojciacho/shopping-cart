import {store} from "../setup.js";

export const findProduct = (id) => {
  let product = store.find((product) => product.id === id);
  return product;
};
