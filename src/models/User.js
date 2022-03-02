import mongoose from "mongoose";
import { uuid } from "uuidv4";

const userSchema = new mongoose.Schema({
  userId: String,
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
});
export default mongoose.model("User", userSchema);
