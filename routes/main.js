import express from "express";
const router = express.Router();
import controllers from "../controllers/main.js";
const { login, dashboard } = controllers;

router.route("/dashboard").get(dashboard);
router.route("/login").post(login);

export default router;