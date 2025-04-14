import addItems from "./services/addItems.js";
import getItemId from "./services/getItemId.js";
import getOrder from "./services/getOrder.js";
import deleteUser from "./services/deleteUser.js";
import deleteOrder from "./services/deleteOrder.js";
import updateItemId from "./services/updateItemId.js";
import getItemsData from "./services/getItemsData.js";
import createOrderEntity from "./services/createOrderEntity.js";
import updateItemStatus from "./services/updateItemStatus.js";
import createItemCollection from "./services/createItemCollection.js";

function itemCollectionServices() {
  var collection = this;

  return {
    addItems: (userId, orderId, xlsxData) =>
      addItems(collection, userId, orderId, xlsxData),

    getItemId: (userId, orderId) => getItemId(collection, userId, orderId),

    getOrder: (userId, orderId) => getOrder(collection, userId, orderId),

    updateItemId: (userId, orderId, items) =>
      updateItemId(collection, userId, orderId, items),

    getItemsData: (userId, orderId) =>
      getItemsData(collection, userId, orderId),

    updateItemStatus: (userId, orderId) =>
      updateItemStatus(collection, userId, orderId),

    createOrderEntity: (userId, orderId) =>
      createOrderEntity(collection, userId, orderId),

    createItemCollection: (data) => createItemCollection(collection, data),

    deleteUser: (userId) => deleteUser(collection, userId),

    deleteOrder: (userId, orderId) => deleteOrder(collection, userId, orderId),
  };
}

export default itemCollectionServices;
