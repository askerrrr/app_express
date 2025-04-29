import createCheckbox from "./createCheckbox.js";
import getOrderStatus from "./getOrderStatus.js";
import sendDeliveryStatus from "./itemStatus/sendDeliveryStatus.js";

var changeDeliveryStatus = async (userId, orderId, item) => {
  var { delivered } = item;

  var checkbox = await createCheckbox(orderId, "delivery-status");

  if (delivered) {
    checkbox.checked = true;
  } else {
    checkbox.checked = false;
  }

  var { value } = await getOrderStatus(userId, orderId, "/deliverystatus/");

  if (value !== "purchased") {
    checkbox.disabled = true;
  }

  checkbox.addEventListener("change", async (e) => {
    e.preventDefault();

    if (checkbox.checked) {
      await sendDeliveryStatus(userId, orderId, {
        url: item.url,
        delivered: 1,
      });
    } else {
      await sendDeliveryStatus(userId, orderId, {
        url: item.url,
        delivered: 0,
      });
    }
  });

  var td = document.createElement("td");
  td.append(checkbox);

  return td;
};

export default changeDeliveryStatus;
