var getItemId = async (itemId) => {
  var td = document.createElement("td");
  td.id = itemId ?? "";

  if (itemId.length) {
    td.append(itemId);
  } else {
    td.append("Пусто");
  }

  return td;
};

export default getItemId;
