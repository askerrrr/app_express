import deleteUserFolder from "../services/deleteUserFolder.js";
import sendDeleteUserRequest from "../services/sendDeleteUserRequest.js";

var deleteUser = async (req, res, next) => {
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
  } catch (e) {
    next(e);
  }
};

export default deleteUser;
