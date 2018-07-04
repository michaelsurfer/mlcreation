import React,{Component} from 'react';
import {BrowserRouter as Router,Route,NavLink,Redirect} from "react-router-dom";
import styled from "styled-components";
import Home from "./Home";
import Product from "./Product";
import Login from "./Login";
 
const StyledLink = styled(NavLink)`
  color:palevioletred;
  padding:5px;
`;

const MainDiv = styled.div`
display:flex;
flex-direction:column;
border:1px solid grey;
border-radius:1px;
`;

const LeftNavBar = () =>(
  <div>
    <StyledLink to="/">HOME</StyledLink>
    <StyledLink to="/her">FOR HER</StyledLink>
    <StyledLink to="/him">FOR HIM</StyledLink>
    <StyledLink to="/comments">COMMENTS</StyledLink>
  </div>
);
const RightNavBar = () =>(
  <div>
    <StyledLink to="/about">ABOUT US</StyledLink>
    <StyledLink to="/contact">CONTACT US</StyledLink>
  </div>
);

const TopBar = ({className,children})=>(
  <div className={className}>
  <StyledLink to="/retailer">RETAILER ACCOUNT</StyledLink>
  <StyledLink to="/">SHOPPING LIST</StyledLink>
  <StyledLink to="/">LANGUAGE</StyledLink>
  </div>
);

const StyledTopBar=styled(TopBar)`
  display:flex;
  background-color:blue;
  justify-content:flex-end;


`;


const NavBar = ({className,children}) =>(
  //stateless main navigation bar
  <div className={className}>
    <LeftNavBar/>
    LOGO
    <RightNavBar/>
  </div>
);

const StyledNavBar=styled(NavBar)`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  text-align:center;
  border:1px solid grey;
  border-radius:1px;
`;

const HomeView = () =>(
  <div>HOME</div>
);
const HimView = () =>(
  <Product gender="him"/>
);
const HerView = () =>(
  <Product gender="her"/>
);
const CommentsView = () =>(
  <div>COMMENTS</div>
);
const RetailerView = () =>(
  <div>RETAILER</div>
);
const LoginView = () =>(
  <Login/>
);

class App extends Component{


  constructor(props){
      super(props);
      this.state = {login:false};
  }

  render(){
    return(

      //render start

      <Router>
      <MainDiv>
        <StyledTopBar/>
        <StyledNavBar/>

        <Route exact path="/" component={Home}/>
        <Route exact path="/her" component={HerView}/>
        <Route exact path="/him" component={HimView}/>
        <Route exact path="/comments" component={CommentsView}/>


        <Route exact path="/retailer" render={()=>(
          this.state.login ? (<RetailerView/>):(<LoginView/>)
        )}/>


      </MainDiv>
      </Router>


      //render end
    )
  }
}


export default App;
