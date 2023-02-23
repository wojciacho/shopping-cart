import {getItems, saveItems} from "./utils/localstorage.js";

let store = getItems("store");

const setupStore = (products) => {
  store = products.items.map((item) => {
    const {title, price, featured} = item.fields;
    const {id} = item.sys;
    const image = item.fields.image.fields.file.url;
    return {title, price, id, image, featured};
  });
  saveItems("store", store);
};

export {setupStore, store};
