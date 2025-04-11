import logger from "../../../logger.js";

var getCompletedOrdersData = async (req, res) => {
  var { userId } = req.params;

  var { getCompletedOrders } = req.app.locals.userCollectionServices();

  try {
    var completedOrders = await getCompletedOrders(userId);

    return res.json({ userId, completedOrders });
  } catch (err) {
    logger.error({ place: "getting completed order", userId, err });
    return res.sendStatus(500);
  }
};

export default getCompletedOrdersData;
