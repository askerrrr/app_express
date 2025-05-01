var createItem = ({ url, price, qty, size }) => {
  var items = [];

  for (var i = 0; i < url.length; i++) {
    items.push({
      id: "",
      price: price[i],
      purchased: 0,
      delivered: 0,
      description: {
        qty: qty[i],
        size: size[i],
      },
      url: url[i],
    });
  }

  return items;
};

var addItems = async (collection, userId, orderId, xlsxData) => {
  var items = createItem(xlsxData);

  var totalSum = xlsxData.totalSum[0];

  var result = await collection.updateOne(
    { userId, "orders.id": orderId },
    {
      $set: {
        "orders.$.totalSum": totalSum,
        "orders.$.items": items,
      },
    }
  );

  return result.acknowledged;
};

export default addItems;
