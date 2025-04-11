import getItemId from "./services/getItemId.js";
import setItemId from "./services/setItemId.js";
import getTotalSum from "./services/getTotalSum.js";
import getPriceOfEach from "./services/getItemPrice.js";
import getUrlFromXLSX from "./services/getUrlFromXLSX.js";
import getSizeFromXLSX from "./services/getSizeFromXLSX.js";
import getImageFromXLSX from "./services/getImageFromXLSX.js";
import getQuantityFromXLSX from "./services/getQuantityFromXLSX.js";
import changeDeliveryStatus from "./services/changeDeliveryStatus.js";
import changePurchasedStatus from "./services/changePurchasedStatus.js";
import createTableHeadToXLSX from "./services/createTableHeadToXLSX.js";
import createBackToOrderButton from "./services/createBackToOrderButton.js";

var rowForXLSX = async (data, userId, orderId) => {
  var thead = createTableHeadToXLSX();
  var tbody = document.createElement("tbody");
  var table = document.createElement("table");

  var { items } = data;

  items.forEach(async (item, index) => {
    var img = await getImageFromXLSX(item.img);
    var url = await getUrlFromXLSX(item.url);
    var qty = await getQuantityFromXLSX(item.description.qty);
    var size = await getSizeFromXLSX(item.description.size);
    var itemId = await getItemId(item.id);
    var itemPrice = await getPriceOfEach(item.price);
    var totalSum = await getTotalSum(data.totalSum);
    var purchasedStatus = await changePurchasedStatus(userId, orderId, item);
    var deliveryStatus = await changeDeliveryStatus(userId, orderId, item);

    var tr = document.createElement("tr");
    tr.append(
      img,
      url,
      qty,
      size,
      itemPrice,
      totalSum,
      purchasedStatus,
      deliveryStatus,
      itemId,
      await setItemId(userId, orderId, index)
    );

    tbody.append(tr);
    return tbody;
  });

  table.append(thead, tbody);

  var backToOrderButton = await createBackToOrderButton(userId, orderId);

  var body = document.getElementById("body");

  body.append(backToOrderButton, table);

  return body;
};

export default rowForXLSX;
