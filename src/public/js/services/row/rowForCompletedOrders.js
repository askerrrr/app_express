import getOrderDate from "./services/getOrderDate.js";
import createOrderLink from "./services/createOrderLink.js";
import createDeleteUserForm from "../different/formForDeleteUser.js";
import getOrderStatusDescription from "./services/getOrderStatusDescription.js";

var rowForCompletedOrders = async (userId, completedOrders) => {
  var tbody = document.createElement("tbody");
  tbody.id = userId;

  for (var order of completedOrders) {
    var { id, date, orderStatus } = order;

    var tr = document.createElement("tr");

    tr.append(
      await getOrderDate(date),
      await createOrderLink(userId, id),
      await getOrderStatusDescription(orderStatus)
    );

    tbody.append(tr);
  }

  var table = document.getElementById("completed");

  table.append(tbody);

  var formForDeleteUser = await createDeleteUserForm(userId);

  var body = document.getElementById("body");
  body.append(formForDeleteUser);
};

export default rowForCompletedOrders;
