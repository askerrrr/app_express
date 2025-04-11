var allItemsAreDelivered = async (items) =>
  items.every((item) => item.delivered == 1);

export default allItemsAreDelivered;
