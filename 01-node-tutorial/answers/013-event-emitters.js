const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (nombre, ssn) => {
    console.log(`data received user ${nombre} with id: ${ssn}`)
})

customEmitter.on('response', () => {
    console.log(`some other logic`)
})

//Order matters, code below (?) listening to functions above and then emitting
customEmitter.emit('response','john',34)