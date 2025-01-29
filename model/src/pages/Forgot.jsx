import React, { useState } from 'react'
import { GETOTPE } from '../Api'
import styled from 'styled-components'
const MAIN=styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-top: 200px;
background-color: black;
min-height: 100vh;
`

const Forgot = () => {
    

    const[Email,setemail]=useState("")

    function display(){
        console.log("first",Email);
        
        GETOTPE({Email})

    }
  return (
    <MAIN>
        <div>

      
      <input type="text" placeholder='email' onChange={(e)=>setemail(e.target.value)}/>
      <button onClick={display}>send otp</button>
      </div>
    </MAIN>
  )
}

export default Forgot
