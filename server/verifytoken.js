const jsw=require("jsonwebtoken")

const verify=async(req,res,next)=>{
    console.log("first",req.headers.token);
      
    try {
        const Token=req.headers.token
        if(Token){
            jsw.verify(Token,process.env.jswswckey,(err,data)=>{
                console.log("final answer",data);
                if(err){
                    res.status(401).json("token not verify")
                }

                if(req.params.id==data.id){
                    next()
                }else{
                    res.status(401).json('user and token didnt match')
                }
            })
        }
        
    } catch (error) {
        res.status(500).json(error)
        
    }
}
module.exports=verify