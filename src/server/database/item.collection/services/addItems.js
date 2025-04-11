var createItem = ({ url, price, qty, size }) => {
  var items = [];

  for (var i = 0; i < url.length; i++) {
    items.push({
      item: {
        id: "",
        price: price[i],
        purchased: 0,
        delivered: 0,
        description: {
          qty: qty[i],
          size: size[i],
        },
        url: url[i],
      },
    });
  }

  return items;
};

async function addItems(userId, orderId, xlsxData) {
  var items = createItem(xlsxData);

  var totalSum = xlsxData.totalSum[0];

  var result = await this.updateOne(
    { userId: userId, "orders.id": orderId },
    {
      $set: {
        "orders.$.totalSum": totalSum,
        "orders.$.items": items,
      },
    }
  );

  return result.modifiedCount == 1;
}

export default addItems;
