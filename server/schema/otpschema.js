const mongoose=require('mongoose')

const pageschm=new mongoose.Schema({
    OTP:{type:String,required:true},
    OTPEXPIRE:{type:Date,required:true},
    EMAIL:{type:String,required:true}

})
module.exports=mongoose.model('/OTPs',pageschm)