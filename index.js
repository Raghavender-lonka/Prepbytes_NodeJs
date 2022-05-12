// console.log("Hi")
const http = require("http")

http
  .createServer((req, res) => {
    res.write("hello there")
    // res.write(JSON.stringify({ name:"Raghu", batch: 'DEC'}))
    res.end()
  })
  .listen(8000)
