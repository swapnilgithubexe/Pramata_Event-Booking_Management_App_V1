const asyncWrapper = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, req, next)).catch(next)
  }
};

export default asyncWrapper;