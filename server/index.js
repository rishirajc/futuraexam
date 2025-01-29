const express=require("express")
const app=express()
const cors=require("cors")
app.use(cors())
const dotenv=require("dotenv")
dotenv.config()
const mongoose=require("mongoose")
const routr=require("./router/userrouter")
const authrout=require("./router/authrouter")
mongoose.connect(process.env.mongourl).then(()=>{
    console.log("database are connected");
    
})

app.use(express.json())
app.use("/router",routr)
app.use("/login",authrout)

app.listen(7000,()=>{
    console.log("port is connected");
    

})