import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

var __dirname = dirname(fileURLToPath(import.meta.url));

var getIndexHTML = async (req, res, next) => {
  var { getAll } = req.app.locals.userCollectionServices();

  try {
    var users = await getAll();

    return users?.length
      ? res.sendFile(
          join(__dirname, "../../../../public/html/adminPath/root/index.html")
        )
      : res.sendFile(
          join(__dirname, "../../../../public/html/adminPath/root/noUsers.html")
        );
  } catch (e) {
    next(e);
  }
};

export default getIndexHTML;
