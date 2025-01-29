import React, { useState } from 'react'
import { LOGIN } from '../Api'
import { useDispatch } from 'react-redux'
import "./login.css"
import { Link } from 'react-router-dom'

const Loginpage = () => {
    const[Email,setemail]=useState("")
    const[Password,setpassword]=useState("")
   const dispatch= useDispatch()
    
    function display(){
        LOGIN({Email,Password},dispatch)
    }
  return (
    <div className='main'>
        <div className='login'>

        
        <form >
  <h1 className='log'>LOG IN</h1>
  <label  className="labe">username</label>
  <input className="use" type="text" onChange={(e)=>setemail(e.target.value)} />
  <label className="labe">password</label>
  <input className="use" type="password" onChange={(e)=>setpassword(e.target.value)}/>
 <Link to={'/home'}><button className='logbutton' onClick={display}>LOGIN</button></Link> 
 <Link to={'/signup'}><button className='forgot'>SIGNUP</button></Link> 
 <Link to={'/forgot'}><h5 className="for">FORGOT PASSWORD?</h5></Link>

 </form>
      </div>
    </div>
  )
}

export default Loginpage
