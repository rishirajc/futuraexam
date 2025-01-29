const userone=require("../schema/userschema")
const argon=require('argon2')
const jwt=require('jsonwebtoken')

const LOGIN=async(req,res)=>{
    console.log("%%$",req.body);
    
    try {
        const finduser=await userone.findOne({Email:req.body.Email})
        if(!finduser){
            res.status(500).json('email not found')
        }
        console.log("email!!!",finduser);
        if(await argon.verify(finduser.Password,req.body.Password)){
            const token=jwt.sign({id:finduser._id},process.env.jswswckey,{expiresIn:'1d'})
            console.log("Final token",token);
            return res.status(200).json({userid:finduser._id,jwttoken:token})
            
        }else{
            req.status(500).json('password didnt match')
        }
        
        
    } catch (error) {
        res.status(500).json(error)
        
    }
}
module.exports=LOGIN