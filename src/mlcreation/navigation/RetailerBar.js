import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import * as c from '../common/Css2.js';
import { device } from "../common/device";
 
const Wrapper=styled.div`
background-color:rgb(222,200,200);
width:100%;
display:flex;
justify-content:space-between;
`;

const SubWrapper=styled.div`
padding:5px;
`;

class RetailerBar extends Component{
  constructor(props){
    super(props);
  }

render(){
  return(
    <Wrapper>
      <SubWrapper>
        <c.Link to='/yourAccount'>
          Your Account
        </c.Link>
        <c.Link to='/retailerPolicy'>
          Our Policy
        </c.Link>
        <c.Link to='/priceList'>
          Retailer Price List
        </c.Link>
        <c.Link to='/takeOrder'>
          Take Order
        </c.Link>
      </SubWrapper>
      <SubWrapper>
        <c.Link to='/viewAllTransactions/'>
          Your Order History
        </c.Link>
        <c.Link to='/'>
          Sign Out
        </c.Link>
      </SubWrapper>
    </Wrapper>
  );
}

}

export default RetailerBar;
