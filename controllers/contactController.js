const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel"); // Adjust the path as necessary

//@des Get all contacts
// @routes Get /api/contacts
//@access public

const getContcats = asyncHandler(async (req, res) => {
  const contacts = await contact.find();
  res.status(200).json(contacts);
});

//@des Create New  contacts
// @routes Post /api/contacts/id
//@access public

const createContcat = asyncHandler(async (req, res) => {
  console.log("The request body is : ", req.body);
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  try {
    //                         .create crateing new element
    const contact = await Contact.create({
      name,
      email,
      phone,
    });
    res.status(201).json(contact);
  } catch (error) {
    console.error("Error creating contact:", error);
    res.status(500).json({ message: "Server error" });
  }
});

//@des Create New indual  Contcat
// @routes Get /api/contacts/:id
//@access public

const getContcat = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not dounf");
  }
  res.status(200).json(contact);
});
//@des Updated New  contacts
// @routes Put /api/contacts/:id
//@access public

const updateContcat = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedContact);
});

//@des delete  New  contacts
// @routes delete /api/contacts/:id
//@access public

const deleteContcat = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  await Contact.findByIdAndDelete(req.params.id);
  res.status(200).json(contact);
});

module.exports = {
  getContcats,
  createContcat,
  getContcat,
  updateContcat,
  deleteContcat,
};
