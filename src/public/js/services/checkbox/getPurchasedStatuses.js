var getPurchasedStatuses = async (userId, orderId) => {
  var url = "/status/check-purchased-status/" + userId + "/" + orderId;

  var response = await fetch(url);

  var json = await response.json();

  return json.isAllItemsIsPurchased;
};

export default getPurchasedStatuses;
