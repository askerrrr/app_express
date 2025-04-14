import helmet from "helmet";
import express from "express";
import env from "./env_var.js";
import logger from "./logger.js";
import { MongoClient } from "mongodb";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import cookieParser from "cookie-parser";
import verifyToken from "./router/services/verifyToken.js";
import userCollectionServices from "./database/user.collection/user.collection.services.js";
import itemCollectionServices from "./database/item.collection/itemCollectionServices.js";

import mongoose from "mongoose";

var app = express();
//var mongodb = new MongoClient("mongodb://127.0.0.1:27017/database");
var __dirname = dirname(fileURLToPath(import.meta.url));

(async () => {
  try {
    await mongoose
      .connect("mongodb://127.0.0.1:27017/database")
      .then(() => console.log("Успешное подключение к mongodb"));

    app.listen(env.PORT, env.HOST, () =>
      console.log(`The server is running on http://${env.HOST}:${env.PORT}`)
    );

    var collection = mongoose.model("User", "UserSchema"); //mongodb.db("database").collection("users");
    var itemCollection = mongodb.db("database").collection("items");
    var adminCollection = mongodb.db("admin").collection("adminData");

    app.locals.userCollectionServices = userCollectionServices.bind(collection);
    app.locals.itemCollectionServices =
      itemCollectionServices.bind(itemCollection);
    app.locals.adminCollection = adminCollection;
  } catch (err) {
    return logger.error({ place: "app starting", err });
  }
})();

import { root } from "./router/root/index.js";
import { xlsx } from "./router/xlsx/index.js";
import { auth } from "./router/auth/index.js";
import { image } from "./router/img/index.js";
import { order } from "./router/order/index.js";
import { itemId } from "./router/itemId/index.js";
import { botApi } from "./router/botApi/index.js";
import { upload } from "./router/upload/upload.js";
import { download } from "./router/downloadFile/index.js";
import { orderStatus } from "./router/orderStatus/index.js";
import { deliveryStatus } from "./router/itemStatus/deliveryStatus.js";
import { purchasedStatus } from "./router/itemStatus/purchasedStatus.js";

app.use(
  helmet.contentSecurityPolicy({ directives: { "default-src": ["'self'"] } })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(join(__dirname, "../public")));

app.use("/auth", auth);
app.use("/bot", botApi);

app.use(cookieParser());
app.use(verifyToken);

app.use("/", root);

app.use("/xlsx", xlsx);
app.use("/image", image);
app.use("/upload", upload);
app.use("/itemid", itemId);
app.use("/orderinfo", order);
app.use("/download", download);
app.use("/status", orderStatus);
app.use("/deliverystatus", deliveryStatus);
app.use("/purchasedstatus", purchasedStatus);
