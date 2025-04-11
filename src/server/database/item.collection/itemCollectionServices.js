import addItems from "./services/addItems.js";
import getItemId from "./services/getItemId.js";
import getOrders from "./services/getOrders.js";
import updateItemId from "./services/updateItemId.js";
import getItemsData from "./services/getItemsData.js";
import createOrderEntity from "./services/createOrderEntity.js";
import updateItemStatus from "./services/updateItemStatus.js";
import createItemCollection from "./services/createItemCollection.js";
import deleteUserFromItemCollection from "./services/deleteUserFromItemCollection.js";
import deleteOrderFromItemCollection from "./services/deleteOrderFromItemCollection.js";

function itemCollectionServices() {
  var collection = this;

  return {
    addItems: addItems.bind(collection),
    getItemId: getItemId.bind(collection),
    getOrders: getOrders.bind(collection),
    updateItemId: updateItemId.bind(collection),
    getItemsData: getItemsData.bind(collection),
    updateItemStatus: updateItemStatus.bind(collection),
    createOrderEntity: createOrderEntity.bind(collection),
    createItemCollection: createItemCollection.bind(collection),
    deleteUserFromItemCollection: deleteUserFromItemCollection.bind(collection),
    deleteOrderFromItemCollection:
      deleteOrderFromItemCollection.bind(collection),
  };
}

export default itemCollectionServices;
