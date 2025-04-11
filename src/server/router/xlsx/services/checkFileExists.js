import { access, constants } from "node:fs/promises";

var checkFileExists = async (filePath) => {
  var fileIsExists = await access(filePath, constants.F_OK)
    .then(() => true)
    .catch(() => false);

  return fileIsExists;
};

export default checkFileExists;
