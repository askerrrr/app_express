var getUrlFromXLSX = async (url) => {
  var td = document.createElement("td");

  if (url.length && url.startsWith("http")) {
    var btn = document.createElement("button");
    btn.textContent = "перейти по ссылке";

    var a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.append(btn);

    td.append(a);

    return td;
  } else if (!url.length) {
    td.append("Пусто");
    return td;
  } else if (!url.startsWith("http")) {
    td.append("Неопознанная ссылка");
    return td;
  }
};

export default getUrlFromXLSX;
