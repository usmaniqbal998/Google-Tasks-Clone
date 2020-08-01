const mongoose = require("mongoose");

const taskListSchema = new mongoose.Schema({
  task_list_title: {
    type: String,
    required: [true, "Task Title is required"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "Users",
    required: true,
  },
  tasks: [{ type: mongoose.Schema.ObjectId, ref: "Tasks" }],
});

const tasksListModel = mongoose.model("TaskLists", taskListSchema);

module.exports = tasksListModel;
