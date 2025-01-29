const { Post, Get, Update, Delete, Otp } = require("../controller/appcontroller")

const router=require("express").Router()
router.post("/posting",Post)
router.get("/getting/:id",Get)
router.put("/updating/:id",Update)
router.delete("/deleting/:id",Delete)
router.post('/otp',Otp)

module.exports=router