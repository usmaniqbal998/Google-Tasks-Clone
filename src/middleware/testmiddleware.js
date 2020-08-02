const logInput = {
  // standalone middleware
  Query: {
    user: async (resolve, root, args, context, info) => {
      console.log(`---------->logInput A: ${JSON.stringify(args)}`);
      console.log(resolve);
      const result = await resolve(root, args, context, info);
      console.log(`----------->logInput B`);
      console.log(result);
      return result;
    },
  },
};

export default logInput;
