// npm- global command, comes with node
// npm-- version

//local dependency -- use it only in this particular project
// npm i <packageName>

// global dependency -- use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName>

//package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)


// 0. Experimenting with Node Packages such as 'lodash
// const _ = require('lodash')
// const items = [1,[2,[3,[4,[5]]]]]
// const newItems = _.flattenDeep(items)
// console.log(newItems)
// console.log('Hello People')

//1. Experimenting with Event loop in Asynchronous function using 1-read-file.js
// const { readFile, writeFile } = require('fs')

// console.log('started a first task')
// // CHECK FILE PATH!!!!
// readFile('./content/first.txt', 'utf8', (err, result) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log(result)
//   console.log('completed first task')
// })
// console.log('starting next task')

//2. Experimenting with Event loop in Asynchronous function using 2-setTimeout.js
// started operating system process
// console.log('first')
// setTimeout(() => {
//   console.log('second')
// }, 0)
// console.log('third')
// completed and exited operating system process

//3. Experimenting with Event loop in Asynchronous function using 3-setInterval.js
// setInterval(() => {
//     console.log('hello world')
//   }, 2000)
//   console.log(`I will run first`)
// process stays alive unless
// Kill Process CONTROL + C
// unexpected error

//4. Experimenting with Event loop in Asynchronous function using 4-server.js
// const http = require('http')

// const server = http.createServer((req, res) => {
//   console.log('request event')
//   res.end('Hello World')
// })

// server.listen(5000, () => {
//   console.log('Server listening on port : 5000....')
// })
