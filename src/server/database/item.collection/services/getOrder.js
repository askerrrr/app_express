async function getOrder(userId, orderId) {
  var { orders } = await this.findOne({ userId });

  var order = orders.find((order) => order.id == orderId);

  return order;
}

export default getOrder;
