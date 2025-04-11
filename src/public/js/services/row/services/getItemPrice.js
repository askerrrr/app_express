var getItemPrice = async (price) => {
  var td = document.createElement("td");
  td.append(price);

  return td;
};

export default getItemPrice;
