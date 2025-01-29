import React, { useState } from 'react'
import { UPDATE } from '../Api'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
 

 const MAIN=styled.div`
 min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 400px;
    background-image: url("https://cdn.logojoy.com/wp-content/uploads/2018/05/30163537/7_big7.png");

 `
const Updatepage = () => {
    const[Name,setname]=useState("")
    const[Email,setemail]=useState("")
    const[Password,setpassword]=useState("")
    const[Place,setplace]=useState("")
    const[Mobile,setmobile]=useState("")
    const navigate= useNavigate()
    function display(){
        console.log("first details update",Name,Email,Mobile,Place,Password);
        
       UPDATE({Name,Email,Mobile,Place,Password}).then((data)=>{
        console.log("update",data);
        
            if(data?.status=="updated"){
      navigate("/")
            }
            
          })
    
    }
    
  return (
    <MAIN>

  
    <div>
          <input type="text"  placeholder='name' onChange={(e)=>setname(e.target.value)}/>
      <input type="email"  placeholder='email' onChange={(e)=>setemail(e.target.value)}/>
      <input type="mobile"  placeholder='mobile' onChange={(e)=>setmobile(e.target.value)}/>
      <input type="password"  placeholder='password' onChange={(e)=>setpassword(e.target.value)}/>
      <input type="text"  placeholder='place' onChange={(e)=>setplace(e.target.value)}/>
      <button onClick={display}>Update</button>
    </div>
    </MAIN>
  )
}

export default Updatepage
