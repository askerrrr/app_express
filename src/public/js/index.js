import rowForUserList from "./services/row/rowForUserList.js";

var GetUsers = async () => {
  var response = await fetch("/api/users");

  if (!response.ok) {
    return;
  }

  var users = await response.json();

  users.forEach(async (user) => await rowForUserList(user));
};

GetUsers().catch((err) => alert("error: ", err));
