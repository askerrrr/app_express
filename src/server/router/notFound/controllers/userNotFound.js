import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";

var __dirname = dirname(fileURLToPath(import.meta.url));

var userNotFound = async (req, res, next) => {
  return res.sendFile(
    join(__dirname, "../../../../public/html/userNotFound.html")
  );
};

export default userNotFound;
