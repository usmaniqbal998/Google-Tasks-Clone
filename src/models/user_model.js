const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, " User name  is required"],
  },
  email: {
    type: String,
    required: [true, "User email is required"],
  },
  task_lists: [{ type: mongoose.Schema.ObjectId, ref: "TaskLists" }],
});

const userModel = mongoose.model("Users", userSchema);

module.exports = userModel;
