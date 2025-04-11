import JSZip from "jszip";
import logger from "../../../logger.js";
import { readFile } from "node:fs/promises";

var getImageFromXLSX = async (filePath, userId) => {
  try {
    var fileData = await readFile(filePath);

    if (!fileData) return;

    var zip = await JSZip.loadAsync(fileData);

    var mediaFiles = Object.keys(zip.files).filter((fileName) =>
      fileName.startsWith("xl/media/")
    );

    if (mediaFiles.length === 0) return;

    var buffer = await Promise.all(
      mediaFiles.map(
        async (fileName) => await zip.files[fileName].async("nodebuffer")
      )
    );

    var base64 = buffer.map((buf) => Buffer.from(buf).toString("base64"));

    return base64;
  } catch (err) {
    logger.error({ place: "reading image", userId, err });
  }
};

export default getImageFromXLSX;
