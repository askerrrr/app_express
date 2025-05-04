import validateAuthHeader from "../services/validateAuthHeader.js";
import getOrderDetailsForBot from "../services/getOrderDetailsForBot.js";

var getOrderDetails = async (req, res, next) => {
  var authHeader = req.headers?.authorization;

  try {
    if (!authHeader) {
      return res.sendStatus(401);
    }

    var validAuthHeader = await validateAuthHeader(authHeader);

    if (!validAuthHeader) {
      return res.sendStatus(401);
    }

    var { userId } = req.params;
    var userCollection = req.app.locals.userCollectionServices();

    var user = await userCollection.getUserById(userId);

    if (!user) {
      return res.sendStatus(404);
    }

    var { orders } = user;
    var orderDetailsForBot = await getOrderDetailsForBot(orders);

    var activeOrders = orderDetailsForBot.filter(
      (order) => order.orderStatus.value !== "order-is-completed"
    );

    var completedOrders = orderDetailsForBot.filter(
      (order) => order.orderStatus.value === "order-is-completed"
    );

    return orders.length
      ? res.status(200).json({ activeOrders, completedOrders })
      : res.sendStatus(404);
  } catch (e) {
    e.location = "getOrderDetails";

    next(e);
  }
};

export default getOrderDetails;
