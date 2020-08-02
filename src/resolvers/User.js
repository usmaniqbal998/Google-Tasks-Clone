const tasksListModel = require("../models/task_list_model");

const User = {
  task_lists: async (parent, args, ctx, info) => {
    try {
      const tasklists = await tasksListModel
        .find()
        .where("user")
        .equals(parent.id);
      return tasklists;
    } catch (error) {
      return error;
    }
  },
};

export default User;
