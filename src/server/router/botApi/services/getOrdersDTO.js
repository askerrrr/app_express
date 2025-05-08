var getOrdersDTO = async (orders) => {
  var data = [];

  for (var i = 0; i < orders.length; i++) {
    data.push({
      userId: orders[i].userId,
      id: orders[i].id,
      phone: orders[i].phone,
      type: orders[i].type,
      userName: orders[i].userName,
      firstName: orders[i].firstName,
      date: orders[i].date,
      orderStatus: orders[i].orderStatus,
    });
  }

  return data;
};

export default getOrdersDTO;
