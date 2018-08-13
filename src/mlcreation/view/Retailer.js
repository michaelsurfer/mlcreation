import React, { Component } from 'react';
import styled from "styled-components";
import ImageSlider from '../components/ImageSlider';
import {SloganBanner} from '../components/SloganBanner';
import {ProductGrid} from '../components/ProductGrid';
import RegisterForm from '../components/RegisterForm';
import ProductTable from '../components/ProductTable';
import ProductTableConfirm from '../components/ProductTableConfirm';
import PaymentForm from '../components/PaymentForm';
import LoginForm from '../components/LoginForm';
import {observer,inject} from "mobx-react";
import RetailerBar from '../navigation/RetailerBar';
import ProductPriceList from '../components/ProductPriceList';


import * as c from '../common/Css2.js';


const BGColorSchema={
  takeOrder:'rgb(239,238,242)',
  confirmOrder:'rgb(239,238,242)',
  payment:'white',
}

const Wrapper=styled.div`
width:90%;
display:flex;
justify-content:center;
align-items:center;
padding:20px;
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

confirmCallBack(data,nextStep){
  /*
  nextStep :
  confirmOrder , data = purchase detail
  payOrder , data = server response uuid
  */
  console.log('confirm callback');
  console.log(data);

  if(nextStep=='payment'){
    this.setState({
      totalCost:data.totalCost,
      orderNo:data.data.uuid
    });
  }
  this.setState({page:nextStep});



}

back(){
  this.setState({page:'takeOrder'});
}

render(){


  var device='desktop';
  if(window.innerWidth <= 768){device='mobile'}
  console.log(window.innerWidth);
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
         productCost={this.state.totalCost}
         shipmentCost='50'
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

  <SloganBanner gender='skyBlue'/>

  </div>
  );
}

}

export default Retailer;
