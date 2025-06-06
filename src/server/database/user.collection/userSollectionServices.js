import getAll from "./services/getAll.js";
import getUserById from "./services/getUserById.js";
import getOrder from "./services/getOrder.js";
import getOrders from "./services/getOrders.js";
import getOrderType from "./services/getOrderType.js";
import createUser from "./services/createUser.js";
import getOrderStatus from "./services/getOrderStatus.js";
import createOrder from "./services/createOrder.js";
import getActiveOrders from "./services/getActiveOrders.js";
import getOrderFilePath from "./services/getOrderFilePath.js";
import getCompletedOrders from "./services/getCompletedOrders.js";
import updateOrderStatus from "./services/updateOrderStatus.js";
import deleteUser from "./services/deleteUser.js";
import deleteOrder from "./services/deleteOrder.js";

import userCollection from "./connections/index.js";

var userCollectionServices = () => {
  return {
    getAll: () => getAll(userCollection),

    getUserById: (userId) => getUserById(userCollection, userId),

    getOrder: (userId, orderId) => getOrder(userCollection, userId, orderId),

    getOrders: (userId) => getOrders(userCollection, userId),

    getOrderType: (userId, orderId) =>
      getOrderType(userCollection, userId, orderId),

    createUser: (data) => createUser(userCollection, data),

    createOrder: (data) => createOrder(userCollection, data),

    getOrderStatus: (userId, orderId) =>
      getOrderStatus(userCollection, userId, orderId),

    getActiveOrders: (userId) => getActiveOrders(userCollection, userId),

    getOrderFilePath: (userId, orderId) =>
      getOrderFilePath(userCollection, userId, orderId),

    getCompletedOrders: (userId) => getCompletedOrders(userCollection, userId),

    updateOrderStatus: (userId, orderId, orderStatus) =>
      updateOrderStatus(userCollection, userId, orderId, orderStatus),

    deleteUser: (userId) => deleteUser(userCollection, userId),

    deleteOrder: (userId, orderId) =>
      deleteOrder(userCollection, userId, orderId),
  };
};

export default userCollectionServices;
