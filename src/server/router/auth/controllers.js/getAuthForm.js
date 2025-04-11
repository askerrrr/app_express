import { join } from "node:path";
import { dirname } from "node:path";
import logger from "../../../logger.js";
import { fileURLToPath } from "node:url";

var __dirname = dirname(fileURLToPath(import.meta.url));

var getAuthForm = async (_, res) => {
  try {
    return res.sendFile(
      join(__dirname, "../../../../public/html/authForm.html")
    );
  } catch (err) {
    logger.error({ place: "getting auth file", userId, err });
    res.status(500);
  }
};

export default getAuthForm;
