import getItemId from "./services/getItemId.js";
import setItemId from "./services/setItemId.js";
import getTotalSum from "./services/getTotalSum.js";
import getPrice from "./services/getItemPrice.js";
import getUrlFromXLSX from "./services/getUrlFromXLSX.js";
import getSizeFromXLSX from "./services/getSizeFromXLSX.js";
import getImageFromXLSX from "./services/getImageFromXLSX.js";
import getQuantityFromXLSX from "./services/getQuantityFromXLSX.js";
import changeDeliveryStatus from "./services/changeDeliveryStatus.js";
import changePurchasedStatus from "./services/changePurchasedStatus.js";
import createTableHeadToXLSX from "./services/createTableHeadToXLSX.js";
import createBackToOrderButton from "./services/createBackToOrderButton.js";

var index = 0;

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
      await getTotalSum(data.totalSum),
      await changePurchasedStatus(userId, orderId, item),
      await changeDeliveryStatus(userId, orderId, item),
      await getItemId(item.id),
      await setItemId(userId, orderId, index++)
    );

    tbody.append(tr);
  }

  var table = document.createElement("table");
  var thead = createTableHeadToXLSX();

  table.append(thead, tbody);

  var backToOrderButton = await createBackToOrderButton(userId, orderId);

  var body = document.getElementById("xlsx");

  body.append(backToOrderButton, table);

  return body;
};

export default rowForXLSX;
