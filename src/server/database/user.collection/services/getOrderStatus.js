var getOrderStatus = async (collection, userId, orderId) => {
  var { orders } = await collection.findOne({ userId }).exec();

  var { orderStatus } = orders.find((order) => order.id == orderId);

  return orderStatus;
};

export default getOrderStatus;
