var updateItemInArray = async (newItem, items) => {
  items.forEach((item) => {
    if (item.url == newItem.url) {
      if (Object.keys(newItem)[1] == "delivered") {
        item.delivered = newItem.delivered;
      } else if (Object.keys(newItem)[1] == "purchased") {
        item.purchased = newItem.purchased;
      }
    }

    return;
  });

  return items;
};

export default updateItemInArray;
