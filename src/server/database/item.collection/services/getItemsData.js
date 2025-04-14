var getItemsData = async (collection, userId, orderId) => {
  var { orders } = await collection.findOne({ userId });

  var { items, totalSum } = orders.find((order) => order.id == orderId);

  return { items, totalSum };
};
export default getItemsData;
