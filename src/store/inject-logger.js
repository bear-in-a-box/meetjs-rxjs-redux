export const injectLogger = (name, reducer) => (...args) => {
  if (!args[1].type.startsWith("@@"))
    console.log("Reducer call", name, args[1]);
  return reducer(...args);
};
