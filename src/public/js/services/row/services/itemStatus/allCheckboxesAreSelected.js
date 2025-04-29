var allCheckboxesAreSelected = async (name) => {
  var checkbox = document.querySelectorAll(name);

  var data = [];

  for (var i = 0; i < checkbox.length; i++) {
    data.push(checkbox[i]);
  }

  return data.every((e) => e.checked === true);
};

export default allCheckboxesAreSelected;
