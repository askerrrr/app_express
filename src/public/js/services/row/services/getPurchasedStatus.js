var getPurchasedStatus = async (purchased) => {
  var td = document.createElement("td");

  if (purchased) {
    td.style.color = "green";
    td.append("Выкуплен");
  } else {
    td.style.color = "red";
    td.append("В процессе выкупа");
  }

  return td;
};

export default getPurchasedStatus;
