const express = require("express");
const router = express.Router();
const {
  getContcats,
  createContcat,
  getContcat,
  updateContcat,
  deleteContcat,
} = require("../controllers/contactController");

router.route("/").get(getContcats).post(createContcat);

router.route("/:id").get(getContcat).put(updateContcat).delete(deleteContcat);

module.exports = router;
