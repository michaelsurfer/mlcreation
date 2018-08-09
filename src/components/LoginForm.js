import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import * as css from '../common/Css.js';


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

    updateItem(e,key){
        var value = e.target.value;
        var newJson = this.state.formData;
        newJson[key]=value;
        this.setState({formData:newJson});
    }
  render(){
    var formData = this.state.formData;
    var canSubmit = true;
    if(formData.email == '' || formData.password ==''){
      canSubmit=false;
    }
    return (
      <css.ColDiv>
        <css.TextDiv>
        <css.FormText>Email</css.FormText>
        </css.TextDiv>
        <css.Input type='text' value={formData.email} onChange={(e)=>this.updateItem(e,'email')}/>
        <css.TextDiv>
        <css.FormText>Password</css.FormText>
        </css.TextDiv>
        <css.Input type='password' value={formData.password} onChange={(e)=>this.updateItem(e,'password')}/>
        <css.ButtonDiv center>
        {canSubmit ? (
          <css.Button onClick={()=>this.props.onClick(JSON.stringify(formData))}>Login</css.Button>
        ):(
          <css.Button disable >Login</css.Button>)}
         </css.ButtonDiv>


      </css.ColDiv>

    )
  }

}


export default LoginForm;
