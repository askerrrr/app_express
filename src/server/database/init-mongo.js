db = db.getSiblingDB("admin");

db.createCollection("admins");

db.admins.insertOne({
  login: process.env.HASH_LOGIN,
  passwd: process.env.HASH_PASSWD,
});
