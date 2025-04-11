import logger from "../../../logger.js";
import deleteUserFolder from "../services/deleteUserFolder.js";
import sendDeleteUserRequest from "../services/sendDeleteUserRequest.js";

var deleteUser = async (req, res) => {
  var { userId } = req.params;

  var { deleteUserFromItemCollection } =
    req.app.locals.itemCollectionServices();
  var { deleteUserFromUserCollection } =
    req.app.locals.userCollectionServices();

  try {
    var successfullResponse = await sendDeleteUserRequest(userId);
    var isUserFolderDeleted = await deleteUserFolder(userId);

    var successfullDeletedFromUserCollection =
      await deleteUserFromUserCollection(userId);

    var successfullDeletedFromItemCollection =
      await deleteUserFromItemCollection(userId);

    return successfullResponse &&
      isUserFolderDeleted &&
      successfullDeletedFromUserCollection &&
      successfullDeletedFromItemCollection
      ? res.sendStatus(200)
      : res.sendStatus(304);
  } catch (err) {
    logger.error({ place: "delete user", userId, err });
    return res.status(500);
  }
};

export default deleteUser;
