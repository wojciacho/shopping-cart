export const getElement = (select) => {
  const element = document.querySelector(select);
  if (element) return element;
};
