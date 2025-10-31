const express = require("express");

const { getAllUsers } = require("../controllers/users/get-users.controller");
const { createUser } = require("../controllers/users/create-user.controller");
const { getUser } = require("../controllers/users/get-user.controller");
const { updateUser } = require("../controllers/users/update-user.controller");

const router = express.Router();

router.get("/", getAllUsers);

router.post("/", createUser);

router.get("/:id", getUser);

router.put("/:id", updateUser);

module.exports = router;
