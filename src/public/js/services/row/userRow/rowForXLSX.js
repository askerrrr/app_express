import getItemId from "../services/getItemId.js";
import getPrice from "../services/getItemPrice.js";
import getUrlFromXLSX from "../services/getUrlFromXLSX.js";
import getSizeFromXLSX from "../services/getSizeFromXLSX.js";
import getImageFromXLSX from "../services/getImageFromXLSX.js";
import getDeliveryStatus from "../services/getDeliveryStatus.js";
import getPurchasedStatus from "../services/getPurchasedStatus.js";
import getQuantityFromXLSX from "../services/getQuantityFromXLSX.js";
import createTableHeadToXLSX from "../services/createTableHeadToXLSX.js";
import createBackToOrderButton from "../services/createBackToOrderButton.js";

var rowForXLSX = async (data, userId, orderId) => {
  var tbody = document.createElement("tbody");

  var { items } = data;

  for (var item of items) {
    var tr = document.createElement("tr");
    tr.append(
      await getImageFromXLSX(item.img),
      await getUrlFromXLSX(item.url),
      await getQuantityFromXLSX(item.description.qty),
      await getSizeFromXLSX(item.description.size),
      await getPrice(item.price),
      await getPurchasedStatus(item.purchased),
      await getDeliveryStatus(item.purchased, item.delivered),
      await getItemId(item.id)
    );

    tbody.append(tr);
  }

  var table = document.createElement("table");
  var thead = createTableHeadToXLSX("user");

  table.append(thead, tbody);

  var backToOrderButton = await createBackToOrderButton(
    userId,
    orderId,
    "user"
  );

  var body = document.getElementById("userXLSX");

  body.append(backToOrderButton, table);

  return body;
};

export default rowForXLSX;
