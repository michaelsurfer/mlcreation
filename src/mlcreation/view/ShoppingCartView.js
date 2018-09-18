import styled from "styled-components";
import React,{Component} from 'react';
import ShoppingCartTableContainer from '../components/customer/ShoppingCartTableContainer';
import {observer,inject} from "mobx-react";
//import {StripePayment} from '../stripe/StripePayment';
import {NavLink} from "react-router-dom";
import PaymentModal from "../components/payment/PaymentModal";

 
const ButtonBar=styled.div`
justify-content:center;
align-items:center;
display:flex;
width:100%;
`;


const ButtonBarWrapper=styled.div`
width:100%;
padding:5px;
display:flex;
justify-content:space-between;
align-items:center;
`;

export const Button=styled.button`
  background-color:rgb(225,200,200);
  color:black;
  height:50px;
  width:100%;
  border:1px solid rgb(225,200,200);
  margin-top:20px;
  padding:0px;
  font-size:20pt;
  `;
const Header=styled.div`
background-color:rgb(240,163,135);
width:100%;
padding:2px;
`;
const InnerWrapper=styled.div`
width:80%;
padding:20px;
`;
const Wrapper=styled.div`
width:100%;
background-color:rgb(239,238,242);
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`;

@inject('store')
@observer
class ShoppingCartView extends Component{
constructor(props){
  super(props);
  this.props.store.loadShoppingCart();
}

render(){
return(
  <Wrapper>
  <Header>SHOPPING LIST</Header>
  <InnerWrapper>
    <ShoppingCartTableContainer/>


 
<ButtonBar>
 
   <Button 
  >BACK TO SHOPPING</Button>
  <Button 
  onClick={()=>this.props.store.showPaymentModal=true}
  >PAY NOW</Button>
 
</ButtonBar>
</InnerWrapper>


<PaymentModal/>



   </Wrapper>
);
}


}


export default ShoppingCartView;
