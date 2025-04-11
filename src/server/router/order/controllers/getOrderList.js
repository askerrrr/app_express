import logger from "../../../logger.js";
import { getOrderListDto } from "../services/getDto.js";

var getOrderList = async (req, res) => {
  var { userId } = req.params;

  var { getUser } = req.app.locals.userCollectionServices();

  try {
    var user = await getUser(userId);
    var orderListDto = await getOrderListDto(user);

    return user ? res.json(orderListDto) : res.sendStatus(404);
  } catch (err) {
    logger.error({ place: "getting order list", userId, err });
    return res.status(500);
  }
};

export default getOrderList;
