import React,{Component} from 'react';
import styled from "styled-components";
import {BrowserRouter as Router,Route,NavLink,Redirect} from "react-router-dom";
import data from "./ProductList.json";


const StyledTh=styled.td`
  border:1px solid grey;
  font-size:15px;
`

const StyledButtonBar=styled.div`
  border:1px solid grey;
  display:flex;
  justify-content:space-between;
  width:100%;
`

class ProductTable extends Component{
  constructor(props)
  {
    super(props);
    this.state={productData:[],show:true,showConfirmForm:false}
  }

  componentDidMount()
  {
    var newCart=[];

     //check whether session data exist
    var sessionData = JSON.parse(sessionStorage.getItem("retailerOrder"));
    if(!sessionData){
      data.map((item,i)=>{
        var json=item;
        json.qty=0;
        newCart.push(json);
      });
    }else{
      newCart=sessionData;
    }
    console.log(newCart);
    this.setState({productData:newCart});
  }
  resetAllItem(){
    const cart = this.state.productData;
    cart.map((item,i)=>{

            cart[i].qty = 0;

    });
    this.setState({productData:cart});
  }
  resetItem(id){
    const cart = this.state.productData;
    cart.map((item,i)=>{
          if(item.id == id){
            cart[i].qty = 0;
            return;
          }
    });
    this.setState({productData:cart});
  }

  getTotalQty(){
    var total=0;
    this.state.productData.map((d,i)=>{
      total=total+parseInt(d.qty);
    });
    return total;
  }
  getTotalCost(){
    var total=0;
    this.state.productData.map((d,i)=>{
      total=total+parseInt(d.qty)*parseInt(d.retailPrice);
    });
    return total;

  }

  updateItem(e,id){
    var qty = e.target.value;
    var newCart=this.state.productData;

    newCart.map((item,i)=>{
      if(id == item.id){
        if(qty){newCart[i].qty = qty;}
       }
    });

    this.setState({productData:newCart});
    }


  confirmOrder(){
    var data = JSON.stringify(this.state.productData);
    sessionStorage.setItem("retailerOrder", data);
    this.setState({showConfirmForm:true})
  }


  renderOrderForm(){
    var table=this.state.productData.map((d,i)=>
    <tr key={i}>
    <StyledTh>{d.refNo}</StyledTh>
    <StyledTh>{d.itemName}</StyledTh>
    <StyledTh>{d.color}</StyledTh>
    <StyledTh>{d.description}</StyledTh>
    <StyledTh>{d.UPC}</StyledTh>
    <StyledTh>$ {d.retailPrice}</StyledTh>
    <StyledTh>{d.qty}</StyledTh>
    <StyledTh>$ {d.qty * d.retailPrice}</StyledTh>
     </tr>
    );

    return(
      <table>
      <tr>
      <StyledTh>Ref No</StyledTh>
      <StyledTh>Item Name</StyledTh>
      <StyledTh>Color</StyledTh>
      <StyledTh>Description</StyledTh>
      <StyledTh>UPC</StyledTh>
      <StyledTh>Retailer Price</StyledTh>
      <StyledTh>Qty</StyledTh>
      <StyledTh>Total</StyledTh>
      </tr>
      {table}

      <tr>
      <td colspan="8">
      <StyledButtonBar>
      <button onClick={()=>this.setState({showConfirmForm:false})}>Back</button>
      <button onClick={()=>this.confirmOrder()}>Payment</button>
      </StyledButtonBar>
      </td>
      </tr>
      </table>
    );

  }


  renderTable()
  {

    var table=this.state.productData.map((d,i)=>
      <tr key={i}>
      <StyledTh>{d.refNo}</StyledTh>
      <StyledTh>{d.itemName}</StyledTh>
      <StyledTh>{d.color}</StyledTh>
      <StyledTh>{d.description}</StyledTh>
      <StyledTh>{d.UPC}</StyledTh>
      <StyledTh>$ {d.retailPrice}</StyledTh>
      <input type="number" value={d.qty} min={0} onChange={(e)=>this.updateItem(e,d.id)}/>
      <StyledTh>$ {d.qty * d.retailPrice}</StyledTh>
      <button onClick={()=>this.resetItem(d.id)}>del</button>
      </tr>
    );
    return(
      <table>
      <tr>
      <StyledTh>Ref No</StyledTh>
      <StyledTh>Item Name</StyledTh>
      <StyledTh>Color</StyledTh>
      <StyledTh>Description</StyledTh>
      <StyledTh>UPC</StyledTh>
      <StyledTh>Retailer Price</StyledTh>
      <StyledTh>Qty</StyledTh>
      <StyledTh>Total</StyledTh>
      <StyledTh>Delete</StyledTh>
      </tr>
      {table}
      <tr>
      <StyledTh></StyledTh>
      <StyledTh></StyledTh>
      <StyledTh></StyledTh>
      <StyledTh></StyledTh>
      <StyledTh></StyledTh>
      <StyledTh>Total</StyledTh>
      <StyledTh>{this.getTotalQty()}</StyledTh>
      <StyledTh>{this.getTotalCost()}</StyledTh>
      <StyledTh></StyledTh>
      </tr>

            <tr>
            <td colspan="9">
            <StyledButtonBar>
            <button onClick={()=>this.resetAllItem()}>Reset</button>
            <button onClick={()=>this.confirmOrder()}>Confirm Order</button>
            </StyledButtonBar>
            </td>
            </tr>
      </table>
    );
  }


  render(){
    var form;
    if(!this.state.showConfirmForm){
      form=this.renderTable();
    }else{
      form=this.renderOrderForm();
    }

    return(
      <div style={{'display':'flex','justify-content':'center','width':'100%'}}>
      {form}
      </div>

    );
  }



}


export default ProductTable;
