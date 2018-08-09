import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import * as css from '../common/Css.js';


var domain = 'http://localhost:3000';

class RegisterForm extends Component{


  constructor(props){
    super(props);
    this.state = {
      uniqueEmail:true,
      validEmail:true,
      checkingEmail:false,
      formData:{
        email:'',
        username:'',
        password:''
      }
    }
  }
  checkPassword(value){

  }

  register(formData){
    var endpoint = domain+'/addUser';
    console.log(formData.email);

    var email=formData.email;
    var password=formData.password;
    var data={
      abc:"asdf",cbc:"asdfas"
    };
/*
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      }
    };
    //var qs = querystring.stringify(email,password,data);
    var qs="email="+email+"&password="+password+"&data="+data;
    var response = axios.post(endpoint,qs,config);
    console.log(qs);
*/


  fetch(endpoint,{
    method:'POST',
    headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/x-www-form-urlencoded'
  },
    body:"email="+email+"&password="+password+"&data="+data
  });
  }

  checkEmail(value){
    //set true will display loading icon
    if(value=="") return;

    this.setState({checkingEmail:true});

    var endpoint = domain+'/checkEmail/'+value;
    console.log(endpoint);
    fetch(endpoint)
      .then(response=>response.json())
      .then(data=>{

        if(data.result){
          this.setState({uniqueEmail:true});
        }else{
          this.setState({uniqueEmail:false});
        }
        this.setState({checkingEmail:false});

      })


  }

cancelWarning(){
  this.setState({validEmail:true});

}

validateEmail(e) {
    var email = e.target.value;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var result = re.test(String(email).toLowerCase());
    this.setState({validEmail:result});
}

  updateItem(e,key){
      var value = e.target.value;
      var newJson = this.state.formData;
      if(key=='email'){
        this.checkEmail(value);
      }

      newJson[key]=value;
      this.setState({formData:newJson});
  }

  render(){
    var formData = this.state.formData;
    var displayEmailWarning=false;
    var displayUsernameWarning=false;
    var displayPasswordWarning=false;
    var emailWarning="";


    if(!this.state.uniqueEmail && formData.email!=''){
      displayEmailWarning=true;
      emailWarning="email already exist";

    }
    if(!this.state.validEmail && formData.email!='' ){
      displayEmailWarning=true;
      emailWarning="invalid email address";
    };

    if(formData.password.length < 6 && formData.password.length >0){displayPasswordWarning=true}

    var canSubmit = !displayUsernameWarning && !displayPasswordWarning && !displayEmailWarning;
    if(formData.email == '' || formData.password ==''){
      canSubmit=false;
    }

    return (
      <css.ColDiv>
      <css.TextDiv>
        <css.FormText>Email address</css.FormText>
      </css.TextDiv>

      <css.Input type='text' value={formData.email}
      onChange={(e)=>this.updateItem(e,'email')}
      onBlur={(e)=>this.validateEmail(e)}
      onFocus={()=>this.cancelWarning()}
      />

      <css.TextDiv>
      {displayEmailWarning ? (<css.WarningText>{emailWarning}</css.WarningText>):("")}
      {this.state.checkingEmail ? (<css.LoadingIcon/>):("")}
      </css.TextDiv>


        <css.TextDiv>
        <css.FormText>Password</css.FormText>
        </css.TextDiv>
        <css.Input type='password' value={formData.password} onChange={(e)=>this.updateItem(e,'password')}/>

        <css.TextDiv>
        {displayPasswordWarning ? (<css.WarningText>password must be 0 - 6</css.WarningText>):("")}
        </css.TextDiv>

        <css.ButtonDiv center>
        {canSubmit ? (
          <css.Button onClick={()=>this.register(formData)}>Register</css.Button>
        ):(
          <css.Button disable >Register</css.Button>)}
         </css.ButtonDiv>



      </css.ColDiv>

    )
  }

}


export default RegisterForm;
