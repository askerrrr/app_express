import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";

var __dirname = dirname(fileURLToPath(import.meta.url));

var errorPage = async (req, res, next) =>
  res.sendFile(join(__dirname, "../../../../public/html/errorPage.html"));

export default errorPage;
