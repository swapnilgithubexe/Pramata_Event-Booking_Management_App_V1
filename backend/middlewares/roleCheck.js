export const isOrganizer = (req, res, next) => {
  if (req.user.role !== "organizer") {
    return res.status(403).json({
      success: false,
      message: "Access Denied: Organizer Only"
    })
  }
  next();
}