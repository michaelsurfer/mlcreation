import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import * as c from '../common/Css2.js';
import {observer,inject} from "mobx-react";
import Dialog from '../components/dialog/Dialog';
import Loading from './dialog/Loading'; 

const Wrapper=styled.div`
background-color:rgb(239,238,242);
display:flex;
flex-direction:column;
width:469px;
height:456px;
align-items:center;
`;



const Form=styled.form`
justify-content:space-around;
align-items:center;
display:flex;
flex-direction:column;
`;

const SignInButton=styled.button`
background-color:rgb(253,159,129);
width:390px;
padding:10px;
margin-top:45px;
font-size:14pt;


`;

const Input=styled.input`
width:370px;
padding:10px;
margin-top:45px;
`;

const CreateNew=styled.label`
color:grey;
font-size:14pt;
margin-top:10px;
`;
const ForgetPass=styled.label`
color:grey;
font-size:13pt;
padding:0px;
margin-top:45px;

`;

const ColDiv=styled.div`
display:flex;
flex-direction:column;
align-items:center;

 `;
const EmptyText=styled.label`
opacity:0;
`;

const WarningText=styled.label`
color:red;
font-size:small;
padding:5px;
`;

@inject('store')
@observer
class LoginForm extends Component{


  constructor(props){
    super(props);
    this.state = {
      showDialog:false,
      dialogMessage:'this is a local message',
      formData:{
        email:'',
        password:''
      }
    }
    this.SignIn=this.SignIn.bind(this);

  }

    updateItem(e){
        var value = e.target.value;
        var key = e.target.id;
        var newJson = this.state.formData;
        newJson[key]=value;
        this.setState({formData:newJson});
    }



    SignIn(){
      console.log(this.state.formData);
      var formData = this.state.formData;
      if(formData.email != '' && formData.password !=''){
        this.props.store.Retailer.loginF(this.state.formData);
        
      }else{
        this.props.store.Dialog.showDialog('please enter all information','close','CLOSE','/')
      }
     }
     
  render(){
 
    return (

      <Wrapper>
        <Dialog/>
         <Input type='text' id="email" onChange={(e)=>this.updateItem(e)} placeholder="susnna@mlcreationco.com"/>
        <Input type='password' id="password" onChange={(e)=>this.updateItem(e )} placeholder="Password"/>
        {this.props.store.loginError?(
          <WarningText>Login error, check your password</WarningText>
        ):(
          <div></div>
        )}

        <SignInButton
        onClick={this.SignIn}
        >Sign In</SignInButton>
        <ColDiv>
        <ForgetPass
        onClick={()=>this.props.callBackf('forgetPassword',{})}
        >Forget password ?</ForgetPass>
        <CreateNew onClick={()=>this.props.callBackf('register',{})}>Create the account now</CreateNew>
        </ColDiv>
        <ColDiv>
        <EmptyText>empty</EmptyText>
         </ColDiv>
        </Wrapper>

    )
  }

}


export default LoginForm;
