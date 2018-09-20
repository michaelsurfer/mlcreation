import styled from "styled-components";
import React,{Component,Fragment} from 'react';
import ShoppingCartTableContainer from '../components/customer/ShoppingCartTableContainer';
import {observer,inject} from "mobx-react";
//import {StripePayment} from '../stripe/StripePayment';
import {NavLink} from "react-router-dom";
import PaymentModal from "../components/payment/PaymentModal";
import PaymentDone from "../components/payment/PaymentDone";
 
 
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
  this.PaymentDoneCallBackF=this.PaymentDoneCallBackF.bind(this);
  this.state={donePayment:false}
}

PaymentDoneCallBackF(){
  console.log("done call back")
  this.setState({donePayment:true});
}

render(){
  var json = this.props.store.customCostBreakDown
  var totalProductCost = json.totalProductCost
  var totalShipmentCost = json.totalShipmentCost
  var finalCost = json.finalCost
  var totalQty = json.totalQty

 
return(
  <Wrapper>

   {this.state.donePayment ? (
     <PaymentDone/>
   ):(
    <Fragment> 
    <Header>SHOPPING LIST</Header>
    <InnerWrapper>
    <ShoppingCartTableContainer/>

    </InnerWrapper>
    <PaymentModal 
    PaymentDoneCallBackF={this.PaymentDoneCallBackF}
    type='custom'
    totalProductCost = {totalProductCost}
    totalQty = {totalQty}
    totalShipmentCost = {totalShipmentCost}
    finalCost={finalCost}
    />
    
    </Fragment>
   )} 
 


   </Wrapper>
);
}


}


export default ShoppingCartView;
