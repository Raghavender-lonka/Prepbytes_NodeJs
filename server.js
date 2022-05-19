// const path = require("path")

const express = require("express") // it will load the express package in our app

const port = 8000

//creating app object
const app = express()

// route creation

// home route
app.get("/", (req, res) => {
  res.send("Hello there") //text
})

app.get("/api/main", (req, res) => {
  res.write("<h1>Express.Js</h1>")
  res.write(
    "<p>Express  is a light-weight web application framework to help organize your web application into an MVC architecture on the server side. You can then use a database like MongoDB  to provide a backend for your Node.js application. Express.js basically helps you manage everything, from routes, to handling requests and views.</p>"
  )
  res.end()
})

app.listen(port)
