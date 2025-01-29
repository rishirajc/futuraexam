const user=require("../schema/userschema")
const pageuser=require("../schema/otpschema")
const argon=require("argon2")
const nodemailer=require("nodemailer")

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
const transporter = nodemailer.createTransport({

    service:'gmail',
    
      auth: {
        user: process.env.Email,
        pass: process.env.Passwordd
      },
    });
   
function generateOTP(){
    return Math.round(Math.random() *10000).toString();

}

const Otp=async(req,res)=>{
const  OTP=generateOTP()
const OTPEXPIRE=new Date(Date.now()+5*60*1000)
const {EMAIL}=req.body
try {
    console.log("33333333333",OTP,OTPEXPIRE,req.body);
    const helloi=await pageuser.create({OTP,OTPEXPIRE,EMAIL})
    const htmlcontent=`
<p>Your OTP is shown below :</p>
      <h1> Your OTP Code </h1>
    <p><strong>${OTP}</strog></p>
    `
    
    const mailoptions={
        from : process.env.EMAIL,
        to :EMAIL,
        html:htmlcontent
    }
    console.log("email options",mailoptions);
    await transporter.sendMail(mailoptions)
    return res.status(200).json({message:"mail send successfully"})
    
} catch (error) { 
    res.status(500).json({error:"error sending mail"})
}
}
module.exports={Post,Get,Update,Delete,Otp}