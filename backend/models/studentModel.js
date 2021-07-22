const mongoose = require("mongoose");
const studentSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  address: String,
});

module.exports = mongoose.model("Student", studentSchema);
