import { fileURLToPath } from "url";
import { dirname, join } from "path";
import logger from "../../../logger.js";

var __dirname = dirname(fileURLToPath(import.meta.url));

var getSheetHTML = async (_, res) => {
  try {
    return res.sendFile(join(__dirname, "../../../../public/html/sheet.html"));
  } catch (err) {
    logger.error({ place: "getting xlsx file", userId, err });
    return res.status(500);
  }
};

export default getSheetHTML;
