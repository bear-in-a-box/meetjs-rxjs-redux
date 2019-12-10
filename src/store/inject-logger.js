export const injectLogger = (name, reducer) => (...args) => {
  if (!args[1].type.startsWith("@@"))
    console.log("Redux: Reducer call for", name, args[1]);
  return reducer(...args);
};
