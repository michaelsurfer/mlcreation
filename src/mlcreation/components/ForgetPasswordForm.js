import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import * as c from '../common/Css2.js';
import {observer,inject} from "mobx-react";
import Dialog from '../components/dialog/Dialog';
import {apis} from '../common/config.js';
import {validateEmail} from '../common/Utility.js';



const Wrapper=c.ColCenterDiv.extend`
background-color:rgb(239,238,242);
width:469px;
height:200px;
`;
const Form=styled.form`
width:100%;
height:100%;
border:0px solid;
`;
const Button=styled.button`
background-color:rgb(253,159,129);
width:270px;
padding:10px;
`;
const Input=styled.input`
width:250px;
padding:10px;
`;

const Title=styled.label`
color:grey;
font-size:18pt;
padding:10px;
`;

const ColDiv=styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
height:100%;
border:0px solid;
`;


const InputDialog =({callback})=>(
  <Form onSubmit={callback}>
  <ColDiv>
  <Title>Please enter your email address</Title>
  <Input type='text' placeholder="enter your email address" id="email"/>
  <Button>Retrieve Password</Button>
  </ColDiv>
  </Form>
);

@inject('store')
@observer
class ForgetPasswordForm extends Component{

constructor(props){
    super(props);
    this.state={
      validEmail:false,
      submited:false
    };
    this.handleSubmit=this.handleSubmit.bind(this);
}

handleSubmit(event){
  event.preventDefault();
  var email=event.target.email.value; 
  if(email=="" || !email){
    this.props.store.showDialog("Please complete the form",true,false);
    return;
  }else{
    if(!validateEmail(email)){
    this.props.store.showDialog("Please enter a valid email address",true,false);
    }else{
    fetch(apis.retrievePassword.endpoint+email)
    .then(response=>response.json())
    .then(data=>{
    this.props.store.showDialog("Password sent to your email",true,false);
    });
  }

  }
}

render(){
  return(
  <Wrapper>
    <Dialog/>
    <InputDialog callback={this.handleSubmit}/>
  </Wrapper>
  )
  }
}

export default ForgetPasswordForm;
