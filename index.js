const http = require("http")

const server = http.createServer((req, res) => {
  res.write("Hello There")
  // res.write(JSON.stringify({ name:"Raghu", batch: 'DEC'}))
  res.end()
})

server.listen(8000)
