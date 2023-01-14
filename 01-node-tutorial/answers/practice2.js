const so = require('os')


usuario = so.userInfo()


const sentence = 'Practicando sentencias usando el programa Node.js'

module.exports = {sentence, usuario}