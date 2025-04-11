import logger from "../../../logger.js";

var getOrderStatus = async (req, res) => {
  var { userId, orderId } = req.params;

  var { getUser } = req.app.locals.userCollectionServices();

  try {
    var { orders } = await getUser(userId);

    if (!orders.length) {
      return res.sendStatus(404);
    }

    var order = orders.find((order) => order.id === orderId);

    if (!order) {
      return res.sendStatus(404);
    }

    var { orderStatus } = order;

    return res.json({ orderStatus });
  } catch (err) {
    logger.error({ place: "getting order status", userId, err });
    return res.status(500);
  }
};

export default getOrderStatus;
