import rowForXLSX from "../../services/row/userRow/rowForXLSX.js";

var getXLSXData = async () => {
  try {
    var pathParts = window.location.pathname.split("/");

    var userId = pathParts[3];
    var orderId = pathParts[4];

    var url = "/user/xlsx-api/" + userId + "/" + orderId;

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

getXLSXData();
