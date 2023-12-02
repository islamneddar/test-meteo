export const responseHandler = function (req, res, next, cb) {
  try{
    cb(req, res, next);
  } catch (error) {
    console.log("error", error);
    next(error)
  }
}