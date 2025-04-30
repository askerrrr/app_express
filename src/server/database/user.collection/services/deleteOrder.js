var deleteOrder = async (collection, userId, orderId) => {
  try {
    var result = await collection.updateOne(
      { userId, "orders.id": orderId },
      {
        $pull: { orders: { id: orderId } },
      }
    );

    return result.acknowledged;
  } catch {
    var err = new Error("error deleting user");
    throw err;
  }
};

export default deleteOrder;
