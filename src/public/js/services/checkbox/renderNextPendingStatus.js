var renderNextPendingStatus = (array, id) =>
  array
    .filter((e) => e.id !== id + 1)
    .map((elem) => (document.getElementById(elem.id).disabled = true));

export default renderNextPendingStatus;
