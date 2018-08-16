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





  updateQty(e){
    var key=e.target.id;
    var qty=e.target.value;
    if(qty==""){qty=0;}
    qty=parseInt(qty).toFixed(0);
    /*
    var cart = this.state.cart;
    cart[key]=qty;
    this.setState({cart:cart});
    this.props.store.subTotalCost = this.getSubTotalCost();
    */
    this.props.store.setCart(key,qty);
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

  renderTableData(){
    var result=[];
    var cart=this.props.store.shoppingCart;
    for(var id in cart){
        var qty = cart[id].qty;
         var productCode = cart[id].name;
        //id = productCode[0];
        //console.log(id);
        result.push(
           <tr>
            <td>
              IMAGE
            </td>
            <td>
              {data[productCode].refNo}
            </td>
            <td>
              {data[productCode].itemName}
            </td>
            <td>
              {data[productCode].color}
            </td>
            <td>
              <Input type='number' value={qty} id={id} onChange={(e)=>this.updateQty(e)}/>
              <RemoveText
              onClick={()=>this.props.store.removeFromCart(id)}
              >remove</RemoveText>
            </td>

            <td>
              {data[productCode].retailPrice}
            </td>

          </tr>
        );

        result.push(
          <tr>
          <td colspan='6'>
          <Line>
          </Line>
          </td>
          </tr>);
    }

    return(
      <tbody>
        {result}
      </tbody>
    );

  }

  render(){
    return(
     <Table>
    <tr style={{
      'border':'1px solid grey'
    }}>
      <td>
      Item
      </td>
      <td>
      W-Ref. No.
      </td>
      <td>
      Name
      </td>
      <td>
      Color
      </td>
      <td>
      Qty.
      </td>
      <td>
      Price
      </td>
    </tr>
    {this.renderTableData()}
    <tr>
      <td colspan='4'></td>
      <td>SUBTOTAL</td>
      <td>{this.props.store.total}</td>
    </tr>
    <tr>
      <td colspan='4'></td>
      <td>SHIPPING</td>
      <td>21</td>
    </tr>
    <tr style={{
       'border-left':'1px solid grey',
      'border-right':'1px solid grey',
      'border-bottom':'1px solid grey'
    }}>
    <td colspan='6'> </td>
    </tr>
    <tr style={{
       'height':'50px',
       'border-left':'1px solid white',
      'border-right':'1px solid white',
      'border-bottom':'1px solid grey'
    }}>
    <td colspan='4'></td>
    <td><Total>TOTAL</Total></td>
    <td></td>

    </tr>
    </Table>
   )
  }

}

export default ShoppingCart;
