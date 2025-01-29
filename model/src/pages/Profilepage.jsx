import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  DELETE, PROFILE, } from '../Api';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import styled from 'styled-components';

const MAIN=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`

function  Profilepage() {
  const Localstoragevalue=useSelector((state)=>state.login.loginData) 
  console.log("local storage value",Localstoragevalue);
  const Id=Localstoragevalue?.userid
  const dispatch = useDispatch();

  const [state,setState]=useState([])
  const [state1,setState1]=useState()

  


  useEffect(()=>{
PROFILE(Id).then((data)=>{
    console.log("profile page data",data);
    setState(data)
})
  },[])
  function clearData(){
    DELETE(Id,dispatch).then((data)=>{
setState1(data)
    })
    
    
   
 
  }


  return (
    <MAIN>

 
    <div>


<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdiPLY6bHEp8cKVowVOUPJ6KkJbGhorKZKbs-fCk8n1hqmGpOGk_MwpThfydBVGhpGzv0&usqp=CAU" />
      <Card.Body>
        <Card.Title>Your Profile</Card.Title>
        <Card.Text>
       Welcome to your profile page
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item> {state?.Name}</ListGroup.Item>
        <ListGroup.Item>{state?.Email}</ListGroup.Item>
        <ListGroup.Item>{state?.Mobile}</ListGroup.Item>
        <ListGroup.Item> {state?.Place}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">  <Link to={'/updt'}><button>Update</button></Link> </Card.Link>
        <Card.Link href="#"><button onClick={clearData}>Delete your profile</button></Card.Link>
      </Card.Body>
    </Card>



   
    
    </div>
    </MAIN>
  )
}


export default Profilepage;
