const express = require('express')

const path = require('path')
const dotenv = require('dotenv')

const webRouter=require('./routers/WebRouter')

dotenv.config();
const server = express()
server.use(express.json())

server.get("/",(request,respose)=>
{
console.log("Server Running")
})


server.use("/browse",webRouter)



server.listen(process.env.PORT,()=>
{
    console.log(`Server Running http://localhost:${process.env.PORT}`)
});