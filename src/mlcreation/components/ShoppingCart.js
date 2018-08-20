/*
shopping cart component
Table Title:
Item,W-refNo,Name,color,Qty,price
*/
import {observer,inject} from "mobx-react";
import {computed} from "mobx";
import styled from "styled-components";
import React,{Component} from 'react';
import data from "../asset/ProductList.json";
import * as c from '../common/Css2.js';
import ShoppingCartTable from './shoppingCart/ShoppingCartTable';


const RemoveText=styled.label`
font-size:small;
color:grey;
`;

const Input=styled.input`
width:50%;
`;
const Title=styled.label`
color:grey;
`;

const Desc=styled.label`
color:grey;
`;

const Total=styled.label`
margin:10px;
font-size:large;
color:black;
`;
const Table=styled.table`
border-collapse:collapse;
width:100%;
border:1px solid grey;
`;

const Line=styled.div`
border-bottom:1px solid grey;
width:90%;
margin:auto;
`;

@inject('store')
@observer
class ShoppingCart extends Component{
  constructor(props){
    super(props);
     this.state={cart:{}};
  }

  componentDidMount(){
    //load cart from session data
    var cart=this.props.store.shoppingCart;
    this.setState({
      cart:cart
    });
  }

  getSubTotalCost(){
    var total=0;
    var cartData=this.state.cart;
    for(var item in cartData){
      var qty = cartData[item].qty;
      if(qty==""){qty=0;}
      total=total+parseInt(qty)*parseInt(data[item].retailPrice);
    };

      return total;
  }


  getTotalCost(){
    var total=this.getSubTotalCost();
    return total+10;
  }

  render(){
    var history={
      "ITS-S":{name:"ITS",qty:12,color:"S"}
    }

    return (
      <div>
      <ShoppingCartTable />
      <ShoppingCartTable type='history' history={history}/>
      <ShoppingCartTable type='history' history={history}/>

      </div>
          )
  }


}

export default ShoppingCart;
