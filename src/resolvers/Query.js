import { findById } from "../models/user_model";
import tasksModel from "../models/tasks_model";

const userModel = require("../models/user_model");
const tasksListModel = require("../models/task_list_model");
const Query = {
  user: async (parent, { uid }, ctx, info) => {
    try {
      const user = await userModel.findById(uid);
      return user;
    } catch (error) {
      return error;
    }
  },
  all_task_lists: async (parent, args, ctx, uid) => {
    try {
      const tasklists = await tasksListModel
        .find()
        .where("user")
        .equals(args.uid);
      return tasklists;
    } catch (error) {
      return error;
    }
  },
  task: async (parent, { taskid }, ctx, uid) => {
    const task = await tasksModel.findById(taskid);
    return task;
  },

  tasks_by_list: async (parent, args, ctx, uid) => {
    const tasks = await tasksModel
      .find()
      .where("task_list")
      .equals(args.tasklist_id);

    return tasks;
  },
};

export default Query;
