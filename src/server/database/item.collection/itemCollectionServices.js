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

import { itemCollection } from "../connections/userDBConnection.js";

var itemCollectionServices = () => {
  return {
    addItems: (userId, orderId, xlsxData) =>
      addItems(itemCollection, userId, orderId, xlsxData),

    getItemId: (userId, orderId) => getItemId(itemCollection, userId, orderId),

    getOrder: (userId, orderId) => getOrder(itemCollection, userId, orderId),

    updateItemId: (userId, orderId, items) =>
      updateItemId(itemCollection, userId, orderId, items),

    getItemsData: (userId, orderId) =>
      getItemsData(itemCollection, userId, orderId),

    updateItemStatus: (userId, orderId) =>
      updateItemStatus(itemCollection, userId, orderId),

    createOrderEntity: (userId, orderId) =>
      createOrderEntity(itemCollection, userId, orderId),

    createItemCollection: (data) => createItemCollection(itemCollection, data),

    deleteUser: (userId) => deleteUser(itemCollection, userId),

    deleteOrder: (userId, orderId) =>
      deleteOrder(itemCollection, userId, orderId),
  };
};

export default itemCollectionServices;
