import { Request, Response, NextFunction } from "express";
import ContactUs, { IContactUs } from "../models/ContactUs";

class ContactUsController {
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const { subject, email, phone, message, getUpdates } = req.body;

      // Validate data (you can use a validation library or write your own validation logic)

      const newContact = new ContactUs({
        subject,
        email,
        phone,
        message,
        getUpdates,
      });
      await newContact.save();
      res.status(201).json({ message: "Contact form submitted successfully" });
    } catch (error) {
      console.error("Error creating contact:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  public async getAllContacts(req: Request, res: Response): Promise<void> {
    try {
      const contacts: IContactUs[] = await ContactUs.find();
      res.status(200).json(contacts);
    } catch (error) {
      console.error("Error retrieving contacts:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new ContactUsController();
