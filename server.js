const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const productRoutes = require("./routes/productRoutes");
dotenv.config();
const app = express();
app.use(express.json());
app.use("/", productRoutes);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Database is connected");

    app.listen(3000, () => {
      console.log("Server is running in part 3000");
    });
  })
  .catch(() => {
    console.log("Error connecting to database:", error.message);
  });
