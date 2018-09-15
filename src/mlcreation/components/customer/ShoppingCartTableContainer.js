import styled from "styled-components";
import React,{Component} from 'react';
import * as c from '../../common/Css2.js';
import data from "../../asset/ProductList.json";
import {observer,inject} from "mobx-react";
import {ShoppingCartTable} from "./ShoppingCartTable";


@inject('store')
@observer
class ShoppingCartTableContainer extends Component{
  constructor(props){
    super(props);

  }

  removeFromCart(id){
    this.props.store.removeFromCart(id);
  }

  render(){
      return(
          <ShoppingCartTable 
          cartData={this.props.store.shoppingCart}
          totalCost={this.props.store.total}
          totalQty={this.props.store.cartSize}
          />
      );
  }

}

export default ShoppingCartTableContainer;