const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const app = express();
const userRoutes = require("./routes/userRouter");
dotenv.config();

connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("api is running sucesfully");
});

app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("server is running on PORT 5000"));
