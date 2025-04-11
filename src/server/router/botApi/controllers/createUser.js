import logger from "../../../logger.js";
import validateAuthHeader from "../services/validateAuthHeader.js";

var createUser = async (req, res) => {
  var authHeader = req.headers?.authorization;

  try {
    var validAuthHeader = await validateAuthHeader(authHeader);

    if (!validAuthHeader) {
      res.sendStatus(401);
      return;
    }

    var deleteUserData = async () => {
      await deleteUserFromUserCollection(userData.userId);
      await deleteUserFromItemCollection(userData.userId);
      return res.sendStatus(304);
    };

    var userData = req.body;

    var { createItemCollection, deleteUserFromItemCollection } =
      req.app.locals.itemCollectionServices();

    var { getUser, createNewUser, deleteUserFromUserCollection } =
      req.app.locals.userCollectionServices();

    var user = await getUser(userData.userId);

    if (!user) {
      var userIsCreated = await createNewUser(userData);

      if (!userIsCreated) {
        await deleteUserData();
      }

      var itemCollectionIsCreated = await createItemCollection(userData);

      if (!itemCollectionIsCreated) {
        await deleteUserData();
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
