async function updateItemId(userId, orderId, index, newItemId) {
  var { orders } = await this.findOne({ userId });
  var { items } = orders.find((order) => order.id == orderId);

  items[index].id = newItemId;

  var result = await this.updateOne(
    { userId, "orders.id": orderId },
    {
      $set: { "orders.$.items": items },
    }
  );

  return result.modifiedCount;
}

export default updateItemId;
