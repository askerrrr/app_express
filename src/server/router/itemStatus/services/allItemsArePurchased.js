var allItemsArePurchased = async (items) =>
  items.every((item) => item.purchased == 1);

export default allItemsArePurchased;
