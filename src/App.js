import React, { Component } from 'react';
import {BrowserRouter as Router,Route,NavLink,Redirect} from "react-router-dom";
import styled from "styled-components";


import {Footer} from './mlcreation/components/Footer';
import NavBar from './mlcreation/components/NavBar';
import Home from './mlcreation/view/Home';
import {Product} from './mlcreation/view/Product';
import {ProductList} from './mlcreation/view/ProductList';
import Retailer from './mlcreation/view/Retailer';
import {StripePayment} from './mlcreation/stripe/StripePayment';
import LoginView from './mlcreation/view/LoginView';
import {observer,inject} from "mobx-react";
import {YourAccountView} from './mlcreation/view/YourAccountView';



const HomeView = () =>(
  <div>
  <NavBar/>
  <Home/>
  </div>
);

const ProductView = ({match}) =>(
<div>
<NavBar gender={match.params.gender}/>
  <Product gender={match.params.gender}/>
</div>
);
const ProductListView = ({match}) =>(
<div>
<NavBar gender={match.params.gender}/>
  <ProductList gender={match.params.gender}/>
</div>
);

const YourAccount=inject('store')(observer((props)=>{
  console.log(props.store.login);
  return(
  <div>
  <NavBar/>

  {props.store.login?(
    <YourAccountView/>
  ):(
    <LoginView/>
  )}
  </div>
);
}));


const RetailerView=inject('store')(observer((props)=>{
  return(
  <div>
  <NavBar/>

  {props.store.login?(

    <Retailer/>
  ):(
    <LoginView/>
  )}
  </div>
);
}));

const PriceList=inject('store')(observer((props)=>{
  return(
  <div>
  <NavBar/>

  {props.store.login?(

    <Retailer priceList/>
  ):(
    <LoginView/>
  )}
  </div>
);
}));

const TakeOrder=inject('store')(observer((props)=>{
  return(
  <div>
  <NavBar/>

  {props.store.login?(

    <Retailer/>
  ):(
    <LoginView/>
  )}
  </div>
);
}));

/*
const RetailerView =()=>(
  <div>
  <NavBar/>
  {this.props.store.login?(
    <Retailer/>
  ):(
    <LoginView/>
  )}
  </div>
);

*/
const Payment=()=>(
<div>
<StripePayment/>
</div>
);




@inject('store')
@observer
class App extends Component {

  constructor(props){
    super(props);
   }

  render() {
    return (
      <Router>
      <div>
       <Route exact path="/" component={HomeView}/>
      <Route exact path="/product/:gender" component={ProductView}/>
      <Route exact path="/productList/:gender" component={ProductListView}/>
       <Route exact path="/retailerLogin" component={RetailerView}/>
       <Route exact path="/takeOrder" component={TakeOrder}/>
       <Route exact path="/yourAccount" component={YourAccount}/>
       <Route exact path="/priceList" component={PriceList}/>


      {<Footer/>}
      </div>
      </Router>
    );
  }
}

export default App;
