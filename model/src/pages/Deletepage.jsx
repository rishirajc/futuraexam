import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removedata } from './Redux/Loginslice'

const Deletepage = () => {
    const dispatch= useDispatch()

  function display(){
    dispatch(removedata())
    }
  return (
    <div>
                <button onClick={display}>YES</button>
             <Link to={'/home'}>  <button >NO </button></Link> 
                <h3>Are you sure you want to delete?</h3>
    </div>
  )
}

export default Deletepage
