var getOrderType = async (collection, userId, orderId) => {
  var { orders } = await collection.findOne({ userId });

  var { type } = orders.find((order) => order.id == orderId);

  return type;
};

export default getOrderType;
