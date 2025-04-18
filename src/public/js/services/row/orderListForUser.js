import getOrderDate from "./services/getOrderDate.js";
import getOrderStatus from "./services/getOrderStatus.js";
import createOrderLink from "./services/createOrderLink.js";
import getOrderStatusDescription from "./services/getOrderStatusDescription.js";

var rowForListOfActiveOrders = async ({ userId, orders }) => {
  var tbody = document.createElement("tbody");
  tbody.id = userId;
  var table = document.getElementById("active");

  var activeOrders = orders.filter(
    (order) => order.orderStatus.value !== "order-is-completed"
  );

  for (var order of activeOrders) {
    var { id, date, orderStatus } = order;

    var tr = document.createElement("tr");

    tr.append(
      await getOrderDate(date),
      await createOrderLink(userId, id, "user"),
      await getOrderStatusDescription(orderStatus)
    );

    tbody.append(tr);
  }
  table.append(tbody);

  var completedOrders = orders.filter(
    (order) => order.orderStatus.value == "order-is-completed"
  );

  if (completedOrders.length) {
    await showCompletedOrders(completedOrders);
  }

  var body = document.getElementById("body");

  return body;
};

var showCompletedOrders = async (completedOrders) => {
  var btn = document.createElement("button");

  btn.append("Показать завершенные");

  btn.id = "show-completed";

  btn.addEventListener("click", async (e) => {
    e.preventDefault();

    btn.disabled = true;

    await hideCompeledOrders();

    var tbody = document.createElement("tbody");
    tbody.id = "tbody-completed";

    for (var order of completedOrders) {
      var { id, date, userId, orderStatus } = order;

      var tr = document.createElement("tr");

      tr.append(
        await getOrderDate(date),
        await createOrderLink(userId, id),
        await getOrderStatus(orderStatus)
      );

      tbody.append(tr);
    }

    var table = document.getElementById("completed");

    table.append(tbody);
    return table;
  });

  var form = document.createElement("form");
  form.append(btn);

  var body = document.getElementById("body");
  body.append(form);
};

var hideCompeledOrders = async () => {
  var btn = document.createElement("button");
  btn.append("Скрыть");

  var form = document.createElement("form");
  form.append(btn);

  var body = document.getElementById("body");
  body.append(form);

  return btn.addEventListener("click", async (e) => {
    e.preventDefault();

    var table = document.getElementById("completed");
    var tbody = document.getElementById("tbody-completed");

    document.getElementById("show-completed").disabled = false;
    table.removeChild(tbody);
    form.remove();
  });
};

export default rowForListOfActiveOrders;
