var getQuantityFromXLSX = async (size) => {
  var td = document.createElement("td");

  if (!size?.length) {
    td.append("Пусто");

    return td;
  }
  td.append(size);

  return td;
};

export default getQuantityFromXLSX;
