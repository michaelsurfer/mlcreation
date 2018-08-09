import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import * as c from '../common/Css2.js';


const Wrapper=c.ColCenterDiv.extend`
background-color:rgb(239,238,242);
width:400px;
height:300px;
justify-content:space-around;
`;

const SignInButton=styled.button`
background-color:rgb(92,194,219);
width:250px;
padding:10px;
`;

const Input=styled.input`
width:250px;
padding:10px;
`;

const Text1=styled.label`
color:black;
font-size:large;
`;
const Text2=styled.label`
color:grey;
font-size:small;
`;

const ColDiv=styled.div`
display:flex;
flex-direction:column;
align-items:center;
`;
const EmptyText=styled.label`
opacity:0;
`;
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

      <Wrapper>
        <Input type='text' placeholder="susnna@mlcreationco.com"/>
        <Input type='password' placeholder="Password"/>
        <SignInButton>Sign In</SignInButton>
        <ColDiv>
        <Text2>Forget password ?</Text2>
        <Text1>Create account now</Text1>
        </ColDiv>
        <ColDiv>
        <EmptyText>empty</EmptyText>
        <EmptyText>empty</EmptyText>
        </ColDiv>
      </Wrapper>
/*
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
*/
    )
  }

}


export default LoginForm;
