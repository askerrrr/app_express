import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
var __dirname = dirname(fileURLToPath(import.meta.url));

var getXLSXHtml = async (req, res, next) => {
  try {
    return res.sendFile(
      join(__dirname, "../../../../public/html/userPath/xlsx/xlsx.html")
    );
  } catch (e) {
    next(e);
  }
};

export default getXLSXHtml;
