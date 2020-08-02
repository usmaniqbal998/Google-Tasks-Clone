module.exports = (fn) => {
  return (parent, args, ctx, info) =>
    fn(parent, args, ctx, info).catch((error) => {
      return error;
    });
};
