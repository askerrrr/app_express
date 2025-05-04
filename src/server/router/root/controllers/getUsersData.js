import getUsersDto from "../services/getDto.js";

var getUsersData = async (req, res, next) => {
  var { getAll } = req.app.locals.userCollectionServices();

  try {
    var users = await getAll();

    var usersDto = await getUsersDto(users);

    return res.json(usersDto);
  } catch (e) {
    next(e);
  }
};

export default getUsersData;
