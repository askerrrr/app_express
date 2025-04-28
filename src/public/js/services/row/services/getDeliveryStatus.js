var getDeliveryStatus = async (purchased, delivered) => {
  var td = document.createElement("td");

  if (!purchased) {
    td.append("");

    return td;
  }

  if (delivered) {
    td.style.color = "green";
    td.append("Доставлен на склад в Китае");
  } else {
    td.style.color = "red";
    td.append("В пути на склад в Китае");
  }

  return td;
};

export default getDeliveryStatus;
