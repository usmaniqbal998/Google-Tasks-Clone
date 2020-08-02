const tasksListModel = require("../models/task_list_model");

const User = {
  task_lists: catchAsync(async (parent, args, ctx, info) => {
    const tasklists = await tasksListModel
      .find()
      .where("user")
      .equals(parent.id);
    return tasklists;
  }),
};

export default User;
