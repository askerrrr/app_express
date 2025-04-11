async function getCompletedOrders(userId) {
  var { orders } = await this.findOne({ userId });

  var completedOrders = orders.filter(
    (order) => order.orderStatus == "order-is-completed:6"
  );

  return completedOrders;
}

export default getCompletedOrders;
