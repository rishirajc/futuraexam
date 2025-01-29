const user=require("../schema/userschema")
const argon=require("argon2")

const Post=async(req,res)=>{
    console.log("firstttt",req.body.Password);
    req.body.Password= await argon.hash(req.body.Password)
    
    try {
        const helo=await user.create(req.body)
        console.log("seccc",helo);
        
        return res.status(200).json({status:"postdata is Successful"})
    } catch (error) {
        res.status(500).json(error)
        
    }
}
const Get=async(req,res)=>{
    try {
        const hello=await user.findById(req.params.id)
        return res.status(200).json(hello)
    } catch (error) {
        res.status(500).json(error)
        
    }
}
const Update=async(req,res)=>{
    try {
       await user.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        return res.status(200).json({status:"updated"})
    } catch (error) {
        res.status(500).json(error)
        
    }
}
const Delete=async(req,res)=>{
    try {
     await user.findByIdAndDelete(req.params.id)
        return res.status(200).json({status:"deleted"})
    } catch (error) {
        res.status(500).json(error)
        
    }
}
module.exports={Post,Get,Update,Delete}