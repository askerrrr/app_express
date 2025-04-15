var getOrder = async (collection, userId, orderId) => {
  var { orders } = await collection.findOne({ userId }).exec();

  var order = orders.find((order) => order.id == orderId);

  return order;
};

export default getOrder;
