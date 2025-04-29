import createCheckbox from "../createCheckbox.js";
import getOrderStatus from "../getOrderStatus.js";
import sendPurchasedStatus from "./sendPurchasedStatus.js";

var changePurchasedStatus = async (userId, orderId, item) => {
  var { purchased } = item;

  var checkbox = await createCheckbox(orderId, "purchased-status");

  if (purchased) {
    checkbox.checked = true;
  } else {
    checkbox.checked = false;
  }

  var { value } = await getOrderStatus(userId, orderId, "/purchasedstatus/");

  if (value !== "in-processing") {
    checkbox.disabled = true;
  }

  checkbox.addEventListener("change", async (e) => {
    e.preventDefault();

    if (checkbox.checked) {
      await sendPurchasedStatus(userId, orderId, {
        url: item.url,
        purchased: 1,
      });
    } else {
      await sendPurchasedStatus(userId, orderId, {
        url: item.url,
        purchased: 0,
      });
    }
  });

  var td = document.createElement("td");
  td.append(checkbox);

  return td;
};

export default changePurchasedStatus;
