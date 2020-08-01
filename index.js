import { GraphQLServer } from "graphql-yoga";
const dotenv = require("dotenv");
const mongoose = require("mongoose");

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

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: {},
});

server.start(() => {
  console.log("The server is up");
});
