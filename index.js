import { GraphQLServer } from "graphql-yoga";
const dotenv = require("dotenv");
const mongoose = require("mongoose");
import Mutation from "./src/resolvers/Mutation";
import User from "./src/resolvers/User";
import Query from "./src/resolvers/Query";
import TaskList from "./src/resolvers/TaskLists";
import Task from "./src/resolvers/Tasks";
import { formatError } from "apollo-errors";
import logInput from "./src/middleware/testmiddleware";

dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DB_PASS);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connected sucessfully"))
  .catch((err) => {
    console.log(err);
  });

const options = {
  formatError,
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: {
    Mutation,
    Query,
    User,
    TaskList,
    Task,
  },
  middlewares: [logInput],
});

server.start(options, () => {
  console.log("The server is up");
});
