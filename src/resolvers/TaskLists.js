import tasksModel from "../models/tasks_model";
const { findById } = require("../models/user_model");
const userModel = require("../models/user_model");

const TaskList = {
  user: async (parent, args, ctx, info) => {
    try {
      const user = await userModel.findById(parent.user);
      return user;
    } catch (error) {
      return error;
    }
  },

  tasks: async (parent, args, ctx, info) => {
    const tasks = await tasksModel.find().where("task_list").equals(parent.id);
    return tasks;
  },
};

export default TaskList;
