import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import * as c from '../common/Css2.js';



const Wrapper=c.ColCenterDiv.extend`
background-color:rgb(239,238,242);
width:400px;
height:200px;
justify-content:space-around;
`;
const Button=styled.button`
background-color:rgb(92,194,219);
width:250px;
padding:10px;
`;
const Input=styled.input`
width:250px;
padding:10px;
`;

const Title=styled.label`
color:grey;
font-size:small;
padding:10px;
`;

const ColDiv=styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
height:100%;
`;



class ForgetPasswordForm extends Component{

constructor(props){
    super(props);
    this.state={
      validEmail:false,
      submited:false
    };
}

handleSubmit(event){
  event.preventDefault();
  var email=event.target.email.value;
  var password=event.target.password.value;
  console.log(email);
  console.log(password);

}
render(){
  var result=[];
  if(this.state.submited){
    result.push(
      <ColDiv>
      <Title>We have sent you an email to change your password</Title>
       <Button onClick={()=>this.setState({submited:true})}>Retrieve Password</Button>
      </ColDiv>
    )
  }else{
    result.push(
      <ColDiv>
      <Title>Please enter your email address</Title>
      <Input type='text' placeholder="enter your email address"/>
      <Button onClick={()=>this.setState({submited:true})}>Retrieve Password</Button>
      </ColDiv>
    )
  }
  return(
  <Wrapper>

    {result}
  </Wrapper>
)
}

}

export default ForgetPasswordForm;
