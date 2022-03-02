import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  publishedYear: Number,
  genres: [String],
});

export default mongoose.model("Movie", movieSchema);
