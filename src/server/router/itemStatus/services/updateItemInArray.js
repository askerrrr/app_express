var updateItemInArray = async (newItem, order) => {
  var { items } = order;

  items.forEach((item) => {
    if (item.url == newItem.url) {
      item.purchased = newItem.purchased;
    }
  });

  return items;
};

export default updateItemInArray;
