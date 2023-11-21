import express from "express";
import ContactUsController from "../controllers/contactUsController";
const router = express.Router();
router.post("/", ContactUsController.create);
router.get("/", ContactUsController.getAllContacts);

export default router;
