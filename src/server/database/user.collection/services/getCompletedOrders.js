var getCompletedOrders = async (collection, userId) => {
  var { orders } = await collection.findOne({ userId }).exec();

  var completedOrders = orders.filter(
    (order) => order.orderStatus == "order-is-completed:6"
  );

  return completedOrders;
};

export default getCompletedOrders;
