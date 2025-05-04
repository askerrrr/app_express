import { DatabaseError } from "../../../customError/index.js";

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
  try {
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
  } catch (e) {
    throw new DatabaseError("addItems", e, userId, orderId);
  }
};

export default addItems;
