import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
var __dirname = dirname(fileURLToPath(import.meta.url));

var orderListHtml = async (req, res) =>
  res.sendFile(
    join(__dirname, "../../../../public/html/activeOrdersForUser.html")
  );

export default orderListHtml;
