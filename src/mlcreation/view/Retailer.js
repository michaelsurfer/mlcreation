import React, { Component } from 'react';
import styled from "styled-components";
import {SloganBanner} from '../components/SloganBanner';
import ProductTable from '../components/retailer/ProductTable';
import ProductTableConfirm from '../components/retailer/ProductTableConfirm';
import PaymentForm from '../components/payment/PaymentForm';
 import {observer,inject} from "mobx-react";
import RetailerBar from '../navigation/RetailerBar';
import ProductPriceList from '../components/retailer/ProductPriceList';



const BGColorSchema={
  takeOrder:'rgb(239,238,242)',
  confirmOrder:'rgb(239,238,242)',
  payment:'white',
}

const Wrapper=styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
padding:50px;
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
  console.log(this.props.store.retailerData);
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
  var costJson = this.props.store.retailerCostBreakDown
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
      <ProductTable device={device} callbackf={this.confirmCallBack}/>
      )
    break;
    case 'confirmOrder':
      resultView.push(
        <ProductTableConfirm device={device}  callbackf={this.confirmCallBack}/>
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
        <ProductPriceList device={device}/>
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

  <SloganBanner gender='g'/>

  </div>
  );
}

}

export default Retailer;
