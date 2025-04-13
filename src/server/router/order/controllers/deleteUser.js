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
    var userFolderIsDeleted = await deleteUserFolder(userId);

    var userIsDeletedFromUserCollection = await deleteUserFromUserCollection(
      userId
    );

    var userIsDeletedFromItemCollection = await deleteUserFromItemCollection(
      userId
    );

    return successfullResponse &&
      userFolderIsDeleted &&
      userIsDeletedFromUserCollection &&
      userIsDeletedFromItemCollection
      ? res.sendStatus(200)
      : res.sendStatus(304);
  } catch (err) {
    logger.error({ place: "delete user", userId, err });
    return res.status(500);
  }
};

export default deleteUser;
