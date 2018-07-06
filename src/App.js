import React,{Component} from 'react';
import {BrowserRouter as Router,Route,NavLink,Redirect} from "react-router-dom";
import styled from "styled-components";
import Home from "./Home";
import Product from "./Product";
import Retailer from "./Retailer/Retailer";
import Login from "./Login";
import {observer,inject} from "mobx-react";
import { device } from "./device";
import LogoImg from './image/logo.png';
import menuIcon from './image/menuIcon.png';

const Logo=styled.div`
  display:flex;
  flex-wrap: wrap;
  margin: auto;
`;

const StyledDiv = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:inherit;
`;
const StyledLink = styled(NavLink)`
text-decoration: none;

  color:grey;
  padding:5px;
`;

const MainDiv = styled.div`
display:flex;
flex-direction:column;

`;

const LeftNavBar = ({className,children}) =>(
  <div className={className}>
    <StyledLink to="/">HOME</StyledLink>
    <StyledLink to="/her">FOR HER</StyledLink>
    <StyledLink to="/him">FOR HIM</StyledLink>
    <StyledLink to="/comments">COMMENTS</StyledLink>
  </div>
);

const StyledLeftNavBar=styled(LeftNavBar)`
display:none;
@media ${device.tablet}
  {
  display:flex;

  flex-wrap: wrap;
  margin: auto;
  width:360px;
  };
`;

const RightNavBar = ({className,children}) =>(
  <div className={className}>
    <StyledLink to="/about">ABOUT US</StyledLink>
    <StyledLink to="/contact">CONTACT US</StyledLink>
  </div>
);
const StyledRightNavBar=styled(RightNavBar)`
display:none;
@media ${device.tablet}
  {
  display:flex;

  flex-wrap: wrap;
  margin: auto;
  width:360px;
  flex-direction:row-reverse;
     };
`;
const TopBar = ({className,children})=>(
  <div className={className}>
  <StyledLink to="/retailer">RETAILER ACCOUNT</StyledLink>
  <StyledLink to="/">SHOPPING LIST</StyledLink>
  <StyledLink to="/">LANGUAGE</StyledLink>
  </div>
);

const StyledTopBar=styled(TopBar)`
  display:none;
  background-color:black;
  justify-content:flex-end;
  @media ${device.tablet}
    {
    display:flex；
    };
`;

const DropDownMenu=({className,children,show})=>(
  <div className={className}>
    {children}
    {show?(
      <StyledDiv>
      <div><StyledLink to="/">HOME</StyledLink></div>
      <div><StyledLink to="/her">FOR HER</StyledLink></div>
      <div><StyledLink to="/him">FOR HIM</StyledLink></div>
      <div><StyledLink to="/comments">COMMENTS</StyledLink></div>
      <div><StyledLink to="/retailer">RETAILER ACCOUNT</StyledLink></div>
      <div><StyledLink to="/">SHOPPING LIST</StyledLink></div>
      <div><StyledLink to="/">LANGUAGE</StyledLink></div>
      <div>  <StyledLink to="/about">ABOUT US</StyledLink></div>
        <div><StyledLink to="/contact">CONTACT US</StyledLink></div>
      </StyledDiv>
    ):(<div></div>)}
  </div>
);

const StyledDropDownMenu=styled(DropDownMenu)`
display:flex;
flex-direction:column;
background-color:blue;
justify-content:flex-end;
@media ${device.tablet}
  {
  display:none;
  };
`;


const NavBar = ({className,children}) =>(
  //stateless main navigation bar
  <div className={className}>
    <div>
    <StyledLeftNavBar/>
    </div>
    <Logo><img src={LogoImg}/></Logo>
    <div>
    <StyledRightNavBar/>
    </div>
  </div>
);

const StyledNavBar=styled(NavBar)`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:flex-end;
  text-align:center;
   @media ${device.tablet}
    {
      justify-content:space-between;
    };

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
  <Retailer/>
);
const LoginView = () =>(
<Login/>

);
@inject('store')
@observer
class App extends Component{


  constructor(props){
      super(props);
      this.state={show:false};
      this.props.store.login=sessionStorage.getItem("login");
  }

  render(){
    return(

      //render start

      <Router>
      <MainDiv>
        <StyledTopBar/>
        <StyledDropDownMenu show={this.state.show}>
        <div>
        <img src={menuIcon} onClick={()=>this.setState({show:!this.state.show})}/>
        </div>
        </StyledDropDownMenu>
        <StyledNavBar/>

        <Route exact path="/" component={Home}/>
        <Route exact path="/her" component={HerView}/>
        <Route exact path="/him" component={HimView}/>
        <Route exact path="/comments" component={CommentsView}/>


        <Route exact path="/retailer" render={()=>(
          this.props.store.login ? (<RetailerView/>):(<LoginView/>)
        )}/>


      </MainDiv>
      </Router>


      //render end
    )
  }
}


export default App;
