const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
      "Database connected",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

// const express = require("express");
// const mongoose = require("mongoose");
// const Contact = require("./path/to/contactModel"); // Adjust the path as needed

// const app = express();
// const PORT = process.env.PORT || 5001;

// // Connect to MongoDB
// mongoose.connect("mongodb://localhost:27017/contacts", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", () => {
//   console.log("Connected to MongoDB");
// });

// // Define the GET route to fetch contacts
// app.get("/contacts", async (req, res) => {
//   try {
//     const contacts = await Contact.find({});
//     res.status(200).json(contacts);
//   } catch (error) {
//     res.status(500).json({ message: "Server Error", error });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

module.exports = connectDb;
