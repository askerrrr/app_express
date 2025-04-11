var getUsersDto = async (data) =>
  data.map((user) => {
    return {
      userId: user.userId,
      firstName: user.firstName,
      userName: user.userName,
      orders: user.orders.map((order) => {
        return { orderStatus: order.orderStatus.value };
      }),
    };
  });

export default getUsersDto;
