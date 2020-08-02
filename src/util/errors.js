import { createError } from "apollo-errors";

const invalidUserorTaskList = createError("InvalidDetails", {
  message:
    "The Provided User Details or Tasklist details are invalid . Either removed",
});

export { invalidUserorTaskList };
