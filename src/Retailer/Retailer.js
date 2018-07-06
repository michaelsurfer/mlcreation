import React,{Component} from 'react';
import styled from "styled-components";
import {BrowserRouter as Router,Route,NavLink,Redirect} from "react-router-dom";
import ProductTable from "./ProductTable";



const StyledLink = styled(NavLink)`
text-decoration: none;

  color:grey;
  padding:5px;
`;


const TopBar = ({className,children})=>(
  <div className={className}>
  <StyledLink to="/retailer">Your Account</StyledLink>
  <StyledLink to="/">Retail Price List</StyledLink>
  <StyledLink to="/">Take Order</StyledLink>
  </div>
);

const StyledTopBar=styled(TopBar)`
  display:flex;
  background-color:pink;
  justify-content:flex-start;
`;

class Retailer extends Component{
constructor(props){
  super(props);
  }
render(){
  return(
    <div>
    <StyledTopBar/>
    <ProductTable/>
    </div>
  );
}
}

export default Retailer;
