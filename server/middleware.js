module.exports = {
  usersOnly: (req, res, next) => {
    if (!req.session.user) {
      return res.status(401).send('Please login first.')
    }
    next()
  },
  adminsOnly: (req, res, next) => {
    if (!req.session.user) {
      return res.status(401).send('Please login first.')
    }
    if (req.session.user.admin === false) {
      return res.status(403).send('Access limited to admins.')
    }
    next()
  },
}
