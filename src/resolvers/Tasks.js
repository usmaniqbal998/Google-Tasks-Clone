import userModel from "../models/user_model";

const tasksListModel = require("../models/task_list_model");

const Task = {
  task_list: async (parent, args, ctx, info) => {
    try {
      const task_list = await tasksListModel.findById(parent.task_list);
      return task_list;
    } catch (error) {
      return error;
    }
  },
  user: async (parent, args, ctx, info) => {
    try {
      const user = await userModel.findById(parent.user);
      return user;
    } catch (error) {
      return error;
    }
  },
};

export default Task;
