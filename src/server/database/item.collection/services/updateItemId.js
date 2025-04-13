async function updateItemId(userId, orderId, items) {
  var result = await this.updateOne(
    { userId, "orders.id": orderId },
    {
      $set: { "orders.$.items": items },
    }
  );

  return result.modifiedCount;
}

export default updateItemId;
