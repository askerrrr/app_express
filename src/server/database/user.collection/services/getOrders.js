async function getOrders(userId) {
  var { orders } = await this.findOne({ userId });

  return orders;
}

export default getOrders;
