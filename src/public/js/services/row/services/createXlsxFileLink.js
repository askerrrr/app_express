import checkFileExists from "./checkFileExists.js";

var createXlsxFileLink = async (userId, orderId, role) => {
  var button = document.createElement("button");
  button.append("Открыть файл");

  button.addEventListener("click", async (e) => {
    e.preventDefault();

    var requestAddress;

    if (role == "user") {
      requestAddress = "/user/check/" + userId + "/" + orderId;
    } else {
      requestAddress = "/xlsx/check/" + userId + "/" + orderId;
    }

    var fileIsExists = await checkFileExists(requestAddress);

    if (!fileIsExists) {
      alert("Не удалось найти файл");
      return;
    }

    if (role == "user") {
      window.location.href = "/user/xlsx/" + userId + "/" + orderId;
    } else {
      window.location.href = "/xlsx/" + userId + "/" + orderId;
    }
  });

  var td = document.createElement("td");
  td.append(button);

  return td;
};

export default createXlsxFileLink;
