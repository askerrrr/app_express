import rowForXLSX from "../../services/row/rowForXLSX.js";

var getXlsxDataInTable = async () => {
  try {
    var pathParts = window.location.pathname.split("/");

    var userId = pathParts[2];
    var orderId = pathParts[3];

    var url = "/xlsx/api/" + userId + "/" + orderId;

    var response = await fetch(url);

    if (!response.ok) {
      var err = await response.text();
      alert("error: ", err);
      return;
    }

    var { sheetData } = await response.json();

    await rowForXLSX(sheetData, userId, orderId);
  } catch (err) {
    window.location.href = "/orders/order/" + userId + "/" + orderId;
  }
};

getXlsxDataInTable();
