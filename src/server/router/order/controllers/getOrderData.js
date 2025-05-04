var getOrderData = async (req, res, next) => {
  var { userId, orderId } = req.params;

  var userCollection = req.app.locals.userCollectionServices();

  try {
    var user = await userCollection.getUserById(userId);

    var order = user.orders.find((order) => order.id === orderId);

    return order ? res.json(order) : res.sendStatus(404);
  } catch (e) {
    next(e);
  }
};
export default getOrderData;
