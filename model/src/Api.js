import axios from "axios"
import { addtoUserdata, removedata } from "./pages/Redux/Loginslice";

export const LOGIN=async(data,dispatch)=>{
    console.log("second",data);
    
    try {
        const login=await axios.post("http://localhost:7000/login/userlogin",data)
        console.log("third",login.data);
        dispatch(addtoUserdata(login.data))
        return login.data
        
    } catch (error) {
       console.log(error);
       
        
    }
}
export const SIGNUP=async(data)=>{
    console.log("second",data);
    
    try {
        const hello=await axios.post("http://localhost:7000/router/posting",data)
        console.log(" third messege",hello.data);
        return hello.data
        
   
        
    } catch (error) {
        console.log(error);
        
        
    }
}
export const UPDATE=async(id,data)=>{
    console.log("seond",data);
    
    try {
        const update=await axios.put(`http://localhost:7000/router/updating/${id}`,data)
        console.log("third",update.data);
        return update.data
        
    } catch (error) {
        console.log(error);
        
        
    }
}
export const PROFILE=async(id)=>{
    console.log("first check",id);
    
    try{
const get=await axios.get(`http://localhost:7000/router/getting/${id}`)
console.log("final answer get in single data",get.data);
return get.data

    }catch(err){
        console.log(err);
        

    }
}
export const DELETE=async(id,dispatch)=>{
    try{
const response=await SecureRequest.delete(`http://localhost:7000/router/deleting/${id}`)
console.log(response.data);
response.data ? dispatch(removedata()) : null
return response.data

    }catch(err){

    }
}
export const GETOTPE=async(data)=>{
    console.log("seond",data);
    
    try {
        const getinfo=await axios.post('http://localhost:7000/routr/otp',data)
        console.log("third",getinfo.data);
        return getinfo.data
        
    } catch (error) {
        console.log(error);
        
        
    }
}