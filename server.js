import mongoose from "mongoose";
import app from "./index.js";

const mongoUri = process.env.MONGODB_URI;
const port = process.env.PORT;

mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  })
  .then(() => {
    app.listen(port, () => console.log(`App running on port ${port}`));
  })
  .catch((error) => {
    console.log(
      "Mongodb connection error. Plz make sure your mongodb is running." + error
    );
  });
