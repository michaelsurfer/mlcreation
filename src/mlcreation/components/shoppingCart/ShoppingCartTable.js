import styled from "styled-components";
import React,{Component} from 'react';
import * as c from '../../common/Css2.js';
import data from "../../asset/ProductList.json";
import {observer,inject} from "mobx-react";


const RemoveText=styled.label`
font-size:small;
color:grey;
`;
const Table=styled.table`
border-collapse:collapse;
width:100%;
border:1px solid grey;
`;
const Input=styled.input`
width:50%;
`;

const Total=styled.label`
margin:10px;
font-size:large;
color:black;
`;

@inject('store')
@observer
class ShoppingCartTable extends Component{
  constructor(props){
    super(props);


  }

  removeFromCart(id){
    this.props.store.removeFromCart(id);
  }
  updateQty(e){
    var key=e.target.id;
    var qty=e.target.value;

    console.log(key);

    if(qty==""){qty=0;}
    qty=parseInt(qty).toFixed(0);

    this.props.store.setCart(key,qty,'');
  }



  render(){
    var type = this.props.type;
    var shoppingCart;
    var subTotal=0;
    if(type=='history'){
    shoppingCart=this.props.history;
    subTotal=this.props.total;
    }else{
    shoppingCart = this.props.store.shoppingCart;
    subTotal=this.props.store.total;
    }
    var total = subTotal;
    var result=[];



    for(var id in shoppingCart){
      var qty = shoppingCart[id].qty;
      var productCode = shoppingCart[id].name;

      result.push(
        <tr>
        <td>Image</td>
        <td>{data[productCode].refNo}</td>
        <td>{data[productCode].itemName}</td>
        <td>{shoppingCart[id].color}</td>
        <td>
        {type=='history' ?(
          <div>{qty}</div>
        ):(
          <Input type='number' value={qty} id={id} onChange={(e)=>this.updateQty(e)}/>
        )}


        {type!='history' &&
          <RemoveText
          onClick={()=>this.removeFromCart(id)}
          >remove</RemoveText>
        }
        </td>
        <td>
          {data[productCode].retailPrice}
        </td>
        </tr>

      )
    }

    return(
    <Table>
      <tr style={{'border':'1px solid grey'}}>
        <td>Item</td>
        <td>W-Ref. No.</td>
        <td>Name</td>
        <td>Color</td>
        <td>Qty.</td>
        <td>Price</td>
      </tr>
      {result}
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
      <td colspan='6'></td>
      </tr>
      <tr style={{
         'height':'50px',
         'border-left':'1px solid white',
        'border-right':'1px solid white',
        'border-bottom':'1px solid grey'
      }}>
      <td colspan='4'></td>
      <td><Total>Total</Total></td>
      <td>{total}</td>

      </tr>
    </Table>
  )
}
}

export default ShoppingCartTable;
