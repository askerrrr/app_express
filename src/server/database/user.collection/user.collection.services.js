import getAll from "./services/getAll.js";
import getUser from "./services/getUser.js";
import getOrder from "./services/getOrder.js";
import getOrders from "./services/getOrders.js";
import getOrderType from "./services/getOrderType.js";
import createUser from "./services/createUser.js";
import getOrderStatus from "./services/getOrderStatus.js";
import createOrder from "./services/createOrder.js";
import getActiveOrders from "./services/getActiveOrders.js";
import getOrderFilePath from "./services/getOrderFilePath.js";
import getCompletedOrders from "./services/getCompletedOrders.js";
import updateOrderStatusFromDB from "./services/updateOrderStatus.js";
import deleteUser from "./services/deleteUser.js";
import deleteOrder from "./services/deleteOrder.js";

function userCollectionServices() {
  var collection = this;

  return {
    getAll: () => getAll(collection),

    getUser: (userId) => getUser(collection, userId),

    getOrder: (userId, orderId) => getOrder(collection, userId, orderId),

    getOrders: (userId) => getOrders(collection, userId),

    getOrderType: (userId, orderId) =>
      getOrderType(collection, userId, orderId),

    createUser: (userData) => createUser(collection, userData),

    createOrder: (orderData) => createOrder(collection, orderData),

    getOrderStatus: (userId, orderId) =>
      getOrderStatus(collection, userId, orderId),

    getActiveOrders: (userId) => getActiveOrders(collection, userId),

    getOrderFilePath: (userId, orderId) =>
      getOrderFilePath(collection, userId, orderId),

    getCompletedOrders: (userId) => getCompletedOrders(collection, userId),

    updateOrderStatusFromDB: (userId, orderId, orderStatus) =>
      updateOrderStatusFromDB(collection, userId, orderId, orderStatus),

    deleteUser: (userId) => deleteUser(collection, userId),

    deleteOrder: (userId, orderId) => deleteOrder(collection, userId, orderId),
  };
}

export default userCollectionServices;
