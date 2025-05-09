import { getOrderListDto } from "../services/getDto.js";

var getOrderList = async (req, res, next) => {
  var { userId } = req.params;

  var { getUserById } = req.app.locals.userCollectionServices();

  try {
    var user = await getUserById(userId);

    var orderListDto = await getOrderListDto(user);

    return res.json(orderListDto);
  } catch (e) {
    next(e);
  }
};

export default getOrderList;
