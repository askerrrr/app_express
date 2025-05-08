import { Readable } from "node:stream";
import { ReadableStreamError } from "../../../customError/index.js";

var getOrderFileStream = async (url) => {
  try {
    var res = await fetch(url);

    if (!res.ok) {
      throw new ReadableStreamError(res.statusText, res.status, url);
    }

    return Readable.fromWeb(res.body);
  } catch (e) {
    if (e instanceof ReadableStreamError) {
      throw e;
    }

    throw new ReadableStreamError(e.message, e.cause.code, url);
  }
};

export default getOrderFileStream;
