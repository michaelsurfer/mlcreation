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


const Wrapper=c.ColCenterDiv.extend`
background-color:${(props)=>props.color};
padding:20px;
`;


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
}

loginCallBack(action,data){
  //login logic
  switch(action){
    case 'forgetPassword':
    this.setState({forgetPassword:true});
    break;
    case 'register':
    this.setState({signIn:false});
    break;
    case 'login':
    /*
    var json={
      email:email,
      password:password
    };
    */
/*
    fetch(apis.login.endpoint,{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(data),
    })
    .then(response=>response.json())
    .then(data=>{
      if(data.result){
        this.props.store.retailerData=data.retailerData;
        this.props.store.login=true;
        console.log(this.props.store.retailerData);
      }
    });
*/
    console.log(data);
    this.props.store.retailerLogin(data);

    break;
  }

  console.log("loginCallBack");
}
RegisterCallBack(){}

displaySignIn(){
  var result=[];

  var color='rgb(239,238,242)';

  if(this.state.forgetPassword){
    color=c.ColorSchema.skyBlue.color;

      result.push(<ForgetPasswordForm/>);
  }else{

    if(this.state.signIn){
      color=c.ColorSchema.skyBlue.color;
      result.push(<LoginForm callBackf={this.loginCallBack}/>);
    }else{
      result.push(<RegisterForm callBackf={this.RegisterCallBack}/>);
    }

  }

  return(
    <Wrapper color={color}>
    {result}
    </Wrapper>
  );

}

displayRetailer(){
   return(
  <Retailer/>
);
}

render(){


return(
  <div>

     {this.displaySignIn()}

  </div>
);

}

}


export default LoginView;
