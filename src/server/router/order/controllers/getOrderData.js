var getOrderData = async (req, res, next) => {
  var { userId, orderId } = req.params;

  var userCollection = req.app.locals.userCollectionServices();

  try {
    var order = await userCollection.getOrder(userId, orderId);

    return order ? res.json(order) : res.sendStatus(404);
  } catch (e) {
    next(e);
  }
};
export default getOrderData;
