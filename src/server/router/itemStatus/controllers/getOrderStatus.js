import logger from "../../../logger.js";

var getOrderStatus = async (req, res) => {
  var { userId, orderId } = req.params;

  var { getOrderStatus } = req.app.locals.userCollectionServices();

  try {
    var orderStatus = await getOrderStatus(userId, orderId);

    return res.json({ orderStatus });
  } catch (err) {
    logger.error({ place: "getting order status", userId, err });
    return res.status(500);
  }
};

export default getOrderStatus;
