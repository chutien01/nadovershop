import express from "express";
import contactController from "../../app/controllers/ContactController.js";
const router = express.Router();

router.get("/", contactController.index);
export default router;
