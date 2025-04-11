var renderUnmarkedCheckBoxForFirstStatus = (array) =>
  array.slice(1).map((e) => (document.getElementById(e.id).disabled = true));

export default renderUnmarkedCheckBoxForFirstStatus;
