async function getItemId(userId, orderId) {
  var { orders } = await this.findOne({ userId });

  var { items } = orders.find((order) => order.id == orderId);

  var itemId = items.map((item) => item.id);

  return itemId;
}

export default getItemId;
