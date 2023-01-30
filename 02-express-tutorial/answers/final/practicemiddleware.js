const myLogger = function (req, res, next) {
    console.log('Middleware executed, and LOGGED')
    next()
  }

  module.exports = {myLogger}