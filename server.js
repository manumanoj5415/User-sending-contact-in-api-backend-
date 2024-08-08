const express = require("express");
const errorHandler = require("./middleware/errorhandler"); // Ensure this matches the exact file name
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/usersRoutes"));

// Error handler middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// User Schema and Model
// const userSchema = new mongoose.Schema({
//   age: String,
//   name: String,
//   phone: String,
//   email: String,
// });

// const UserModel = mongoose.model("users", userSchema);

// Example route to fetch users
// app.get("/getUser", async (req, res) => {
//   try {
//     const userData = await UserModel.find();
//     res.status(200).json(userData);
//   } catch (error) {
//     res.status(500).json({ message: "Error retrieving user data" });
//   }
// });
