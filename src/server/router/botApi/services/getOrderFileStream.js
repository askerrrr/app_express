import { Readable } from "node:stream";

var getOrderFileStream = async (telegramApiFileUrl) => {
  var response = await fetch(telegramApiFileUrl);

  if (!response.ok) {
    throw new Error("NoReadableStream");
  }

  return Readable.fromWeb(response.body);
};

export default getOrderFileStream;
