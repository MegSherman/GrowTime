module.exports = {
  checkSession: (req, res, next) => {
    if (req.session.user) {
      res.status(200).send(req.session)
    } else {
      next()
    }
  },

  // checkEmail: (req, res, next) => {
  //   const { email } = req.body
  //   if (req.body.email.includes("@") && req.body.email.includes(".")) {
  //     next()
  //   } else {
  //     return res.status(403).send("Invalid email address.")
  //   }  // },
}
