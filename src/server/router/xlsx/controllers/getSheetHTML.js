import { fileURLToPath } from "url";
import { dirname, join } from "path";

var __dirname = dirname(fileURLToPath(import.meta.url));

var getSheetHTML = async (_, res, next) => {
  try {
    return res.sendFile(
      join(__dirname, "../../../../public/html/adminPath/xlsx/sheet.html")
    );
  } catch (e) {
    next(e);
  }
};

export default getSheetHTML;
