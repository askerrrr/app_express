import { BotUserCreateError } from "../../../customError/index.js";
import validateAuthHeader from "../services/validateAuthHeader.js";

var createUser = async (req, res, next) => {
  var itemCollection = req.app.locals.itemCollectionServices();
  var userCollection = req.app.locals.userCollectionServices();

  var authHeader = req.headers?.authorization;

  if (!authHeader) {
    return res.sendStatus(401);
  }

  var validAuthHeader = await validateAuthHeader(authHeader);

  if (!validAuthHeader) {
    return res.sendStatus(401);
  }

  var userData = req.body;

  try {
    var user = await userCollection.getUserById(userData.userId);

    if (user) {
      return res.sendStatus(409);
    }

    await userCollection.createUser(userData);

    await itemCollection.createItemCollection(userData);

    return res.sendStatus(200);
  } catch (e) {
    await userCollection.deleteUser(userData.userId);
    await itemCollection.deleteUser(userData.userId);

    next(new BotUserCreateError(e.message, e, userData.userId));
  }
};

export default createUser;
