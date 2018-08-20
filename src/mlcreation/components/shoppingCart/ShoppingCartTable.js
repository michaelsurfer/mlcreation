import styled from "styled-components";
import React,{Component} from 'react';
import * as c from '../../common/Css2.js';
import data from "../../asset/ProductList.json";


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
export const ShoppingCartTable=({
  shoppingCart={},
  /*
  shoppingCart=
   { 'ITS-S': { name: 'ITS', qty: '12', color: 'S' },
     'DB-B': { name: 'DB', qty: '3', color: 'B' },
     'DB-R': { name: 'DB', qty: '4', color: 'R' },
     'DB-PP': { name: 'DB', qty: '4', color: 'PP' },
   }
  */
  readOnly=false,
  removeFromCart, //callback
 })=>{
  var result=[];
  for(var id in shoppingCart){
    var qty = shoppingCart[id].qty;
    var productCode = shoppingCart[id].name;

    result.push(
      <tr>
      <td>Image</td>
      <td>{data[productCode].refNo}</td>
      <td>{data[productCode].itemName}</td>
      <td>{data[productCode].color}</td>
      <td>
        <Input type='number' value={qty} id={id} onChange={(e)=>this.updateQty(e)}/>
        <RemoveText
        onClick={()=>this.props.store.removeFromCart(id)}
        >remove</RemoveText>
      </td>
      </tr>

    );
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
  </Table>
  )
};
