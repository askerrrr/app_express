async function getActiveOrders(userId) {
  var { orders } = await this.findOne({ userId });

  var activeOrders = orders.filter(
    (order) => order.orderStatus !== "order-is-completed:6"
  );

  return activeOrders;
}

export default getActiveOrders;
