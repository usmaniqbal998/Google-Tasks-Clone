const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task_title: {
    type: String,
    required: [true, "Task Title is required"],
  },
  task_details: {
    type: String,
  },
  task_list: {
    type: mongoose.Schema.ObjectId,
    ref: "TaskLists",
    required: true,
  },
  completion_status: {
    type: Boolean,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "Users",
    required: true,
  },
});

const tasksModel = mongoose.model("Tasks", taskSchema);

module.exports = tasksModel;
