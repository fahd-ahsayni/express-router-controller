import express from "express";

import { getAllUsers } from "../controllers/users/get-users.controller.js";
import { createUser } from "../controllers/users/create-user.controller.js";
import { getUser } from "../controllers/users/get-user-by-id.controller.js";
import { updateUser } from "../controllers/users/update-user.controller.js";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.get("/:id", getUser);
router.put("/:id", updateUser);

export default router;
