import { rm } from "node:fs/promises";

var deleteOrderFile = async (filePath) => {
  try {
    await rm(filePath);
    return true;
  } catch (err) {
    if (err.code == "ENOENT") {
      return false;
    }

    throw err;
  }
};

export default deleteOrderFile;
