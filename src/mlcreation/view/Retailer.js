import React, { Component } from 'react';
import styled from "styled-components";
import {SloganBanner} from '../components/SloganBanner';
import TakeOrder from '../components/retailer/TakeOrder';
import ConfirmOrder from '../components/retailer/ConfirmOrder';
import PaymentForm from '../components/payment/PaymentForm';
 import {observer,inject} from "mobx-react";
import RetailerBar from '../navigation/RetailerBar';
import PriceList from '../components/retailer/PriceList';



const BGColorSchema={
  takeOrder:'rgb(239,238,242)',
  confirmOrder:'rgb(239,238,242)',
  payment:'white',
}

const Wrapper=styled.div`
width:85%;
display:flex;
justify-content:center;
align-items:center;
padding-top:100px;
padding-bottom:50px;

`;

const Outter=styled.div`
background-color:${(props)=>BGColorSchema[props.page]};
justify-content:center;
align-items:center;
display:flex;

`;


@inject('store')
@observer

//export const Retailer=(({gender})=>{
class Retailer extends Component{
constructor(props){
  super(props);
  var page;
  console.log("retailerData :");
  console.log(this.props.store.Retailer.retailerData);
  if(this.props.priceList){
    page='priceList';
  }else{
    page='takeOrder';
  }

   this.state={
    page:page,
    totalCost:0,
    orderNo:0
  };

  this.confirmCallBack=this.confirmCallBack.bind(this);
  this.back=this.back.bind(this);
}

componentDidMount() {
  window.scrollTo(0, 0);
}


confirmCallBack(nextStep){
  /*
  nextStep :
  confirmOrder , data = purchase detail
  payOrder , data = server response uuid
  */
  console.log('confirm callback');

  if(nextStep=='payment'){
    this.setState({
       //orderNo:data.data.uui
       orderNo:'234567890'
    });
  }
  this.setState({page:nextStep});



}

back(goto){
  this.setState({page:goto});
}

render(){
  var costJson = this.props.store.Retailer.costBreakDown
  var totalWeight=costJson.totalWeight
  var totalProductCost=costJson.totalProductCost
  var totalShipmentCost=costJson.totalShipmentCost
  var finalCost=costJson.finalCost   
  var totalQty=costJson.totalQty

  var device='desktop';
  if(window.innerWidth <= 768){device='mobile'}
   var resultView=[];

  switch (this.state.page){

    case 'takeOrder':
      resultView.push(
      <TakeOrder device={device} callbackf={this.confirmCallBack}/>
      )
    break;
    case 'confirmOrder':
      resultView.push(
        <ConfirmOrder device={device}  callbackf={this.confirmCallBack}/>
      )
    break;
    case 'payment':
      resultView.push(
         <PaymentForm
         orderNo={this.state.orderNo}
         orderDate="order date"
         productCost={totalProductCost}
         shipmentCost={totalShipmentCost}
         callbackf={this.back}
         />
      )
    break;
    case 'priceList':
    resultView.push(
        <PriceList device={device}/>
      )
    break;
  }



 return(
  <div>
  <RetailerBar/>
  <Outter page={this.state.page}>
  <Wrapper>

    {resultView}

   </Wrapper>
  </Outter>

 
  </div>
  );
}

}

export default Retailer;
