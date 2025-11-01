import express from "express";
import {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
} from "../controllers/users/index.js";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.get("/:id", getUserById);
router.put("/:id", updateUser);

export default router;
