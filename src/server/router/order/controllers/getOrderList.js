import { getOrderListDto } from "../services/getDto.js";

var getOrderList = async (req, res, next) => {
  var { userId } = req.params;

  var userCollection = req.app.locals.userCollectionServices();

  try {
    var user = await userCollection.getUserById(userId);

    var orderListDto = await getOrderListDto(user);

    return user ? res.json(orderListDto) : res.sendStatus(404);
  } catch (e) {
    next(e);
  }
};

export default getOrderList;
