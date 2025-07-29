const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");
dotenv.config();
const app = express();
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());

app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({
    message: "Server is running",
  });
});
app.use("/", productRoutes);

app.use("/", cartRoutes);

app.use("/auth", authRoutes);

app.use("/orders", orderRoutes);

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
