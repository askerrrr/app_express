import logger from "../../../logger.js";
import getUsersDto from "../services/getDto.js";

var getUsersData = async (req, res) => {
  var { getAll } = req.app.locals.userCollectionServices();

  try {
    var users = await getAll();

    var usersDto = await getUsersDto(users);

    return res.json(usersDto);
  } catch (err) {
    logger.error({ place: "getting user list", err });
    return res.status(500);
  }
};

export default getUsersData;
