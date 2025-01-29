import React, { useState } from 'react'
import { SIGNUP } from '../Api'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"

const MAIN=styled.div`
padding-top: 94px;
    padding-left: 167px;
    width: 500px;
    min-height: 73vh;
    background: url(https://cdn.dribbble.com/users/2398989/screenshots/6597610/presentation_dark2.jpg);
    color: #d80404;
    border-radius: 20px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.75);
    background-size: cover;
    background-position: center;
    overflow: hidden;
  
`


const FMAIN=styled.div`
    display: flex;
 width: 100%;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    background: #2986db;
`
const BTN=styled.div`
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    color: white;
    background: rgba(45, 126, 231);
    height: 31px;
    width: 92px;
    line-height: 30px;
    border-radius: 8px;
    border: none;
    margin: 17px 47px;
    padding-left: 19px;


`

const Signuppage = () => {
    const[Name,setname]=useState("")
    const[Email,setemail]=useState("")
    const[Password,setpassword]=useState("")
    const[Place,setplace]=useState("")
    const[Mobile,setmobile]=useState("")
    const navigate= useNavigate()
function display(){
    SIGNUP({Name,Email,Mobile,Place,Password}).then((data)=>{
        if(data.status=="postdata is Successful"){
  navigate("/")
        }
  
      })

}

  return (
    <FMAIN>

 
    <MAIN>
     
   
  
    
      <div>
      <h1 style={{marginTop:"-42px",marginLeft:"-89px",fontFamily:"math"}}>SIGNUP YOUR DETAILS</h1>

      </div>
      <div style={{marginTop:"100px"}}>
      <input type="text" placeholder='name' onChange={(e)=>setname(e.target.value)}/>
      </div>

      <div>
      <input style={{marginTop:"17px"}} type="email" placeholder='email'  onChange={(e)=>setemail(e.target.value)}/>
      </div>

      <div>
      <input style={{marginTop:"17px"}}  type="mobile" placeholder='mobile'  onChange={(e)=>setmobile(e.target.value)}/>
      </div>

      <div>
      <input style={{marginTop:"17px"}}  type="text" placeholder='place'  onChange={(e)=>setplace(e.target.value)}/>
      </div>


      <div>
      <input style={{marginTop:"17px"}}  type="password" placeholder='password'  onChange={(e)=>setpassword(e.target.value)}/>
      </div>

      <div>
      <BTN  onClick={display}>SIGNUP</BTN>
      </div>
     

    
   
    </MAIN>
    </FMAIN>
  )
}

export default Signuppage
