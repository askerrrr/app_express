import getAll from "./services/getAll.js";
import getUser from "./services/getUser.js";
import getOrderType from "./services/getOrderType.js";
import getOrderFilePath from "./services/getOrderFilePath.js";
import createNewUser from "./services/createNewUser.js";
import getOrderStatus from "./services/getOrderStatus.js";
import createNewOrder from "./services/createNewOrder.js";
import getActiveOrders from "./services/getActiveOrders.js";
import getCompletedOrders from "./services/getCompletedOrders.js";
import updateOrderStatusFromDB from "./services/updateOrderStatus.js";
import deleteUserFromUserCollection from "./services/deleteUserFromUserCollection.js";
import deleteOrderFromUserCollection from "./services/deleteOrderFromUserCollection.js";

function userCollectionServices() {
  var collection = this;

  return {
    getAll: getAll.bind(collection),
    getUser: getUser.bind(collection),
    getOrderType: getOrderType.bind(collection),
    createNewUser: createNewUser.bind(collection),
    createNewOrder: createNewOrder.bind(collection),
    getOrderStatus: getOrderStatus.bind(collection),
    getActiveOrders: getActiveOrders.bind(collection),
    getOrderFilePath: getOrderFilePath.bind(collection),
    getCompletedOrders: getCompletedOrders.bind(collection),
    updateOrderStatusFromDB: updateOrderStatusFromDB.bind(collection),
    deleteUserFromUserCollection: deleteUserFromUserCollection.bind(collection),
    deleteOrderFromUserCollection:
      deleteOrderFromUserCollection.bind(collection),
  };
}

export default userCollectionServices;
