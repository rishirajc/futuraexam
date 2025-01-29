const LOGIN = require("../controller/authcontroller")

const authrouter=require("express").Router()
authrouter.post("/userlogin",LOGIN)
module.exports=authrouter