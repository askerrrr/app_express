var updateItemId = async (collection, userId, orderId, items) => {
  var result = await collection.updateOne(
    { userId, "orders.id": orderId },
    {
      $set: { "orders.$.items": items },
    }
  );

  return result.acknowledged;
};

export default updateItemId;
