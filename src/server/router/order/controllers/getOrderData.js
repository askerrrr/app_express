import logger from "../../../logger.js";

var getOrderData = async (req, res) => {
  var { userId, orderId } = req.params;

  var { getUser } = req.app.locals.userCollectionServices();

  try {
    var user = await getUser(userId);

    var order = user.orders.find((order) => order.id === orderId);
    console.log(order);
    return order ? res.json(order) : res.sendStatus(404);
  } catch (err) {
    logger.error({ place: "getting order info", userId, err });
    return res.status(500);
  }
};
export default getOrderData;
