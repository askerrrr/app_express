import { mkdir } from "node:fs/promises";

var getUserPath = (path) => path.split("/").slice(0, -1).join("/");

var createUserDir = async (path) => {
  var userDir = getUserPath(path);

  try {
    var result = await mkdir(userDir, { recursive: true });

    return result || result == undefined;
  } catch (err) {
    throw err;
  }
};

export default createUserDir;
