var getActiveAndCompletedOrders = async (orders) => {
  var activeOrders = orders.filter(
    (order) => order.orderStatus.value !== "order-is-completed"
  );

  var completedOrders = orders.filter(
    (order) => order.orderStatus.value === "order-is-completed"
  );

  return { activeOrders, completedOrders };
};

export default getActiveAndCompletedOrders;
