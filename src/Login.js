import React,{Component} from 'react';
import styled from "styled-components";



const LoginForm=styled.div`
  display:flex;
  flex-direction:column;
  width:400px;
`;



class Login extends Component{
  constructor(props){
    super(props);
    this.state=({
      username:'enter user name',
      email:'enter email address',
      password:'enter 6 digits password'
    });
  }

  render(){
    return(
        <div style={{'display':'flex','justify-content':'center'}}>
        <LoginForm>
        <p>Username</p>
        <input type="text" name="username" value={this.state.username}/>
        <p>Email</p>
        <input type="text" name="email" value={this.state.email}/>
        <p>Password</p>
        <input type="password" name="email" value={this.state.email}/>
        <button>Sign In</button>
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
