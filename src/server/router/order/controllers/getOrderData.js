import logger from "../../../logger.js";

var getOrderData = async (req, res) => {
  var { userId, orderId } = req.params;

  var userCollection = req.app.locals.userCollectionServices();

  try {
    var user = await userCollection.getUserById(userId);

    var order = user.orders.find((order) => order.id === orderId);

    return order ? res.json(order) : res.sendStatus(404);
  } catch (err) {
    logger.error({ place: "getting order info", userId, err });
    return res.status(500);
  }
};
export default getOrderData;
