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

const RetailerView=inject('store')(observer((props)=>{
  return(
  <div>
  <NavBar/>
  {props.login?(
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
      <Route exact path="/retailerLogin2" render={(props)=>(<RetailerView state={this.props.store.login}/>)}/>
      <Route exact path="/retailerLogin" component={LoginView}/>

      {<Footer/>}
      </div>
      </Router>
    );
  }
}

export default App;
