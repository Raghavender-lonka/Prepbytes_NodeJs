const path = require("path")

const express = require("express") // it will load the express package in our app

const port = 8000

//creating app object
const app = express()

// route creation

// home route
app.get("/", (req, res, next) => {
  //res.send()
  //res.sendFile()
  //res.render()
  //res.json()
  res.send("Hi") //text
  //   res.send("<h1>Hello there</h1>") //html
  //json data
  //   res.send({
  //     name: "raghu",
  //     id: 1,
  //   })
})

//user route
// app.get("/user", (req, res, next) => {
//   // two different kinds of get request parameters

//   //1. query param
//   //2. path param
//   // console.log(req.query)
//   // http://localhost:8000/user?name=rag&age=23&address=gadwal
//   // const name = req.query.name
//   // const age = req.query.age
//   // const address = req.query.address

//   // res.send(`${name}, ${age}, ${address}`)
//   // res.send("User") //text
// })

// path param

// app.get("/user/:data?/:id", function (req, res) {
//   // console.log(req.params.data) // data is not keyword, but in routes we had given /:data, so we have to match that

//   //question mark (?) in route means it is optional
//   res.send(req.params.data + " " + req.params.id)
// })

app.get("/html", (req, res) => {
  // console.log(__dirname) //C:\Users\raghu\Prepbytes-NodeJs\Test
  // console.log(process.argv)
  const filePath = path.join(__dirname + "/views/home.html") // absoluate path of file
  res.sendFile(filePath)
})

app.post("/postroute", (req, res) => {
  res.json("this")
})

app.listen(port)
