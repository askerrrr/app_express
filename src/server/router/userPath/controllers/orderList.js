import logger from "../../../logger.js";
import { getOrderListDto } from "../../order/services/getDto.js";

var ordersList = async (req, res) => {
  var { userId } = req.params;

  var userCollection = req.app.locals.userCollectionServices();

  try {
    var user = await userCollection.getUserById(userId);

    var orderListDto = await getOrderListDto(user);

    return user ? res.json(orderListDto) : res.sendStatus(404);
  } catch (err) {
    logger.error({ place: "getting order list", userId, err });
    return res.status(500);
  }
};

export default ordersList;
