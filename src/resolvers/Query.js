import { findById } from "../models/user_model";
import tasksModel from "../models/tasks_model";
import catchAsync from "../util/catchAsync";

const userModel = require("../models/user_model");
const tasksListModel = require("../models/task_list_model");
const Query = {
  user: catchAsync(async (parent, { uid }, ctx, info) => {
    const user = await userModel.findById(uid);
    return user;
  }),
  all_task_lists: catchAsync(async (parent, args, ctx, uid) => {
    const tasklists = await tasksListModel
      .find()
      .where("user")
      .equals(args.uid);
    return tasklists;
  }),
  task: catchAsync(async (parent, { taskid }, ctx, uid) => {
    const task = await tasksModel.findById(taskid);
    return task;
  }),

  tasks_by_list: catchAsync(async (parent, args, ctx, uid) => {
    const tasks = await tasksModel
      .find()
      .where("task_list")
      .equals(args.tasklist_id);

    return tasks;
  }),
};

export default Query;
