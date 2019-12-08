const context = new Map();

export function getService(Service) {
  if (context.has(Service)) {
    return context.get(Service);
  }
  const instance = new Service();
  context.set(Service, instance);
  return instance;
}
