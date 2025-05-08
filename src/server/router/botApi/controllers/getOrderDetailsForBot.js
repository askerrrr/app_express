import getOrdersDTO from "../services/getOrdersDTO.js";
import validateAuthHeader from "../services/validateAuthHeader.js";
import { BotOrderDetailsError } from "../../../customError/index.js";
import getActiveAndCompletedOrders from "../services/getActiveAndCompletedOrders.js";

var getOrderDetails = async (req, res, next) => {
  var authHeader = req.headers?.authorization;

  if (!authHeader) {
    return res.sendStatus(401);
  }

  var validAuthHeader = await validateAuthHeader(authHeader);

  if (!validAuthHeader) {
    return res.sendStatus(403);
  }

  var { userId } = req.params;

  try {
    var userCollection = req.app.locals.userCollectionServices();

    var user = await userCollection.getUserById(userId);

    if (!user) {
      return res.sendStatus(404);
    }

    var { orders } = user;

    if (orders.length) {
      var ordersDTO = await getOrdersDTO(orders);

      var activeAndCompletedOrders = getActiveAndCompletedOrders(ordersDTO);

      return res.status(200).json(activeAndCompletedOrders);
    }

    return res.sendStatus(404);
  } catch (e) {
    next(new BotOrderDetailsError(e.message, e, userId));
  }
};

export default getOrderDetails;
