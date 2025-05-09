import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";

var __dirname = dirname(fileURLToPath(import.meta.url));

var orderNotFound = async (req, res, next) => {
  return res.sendFile(
    join(__dirname, "../../../../public/html/orderNotFound.html")
  );
};

export default orderNotFound;
