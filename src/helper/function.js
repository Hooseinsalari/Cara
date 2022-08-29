const isInCart = (state, id) => {
  const result = !!state.selectedItems.find((item) => item.id === id);

  return result;
};

const shorten = (text) => {
  const len = 20
  return text.length > len ? text.substring(0, len - 1) + "..." : text
}

export { isInCart, shorten };
