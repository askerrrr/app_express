import Exceljs from "exceljs";
import logger from "../../../logger.js";
import getColumnData from "./getColumnData.js";

var getDataFromXLSX = async (filePath, userId) => {
  try {
    var wb = new Exceljs.Workbook();

    await wb.xlsx.readFile(filePath);

    var ws = wb.getWorksheet("Лист1");

    var url = await getColumnData(2, ws);
    var qty = await getColumnData(3, ws);
    var size = await getColumnData(4, ws);
    var price = await getColumnData(5, ws);
    var totalSum = await getColumnData(7, ws, false);

    return {
      url,
      qty,
      size,
      totalSum,
      price,
    };
  } catch (err) {
    logger.error({ place: "reading xlsx file", userId, err });
  }
};

export default getDataFromXLSX;
