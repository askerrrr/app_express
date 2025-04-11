var mergeData = async (xlsxData, image) => {
  var { items, totalSum } = xlsxData;
  console.log(xlsxData);
  for (var i = 0; i < items.length; i++) {
    items[i].img = image[i];
  }

  return { items, totalSum };
};

export default mergeData;
