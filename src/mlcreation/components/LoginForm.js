import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import * as c from '../common/Css2.js';
import {observer,inject} from "mobx-react";
import Dialog from '../components/dialog/Dialog';


const Wrapper=c.ColCenterDiv.extend`
background-color:rgb(239,238,242);
width:400px;
height:300px;
justify-content:space-around;
`;

const Form=styled.form`
justify-content:space-around;
align-items:center;
display:flex;
flex-direction:column;
`;

const SignInButton=styled.button`
background-color:rgb(253,159,159);
width:250px;
padding:10px;
`;

const Input=styled.input`
width:250px;
padding:10px;
`;

const CreateNew=styled.label`
color:grey;
font-size:small;
padding:10px;
`;
const ForgetPass=styled.label`
color:grey;
font-size:small;
padding:10px;
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
      formData:{
        email:'',
        password:''
      }
    }
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
        this.props.store.retailerLogin(this.state.formData);
      }else{
        this.props.store.showDialog("Please enter all information",true,false);

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
        onClick={()=>this.SignIn()}
        >Sign In</SignInButton>
        <ColDiv>
        <ForgetPass
        onClick={()=>this.props.callBackf('forgetPassword',{})}
        >Forget password ?</ForgetPass>
        <CreateNew onClick={()=>this.props.callBackf('register',{})}>Create account now</CreateNew>
        </ColDiv>
        <ColDiv>
        <EmptyText>empty</EmptyText>
         </ColDiv>
        </Wrapper>

    )
  }

}


export default LoginForm;
