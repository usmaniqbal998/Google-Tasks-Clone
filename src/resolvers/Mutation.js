import { findById } from "../models/user_model";

const userModel = require("../models/user_model");
const tasksListModel = require("../models/task_list_model");
const tasksModel = require("../models/tasks_model");

const Mutation = {
  create_user: async (parent, { name, email }, ctx, info) => {
    try {
      const new_user = await userModel.create({ name, email });
      return new_user;
    } catch (error) {
      return error;
    }
  },
  create_task_list: async (parent, { title, user }, ctx, info) => {
    try {
      const selected_user = await userModel.findById(user);
      if (!selected_user) {
        return new Error("User Not found", 404);
      }
      const tasklist = await tasksListModel.create({
        task_list_title: title,
        user: selected_user._id,
      });
      selected_user.task_lists.push(tasklist._id);
      await selected_user.save();
      return tasklist;
    } catch (error) {
      return error;
    }
  },
  create_task: async (
    parent,
    { task_list_id, task_title, task_detail, uid },
    ctx,
    info
  ) => {
    try {
      const TaskList = await tasksListModel.findById(task_list_id);
      const user = await userModel.findById(uid);
      if (!user || !TaskList) {
        return new Error("Invalid User or tasklist specified", 404);
      }

      const task = await tasksModel.create({
        task_title,
        task_details: task_detail,
        user: uid,
        task_list: task_list_id,
      });

      TaskList.tasks.push(task._id);
      await TaskList.save();

      return task;
    } catch (error) {
      return error;
    }
  },
};

export default Mutation;
