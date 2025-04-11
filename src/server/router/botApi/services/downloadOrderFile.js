import writeFile from "./writeFile.js";
import createUserDir from "./createUserDir.js";
import getOrderFileStream from "./getOrderFileStream.js";

var downloadOrderFile = async (path, url) => {
  try {
    await createUserDir(path);

    var readableStream = await getOrderFileStream(url);

    var successWrite = await writeFile(path, readableStream);

    return successWrite;
  } catch (err) {
    throw err;
  }
};

export default downloadOrderFile;
