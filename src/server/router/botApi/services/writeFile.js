import { open } from "node:fs/promises";
import { pipeline } from "node:stream/promises";

var writeFile = async (path, readableStream) => {
  var fileHandle = await open(path, "w");

  try {
    var writableStream = fileHandle?.createWriteStream();

    await pipeline(readableStream, writableStream);
  } catch (e) {
    throw e;
  } finally {
    await fileHandle?.close();
  }

  return true;
};

export default writeFile;
