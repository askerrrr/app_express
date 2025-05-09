var getOrderData = async (req, res, next) => {
  var { userId, orderId } = req.params;

  var { getOrder } = req.app.locals.userCollectionServices();

  try {
    var order = await getOrder(userId, orderId);

    return res.json(order);
  } catch (e) {
    next(e);
  }
};
export default getOrderData;
