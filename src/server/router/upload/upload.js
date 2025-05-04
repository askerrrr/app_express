import multer from "multer";
import { Router } from "express";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/var/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

var router = Router();
var __dirname = dirname(fileURLToPath(import.meta.url));

router.get("/", async (req, res, next) => {
  try {
    return res.sendFile(
      join(__dirname, "../../../public/html/adminPath/uploadFile/upload.html")
    );
  } catch (e) {
    next(e);
  }
});

router.post("/", upload.single("media"), async (req, res, next) => {
  try {
    return res.send("Succesfull upload");
  } catch (e) {
    next(e);
  }
});

export { router as upload };
