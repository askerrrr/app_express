import logger from "../../../logger.js";
import validateAuthHeader from "../services/validateAuthHeader.js";
import getOrderDetailsForBot from "../services/getOrderDetailsForBot.js";

var getOrderDetails = async (req, res) => {
  var authHeader = req.headers?.authorization;

  try {
    var validAuthHeader = await validateAuthHeader(authHeader);

    if (!validAuthHeader) {
      return res.sendStatus(401);
    }

    var { userId } = req.params;
    var { getUser } = req.app.locals.userCollectionServices();

    var user = await getUser(userId);

    if (!user) {
      return res.sendStatus(404);
    }

    var { orders } = user;
    var orderDetailsForBot = await getOrderDetailsForBot(orders);

    var activeOrders = orderDetailsForBot.filter(
      (order) => order.status !== "order-is-completed:6"
    );
    var completedOrders = orderDetailsForBot.filter(
      (order) => order.status === "order-is-completed:6"
    );

    return orders.length
      ? res.status(200).json({ activeOrders, completedOrders })
      : res.sendStatus(404);
  } catch (err) {
    logger.error({ place: "sending orders to the bot", userId, err });
    return res.status(500);
  }
};

export default getOrderDetails;
