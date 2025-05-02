import env from "../../../env_var.js";

var validateAuthHeader = async (authHeader) => {
  var [type, token] = authHeader.split(" ");

  return type == "Bearer" && token == env.bot_secret_key;
};

export default validateAuthHeader;
