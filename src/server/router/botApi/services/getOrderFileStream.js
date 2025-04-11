import { Readable } from "node:stream";

var getOrderFileStream = async (url) => {
  var response = await fetch(url);

  if (!response.ok) {
    throw new Error("NoReadableStream");
  }

  return Readable.fromWeb(response.body);
};

export default getOrderFileStream;
