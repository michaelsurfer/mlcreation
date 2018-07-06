import React,{Component} from 'react';
import styled from "styled-components";
import {observer,inject} from "mobx-react";
import {Redirect} from "react-router-dom";


const LoginForm=styled.div`
  display:flex;
  flex-direction:column;
  width:400px;
`;


@inject('store')
@observer

class Login extends Component{
  constructor(props){
    super(props);
    this.state=({
      username:'enter user name',
      email:'enter email address',
      password:'enter 6 digits password',
      redirect:false
    });
    this.login = this.login.bind(this);
  }

  login(){
    this.props.store.login=true;
    sessionStorage.setItem("login", true);
    this.setState({redirect:true});
  }

  render(){
    const redirect = this.state.redirect;
    if(redirect){return <Redirect to='/retailer'/>}

    return(
        <div style={{'display':'flex','justify-content':'center'}}>
        <LoginForm>
        <p>Username</p>
        <input type="text" name="username" value={this.state.username}/>
        <p>Email</p>
        <input type="text" name="email" value={this.state.email}/>
        <p>Password</p>
        <input type="password" name="email" value={this.state.email}/>
        <button onClick={this.login}>Sign In</button>
        <div style={{'display':'flex','justify-content':'center'}}>
        or
        </div>
        <button>Register Now</button>

        </LoginForm>
        </div>
    );
  }

}

export default Login;
