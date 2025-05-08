import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";

var __dirname = dirname(fileURLToPath(import.meta.url));

var notFoundMiddleware = async (req, res) =>
  res.sendFile(join(__dirname, "../../../public/html/notFound.html"));

export default notFoundMiddleware;
