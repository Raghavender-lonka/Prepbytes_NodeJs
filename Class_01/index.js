const http = require("http") // http module

const server = http.createServer((req, res) => {
  // res.write("Hello There")
  res.write("<h1>Hello there</h1>") //sending html response
  // res.write(JSON.stringify({ name:"Raghu", batch: 'DEC'}))
  res.end() // to end event loop
})

server.listen(8000)
