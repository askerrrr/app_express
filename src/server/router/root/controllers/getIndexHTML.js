import logger from "../../../logger.js";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
var __dirname = dirname(fileURLToPath(import.meta.url));

var getIndexHTML = async (req, res) => {
  var { getAll } = req.app.locals.userCollectionServices();

  try {
    var users = await getAll();

    return users?.length
      ? res.sendFile(join(__dirname, "../../../../public/html/index.html"))
      : res.sendFile(join(__dirname, "../../../../public/html/noUsers.html"));
  } catch (err) {
    logger.error({ place: "getting root file", err });
    res.status(500);
  }
};

export default getIndexHTML;
