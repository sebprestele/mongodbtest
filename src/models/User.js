import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId: String,
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
  profileImage: String,
  movies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
    },
  ],
});
export default mongoose.model("User", userSchema);
