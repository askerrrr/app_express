var getOrderListDto = async (data) => {
  return {
    userId: data.userId,
    orders: data.orders.map((order) => {
      return {
        id: order.id,
        userId: order.userId,
        date: order.date,
        orderStatus: order.orderStatus,
      };
    }),
  };
};

var getOrderDto = async (data) => {
  delete data.file;

  return data;
};

export { getOrderDto, getOrderListDto };
