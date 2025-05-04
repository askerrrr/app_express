import { Readable } from "node:stream";
import { ReadableStreamError } from "../../../customError/index.js";

var getOrderFileStream = async (telegramApiFileUrl) => {
  var response = await fetch(telegramApiFileUrl);

  if (!response.ok) {
    throw new ReadableStreamError(response, telegramApiFileUrl);
  }

  return Readable.fromWeb(response.body);
};

export default getOrderFileStream;
