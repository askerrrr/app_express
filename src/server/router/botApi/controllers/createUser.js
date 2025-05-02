import logger from "../../../logger.js";
import validateAuthHeader from "../services/validateAuthHeader.js";

var createUser = async (req, res) => {
  var authHeader = req.headers?.authorization;

  try {
    if (!authHeader) {
      return res.sendStatus(401);
    }

    var validAuthHeader = await validateAuthHeader(authHeader);

    if (!validAuthHeader) {
      return res.sendStatus(401);
    }

    var userData = req.body;

    var itemCollection = req.app.locals.itemCollectionServices();

    var userCollection = req.app.locals.userCollectionServices();

    var user = await userCollection.getUser(userData.userId);

    if (!user) {
      var userIsCreated = await userCollection.createUser(userData);

      var collectionIsCreated = await itemCollection.createItemCollection(
        userData
      );

      if (!userIsCreated || !collectionIsCreated) {
        await userCollection.deleteUser(userData.userId);
        await itemCollection.deleteUser(userData.userId);
        return res.sendStatus(304);
      }

      return res.sendStatus(200);
    }

    return res.sendStatus(409);
  } catch (err) {
    if (err.name === "JsonWebTokenError") {
      return res.sendStatus(401);
    }

    logger.error({ place: "create user", err });
    return res.status(500);
  }
};

export default createUser;
