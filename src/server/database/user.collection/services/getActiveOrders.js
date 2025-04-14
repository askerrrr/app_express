var getActiveOrders = async (collection, userId) => {
  var { orders } = await collection.findOne({ userId });

  var activeOrders = orders.filter(
    (order) => order.orderStatus !== "order-is-completed:6"
  );

  return activeOrders;
};

export default getActiveOrders;
