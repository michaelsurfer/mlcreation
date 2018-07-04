import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, NavLink,Redirect,Prompt } from "react-router-dom";
import styled from "styled-components";


const Title = styled.h1`
  font-size:1.5em;
  text-align:center;
  color:palevioletred;
`;

const Title2 = Title.extend`
   border:2px solid red;
  border-radius:3px;
`;

const Button = styled.button`
  background:${(props)=>props.primary ? 'palevioletred':'white'}
`;

const Home=()=>(
    <div>
     <Title>This is my first styled component!</Title>
     <Title2>This is my first styled component!</Title2>

     <Button>Normal</Button>
     <Button primary>Primary</Button>
    </div>
)


const Link = ({className,children})=>(
  <a className={className} href="#">{children}</a>
)
const StyledLink=styled(Link)`
    color:palevioletred;
`;
const Men=()=>(
    <div>
    <Link>Men</Link>
    <StyledLink>Styled Link here</StyledLink>
    </div>
)




const User = (params)=>{
  return (<div>Welcome User {params.username}</div>)
}

class App2 extends Component {

  state={
    loggedin:false
  }

  login = () => {
    this.setState(
      prevState=>(
        {loggedin: !prevState.loggedin}
      )
    )
  }

  render() {
    return (
        <Router>
          <div>
            <ul>

            <li><NavLink to="/" exact activeStyle={{color:'green'}}>Home</NavLink></li>
            <li><NavLink to="/men" activeStyle={{color:'green'}}>Men</NavLink></li>
            <li><NavLink to="/user/john">John</NavLink></li>
            <li><NavLink to="/user/peter">Peter</NavLink></li>


            </ul>

            <input type="button" value={this.state.loggedin ? 'Log Out' : 'Log In'} onClick={this.login.bind(this)}/>

            <Prompt
            when={!this.state.loggedin}
            message={(location) => {
              return location.pathname.startsWith('/user') ?
              `Are you sure you want to go to ${location.pathname}` : true
            }}
            />



            <Route exact path = "/" component={Home}/>
            <Route path = "/men" component={Men}/>

            <Route path = "/user/:username" exact strict render={
              ({match})=>(
                this.state.loggedin ? (<User username={match.params.username}/>):(<Redirect to='/' />)
              )

            }/>

          </div>
        </Router>
     );
  }
}

export default App2;
