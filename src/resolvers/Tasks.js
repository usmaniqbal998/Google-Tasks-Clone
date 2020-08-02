import userModel from "../models/user_model";
import catchAsync from "../util/catchAsync";
const tasksListModel = require("../models/task_list_model");

const Task = {
  task_list: catchAsync(async (parent, args, ctx, info) => {
    const task_list = await tasksListModel.findById(parent.task_list);
    return task_list;
  }),
  user: catchAsync(async (parent, args, ctx, info) => {
    const user = await userModel.findById(parent.user);
    return user;
  }),
};

export default Task;
