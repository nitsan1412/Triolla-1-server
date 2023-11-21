import { Schema, model } from "mongoose";

export interface IContactUs extends Document {
  subject: string;
  email: string;
  phone: string | null;
  message: string;
  getUpdates: boolean;
}

const contactUsSchema = new Schema<IContactUs>({
  subject: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: false },
  message: { type: String, required: true },
  getUpdates: Boolean,
});
const ContactUs = model<IContactUs>("User", contactUsSchema);
export default ContactUs;
