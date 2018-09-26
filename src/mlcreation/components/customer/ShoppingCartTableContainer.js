import styled from "styled-components";
import React,{Component,Fragment} from 'react';
import * as c from '../../common/Css2.js';
import data from "../../asset/ProductList.json";
import {observer,inject} from "mobx-react";
import ShoppingCartTable from "./ShoppingCartTable";

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
const ButtonBar=styled.div`
justify-content:center;
align-items:center;
display:flex;
width:100%;
`;

@inject('store')
@observer
class ShoppingCartTableContainer extends Component{
  constructor(props){
    super(props);
 
  }



  payNow(finalCost){
    console.log("paying total "+finalCost)
    this.props.store.createCustomOrder(finalCost);
  }

  render(){

    var json = this.props.store.customCostBreakDown
    var totalProductCost = json.totalProductCost
    var totalShipmentCost = json.totalShipmentCost
    var finalCost = json.finalCost
    var totalQty = json.totalQty

      return(
        <Fragment>

          <ShoppingCartTable 
          cartData={this.props.store.shoppingCart}
          totalProductCost = {totalProductCost}
          totalQty = {totalQty}
          totalShipmentCost = {totalShipmentCost}
          finalCost={finalCost}
           />

          {(this.props.store.cartSize>0) &&
          <ButtonBar>
          <Button onClick={()=>window.history.back()}>BACK TO SHOPPING</Button>
          <Button onClick={()=>this.payNow(finalCost)}>PAY NOW</Button>
          </ButtonBar>
          }
        </Fragment>
      );
  }

}

export default ShoppingCartTableContainer;