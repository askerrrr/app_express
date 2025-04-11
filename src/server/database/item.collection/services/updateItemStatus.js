async function updateItemStatus(userId, orderId, items) {
  console.log("items: ", items);
  var result = await this.updateOne(
    { userId, "orders.id": orderId },
    {
      $set: { "orders.$.items": items },
    }
  );

  return result.modifiedCount;
}

export default updateItemStatus;
