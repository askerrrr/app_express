import rowForUserList from "../../services/row/rowForUserList.js";

var GetUsers = async () => {
  var response = await fetch("/api/users");

  var users = await response.json();

  for (var user of users) {
    await rowForUserList(user);
  }
};

GetUsers();
