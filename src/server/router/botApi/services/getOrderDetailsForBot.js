var getOrderDetailsForBot = async (orders) => {
  var arr = [];

  for (var i = 0; i < orders.length; i++) {
    arr.push({
      userId: orders[i].order.userId,
      id: orders[i].order.id,
      phone: orders[i].order.phone,
      type: orders[i].order.type,
      userName: orders[i].order.userName,
      firstName: orders[i].order.firstName,
      date: orders[i].order.date,
      orderStatus: orders[i].order.orderStatus,
    });
  }

  return arr;
};

export default getOrderDetailsForBot;
