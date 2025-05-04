import { mkdir } from "node:fs/promises";

var getUserFolderPath = (path) => path.split("/").slice(0, -1).join("/");

var createUserDir = async (path) => {
  var userDir = getUserFolderPath(path);

  try {
    var result = await mkdir(userDir, { recursive: true });

    return result || result == undefined;
  } catch (e) {
    throw e;
  }
};

export default createUserDir;
