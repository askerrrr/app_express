async function getOrderStatus(userId, orderId) {
  var { orders } = await this.findOne({ userId });

  var { orderStatus } = orders.find((order) => order.id == orderId);

  return orderStatus;
}

export default getOrderStatus;
