var getColumnData = async (colNum, ws, skipFirst = true) => {
  var column = ws.getColumn(colNum);

  var data = [];

  column.eachCell((e) => data.push(e.text ?? ""));

  return skipFirst ? data.slice(1) : data.slice(0, 1);
};

export default getColumnData;
