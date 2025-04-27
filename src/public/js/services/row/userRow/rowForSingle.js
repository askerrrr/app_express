import getPhone from "../services/getPhone.js";
import getItemUrl from "../services/getItemUrl.js";
import getOrderId from "../services/getOrderId.js";
import getUserInfo from "../services/getUserInfo.js";
import getOrderDate from "../services/getOrderDate.js";
import getDescription from "../services/getDescription.js";
import createLinkForOpenImage from "../services/createLinkForOpenImage.js";
import createDownloadFileLink from "../services/createDownloadFileLink.js";
import createTableHeadForOrder from "../services/createTableHeadForOrder.js";
import createBackToOrdersButton from "../services/createBackToOrdersButton.js";
import getOrderStatusDescription from "../services/getOrderStatusDescription.js";

var rowForSingle = async (order) => {
  var { id, date, userId, phone, itemUrl, orderStatus, description } = order;

  var tr = document.createElement("tr");

  tr.append(
    await getOrderId(id),
    await getOrderDate(date),
    await getPhone(phone),
    await createLinkForOpenImage(userId, id),
    await getItemUrl(itemUrl),
    await getDescription(description),
    await getOrderStatusDescription(orderStatus),
    await createDownloadFileLink(userId, id)
  );

  var tbody = document.createElement("tbody");
  tbody.append(tr);
  tbody.id = id;

  var thead = createTableHeadForOrder(order);

  var table = document.getElementById("table");
  table.append(thead, tbody);

  var userInfo = await getUserInfo(userId);
  var backToOrdersButton = await createBackToOrdersButton(userId, "user");

  var body = document.getElementById("userOrder");

  body.append(userInfo, backToOrdersButton, table);

  return body;
};

export default rowForSingle;
