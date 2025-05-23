import helmet from "helmet";
import express from "express";
import env from "./env_var.js";
import logger from "./logger.js";
import compression from "compression";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import cookieParser from "cookie-parser";
import verifyToken from "./middleware/verifyToken.js";
import { checkState } from "./middleware/mongoose/index.js";
import adminCollection from "./database/admin.collection/admin.collection.js";
import userCollectionServices from "./database/user.collection/userSollectionServices.js";
import itemCollectionServices from "./database/item.collection/itemCollectionServices.js";

var app = express();

var __dirname = dirname(fileURLToPath(import.meta.url));

(async () => {
  try {
    app.listen(env.PORT, env.HOST);

    app.locals.userCollectionServices = userCollectionServices;

    app.locals.itemCollectionServices = itemCollectionServices;
    app.locals.adminCollection = adminCollection;
  } catch (err) {
    logger.error({ place: "app starting", err });
    return app.response.sendStatus(500);
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

import { notFound } from "./router/notFound/index.js";
import { userPath } from "./router/userPath/index.js";
import errorHandler from "./middleware/errorHandler/index.js";
import errorPage from "./router/notFound/controllers/errorPath.js";
import notFoundMiddleware from "./middleware/notFoundMiddleware/notFoundMiddleware.js";
app.use(
  helmet.contentSecurityPolicy({ directives: { "default-src": ["'self'"] } })
);

app.use(compression());

app.use(checkState);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(join(__dirname, "../public")));

app.use("/auth", auth);
app.use("/bot", botApi);
app.use("/user", userPath);

app.use(cookieParser());

app.use(verifyToken);

app.use("/", root);

app.use("/xlsx", xlsx);
app.use("/image", image);
app.use("/upload", upload);
app.use("/itemid", itemId);
app.use("/orders", order);
app.use("/download", download);
app.use("/status", orderStatus);

app.use("/deliverystatus", deliveryStatus);
app.use("/purchasedstatus", purchasedStatus);

app.use("/notfound", notFound);

app.get("/error", errorPage);

app.all("*", notFoundMiddleware);

app.use(errorHandler);
