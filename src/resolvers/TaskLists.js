import tasksModel from "../models/tasks_model";
import catchAsync from "../util/catchAsync";
const userModel = require("../models/user_model");

const TaskList = {
  user: catchAsync(async (parent, args, ctx, info) => {
    const user = await userModel.findById(parent.user);
    return user;
  }),

  tasks: catchAsync(async (parent, args, ctx, info) => {
    const tasks = await tasksModel.find().where("task_list").equals(parent.id);
    return tasks;
  }),
};

export default TaskList;
