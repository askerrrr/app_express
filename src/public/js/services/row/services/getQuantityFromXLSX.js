var getQuantityFromXLSX = async (qty) => {
  var td = document.createElement("td");

  if (!qty?.length) {
    td.append("Пусто");

    return td;
  }

  td.append(qty);

  return td;
};

export default getQuantityFromXLSX;
