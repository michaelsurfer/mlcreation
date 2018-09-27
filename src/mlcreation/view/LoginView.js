import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import * as c from '../common/Css2.js';
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";
import {apis} from '../common/config.js';
import {observer,inject} from "mobx-react";
import Retailer from './Retailer';
import NavBar from '../navigation/NavBar';
import ForgetPasswordForm from '../components/ForgetPasswordForm';
import {SloganBanner} from '../components/SloganBanner';


const Wrapper=c.ColCenterDiv.extend`
background-color:${(props)=>props.color};
padding:20px;

height:690px;
`;

const BlackLine=styled.div`
height:36px;
width:100%;
background-color:rgb(30,30,30);
`;

const BackDiv=styled.label`
width:100%;
left:0px;
font-size:20px;
`
const BackButton = ({callback})=>(
  <BackDiv onClick={()=>callback()}>
    Back
  </BackDiv>
);

@inject('store')
@observer
class LoginView extends Component{

constructor(props){
  super(props);

  this.state={
    signIn:true,
    forgetPassword:false
  }

  this.loginCallBack=this.loginCallBack.bind(this);
  this.backToLoginPage=this.backToLoginPage.bind(this);
}

backToLoginPage(){
  this.setState({signIn:true,forgetPassword:false});
}


loginCallBack(action,data){
   switch(action){
    case 'forgetPassword':
    this.setState({forgetPassword:true});
    break;
    case 'register':
    this.setState({signIn:false});
    break;
    case 'login':
     this.props.store.retailerLogin(data);
    break;
  }

 }
RegisterCallBack(){}

displaySignIn(){
  var result=[];

  var color='rgb(239,238,242)';

  if(this.state.forgetPassword){
    color=c.ThemeColor.g.header;
      result.push(<BackButton callback={this.backToLoginPage}/>);
      result.push(<ForgetPasswordForm/>);
  }else{

    if(this.state.signIn){
      color=c.ThemeColor.g.header;
      result.push(<LoginForm callBackf={this.loginCallBack}/>);
    }else{
      result.push(<BackButton callback={this.backToLoginPage}/>);

      result.push(<RegisterForm callBackf={this.RegisterCallBack}/>);
    }

  }

  return(
    <Wrapper color={color}>
     {result}
    </Wrapper>
  );

}
/*
displayRetailer(){
   return(
  <Retailer/>
);
}
*/
render(){
return(
  <div>
      {this.displaySignIn()}
      <BlackLine/>
      <SloganBanner gender='g'/>

  </div>
  );
}

}


export default LoginView;
