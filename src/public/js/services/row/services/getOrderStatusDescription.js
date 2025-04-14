var getOrderStatusDescription = async (status) => {
  var td = document.createElement("td");

  let { value } = status;

  switch (value) {
    case "not-accepted-for-processing":
      value === "not-accepted-for-processing";
      td.append("Не взят в обработку");
      td.style.color = "#54ff00";
      break;
    case "in-processing":
      value === "in-processing";
      td.append("Взят в обработку");
      td.style.color = "#00c4ff";
      break;
    case "purchased":
      value === "purchased";
      td.append("Выкуплен");
      td.style.color = "#edff01";
      break;
    case "china-warehouse":
      value === "china-warehouse";
      td.append("Прибыл на склад в Китае");
      td.style.color = "#edff01";
      break;
    case "on-the-way":
      value === "on-the-way";
      td.append("В пути в Москву");
      td.style.color = "#c19aff";
      break;
    case "awaiting-receipt":
      value === "awaiting-receipt";
      td.append("Ожидает получения");
      td.style.color = "#d201ff";
      break;
    case "order-is-completed":
      value === "order-is-completed";
      td.append("Завершен");
      td.style.color = "#ff0000";
      break;
    default:
      td.append("Неизвестный статус - " + status.value);
  }
  return td;
};

export default getOrderStatusDescription;
