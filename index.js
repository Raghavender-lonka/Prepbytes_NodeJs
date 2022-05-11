// console.log("Hi")
const http = require("http")

http
  .createServer((req, res) => {
    res.write("hi")
    res.end()
  })
  .listen(8000)
