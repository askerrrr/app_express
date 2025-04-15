var getItemId = async (collection, userId, orderId) => {
  var { orders } = await collection.findOne({ userId }).exec();

  var { items } = orders.find((order) => order.id == orderId);

  var itemId = items.map((item) => item.id);

  return itemId;
};

export default getItemId;
