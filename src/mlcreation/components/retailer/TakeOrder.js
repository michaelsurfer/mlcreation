import React,{Component} from 'react';
import styled from "styled-components";
import data from "../../asset/ProductList.json";
 import * as c from '../../common/Css2.js';
import * as c2 from './Css.js';
import OrderHeaderContainer from "./OrderHeaderContainer";
import {observer,inject} from "mobx-react";
import ProductColorCode from "../../asset/ColorCode.json";
import {ItemImage} from "../ItemImage";
import SelectGenderDialog from "../dialog/SelectGenderDialog";
import {Redirect} from "react-router";
import {TotalCostRow} from "./TotalCostRow";
import {RemarkRow} from "./RemarkRow";
import {ShowUPC} from "./ShowUPC";
import {pricelisttext} from "../../asset/PricelistDesc";
import QuantitySelection from '../QuantitySelection'; 

const titlePink='rgb(254,203,191)';
const titleBlue='rgb(236,221,220)';
 

var qtyRowSpan={
  desktop:8,
  mobile:3
};
var headerRowSpan={
  desktop:5,
};
var totalRowSpan={
  desktop:14,
  mobile:6
};





const TableField={
  selectionBox:{
    color:titlePink,
    desktop:true,
    mobile:false,
    type:'selectionBox',
    width:'10px'

  },
  itemName:{
    title:"Item Name",
    color:titlePink,
    desktop:true,
    mobile:true,
    type:'text',
    width:'30px'


  },
  color:{
    title:"Colour",
    color:titlePink,
    desktop:true,
    mobile:false,
    type:'color',
    width:'30px'


  },
  itemPic:{
    title:"Picture",
    color:titlePink,
    desktop:true,
    mobile:true,
    type:'img',
    width:'50px'
  },
  description:{
    title:"Item Description",
    color:titlePink,
    desktop:true,
    mobile:true,
    type:'text',
    width:'60px'

  },
  UPC:{
    title:"UPC",
    color:titlePink,
    desktop:true,
    mobile:false,
    type:'upc',
    width:'50px'

  },
  retailPrice:{
    title:"Unit Price (USD)",
    color:titlePink,
    desktop:true,
    mobile:true,
    type:'text',
    width:'50px'

  },
  qty:{
    title:"Qty",
    color:titlePink,
    desktop:true,
    mobile:true,
    type:'input'
  },
  total:{
    title:"Total",
    color:titlePink,
    desktop:true,
    mobile:true,
    type:'state',
    width:'10px'

  },
  delete:{
    title:"Delete",
    color:titlePink,
    desktop:true,
    mobile:true,
    type:'button'
  },
  MSRP:{
    title:"MSPR",
    color:titleBlue,
    desktop:true,
    mobile:false,
    type:'text'
  },
  MAP:{
    title:"MAP",
    color:titleBlue,
    desktop:true,
    mobile:false,
    type:'text'
  },
  weight:{
    title:"Item with Packaging Weight (Kg)",
    color:titleBlue,
    desktop:true,
    mobile:false,
    type:'text'
  },
  qtyInCarton:{
    title:"Qty in Carton",
    color:titleBlue,
    desktop:true,
    mobile:false,
    type:'text'
  }
}

 const SelectionBox=styled.div`
 width:13px;
 height:16px;
 margin-left:0px;
 background-color:${(props)=>props.selected?'rgb(254,203,191)':''};

 `;

  @inject('store')
  @observer
  class TakeOrder extends Component{

  constructor(props){
    super(props);
    this.state={
      orderNo:0,
      redirect:false,
      toLink:""
    };

    this.increaseQuantity=this.increaseQuantity.bind(this);
    this.decreaseQuantity=this.decreaseQuantity.bind(this);

   }

  
increaseQuantity(id){
    console.log("increaseQuantity :"+id)
    this.props.store.Retailer.increaseFromCart(id,'retailer')

}
decreaseQuantity(id){
    console.log("decreaseQuantity :"+id)
    this.props.store.Retailer.decreaseFromCart(id,'retailer')
}



   componentDidMount(){
    window.scrollTo(0, 0);
   }
  redirect(productID){
    var gender = data[productID].gender;
    var toLink="";
    if(gender=='both'){
    //this.props.store.showSelectGenderDialog.productID=productID;
    //this.props.store.showSelectGenderDialog.show=true;
    this.props.store.Dialog.setSelectGenderDialog(productID)

    }else{
      toLink="/product/"+gender+"/"+productID;
      this.setState({toLink:toLink,redirect:true});

    }
  }   

  confirmOrder(){
     /*
     var data = JSON.stringify(this.state.cart);
     Storasessionge.setItem("retailerOrder", data);
     this.props.callbackf(data,'confirmOrder');
     */
    }


/*
  getTotalQty(){

    return this.props.store.totalRetailerQty;
  }


  getTotalCost(){

     return this.props.store.totalRetailerCost;
  }
*/


  updateCart(e){
    console.log("update cart")
     var key = e.target.id;
    var qty = e.target.value;
    if(qty==""){qty=0;}
    qty=parseInt(qty).toFixed(0);
    this.props.store.setCart(key,qty,'retailer');
  }

  renderTitle(device){
    var result=[];
    for(var field in TableField){
      var json = TableField[field];
      var minWidth='60px';
      if(field=="selectionBox"){
        minWidth='10px';
        result.push(
          <c2.StyledTh 
          color='rgb(236,221,220)'
          minWidth={minWidth}
          >
          <SelectionBox selected/>
          </c2.StyledTh>
        );
      }else
      if(json[device]){
      result.push(
      <c2.StyledTh 
      color={json.color}
      minWidth={minWidth}
      >
        {json.title}
      </c2.StyledTh>
      )
      }
    }

    return (
      <tr>
        {result}
      </tr>
    )

  }
 
  renderRow(device,rowData,code,color){

    var dataJson=rowData;
    var productID = code+"-"+color;
    var output="";
    var rowData=[];

    if(!this.props.store.Retailer.cart[productID]){
      this.props.store.Retailer.cart[productID]={
        name:code,
        qty:0,
        color:color
      }
    }

    for(var field in TableField){
      var json = TableField[field];
       if(json[device]){
         switch(json.type){
          case 'color':
             output = ProductColorCode[color].name;
          break;
          case 'selectionBox':
            if(this.props.store.Retailer.cart[productID]!=null){
              if(this.props.store.Retailer.cart[productID].qty>0){
                output = <SelectionBox selected/>;
              }else{
                output = <SelectionBox />;
              }

            }else{
              output = <SelectionBox />;

            }

        
           break;
          case 'text':
          if(field=='description'){
            output=pricelisttext[code]
          }else{
          output = dataJson[field];
          }
          break;
          case 'upc':
          output = <ShowUPC productID={code} color={color}/>
          break;
          case 'input':
            var qty=0;
            if(this.props.store.Retailer.cart[productID]!=null){
              qty = this.props.store.Retailer.cart[productID].qty
            }
            /*
            output =
                <input type='number'
                id={productID}
                min={0}
                value={qty}
                onChange={(e)=>this.updateCart(e)}
                style={{
                  'width':'30px'
                }}
                />
                */
             output=  
               <QuantitySelection
                id={productID}
                qty={qty}
                width='60px'
                increaseQuantity={this.increaseQuantity}
                decreaseQuantity={this.decreaseQuantity}
               /> 

           break;
           case 'img':
            output=
                  <div onClick={()=>this.redirect(code)}>
                  <ItemImage 
                  width='100px'
                  height='100px'
                  productID={code}
                  color={color}
                  index={1}
                  size='contain'
                    />           
                  </div> 
           break;
           case 'button':
              output =
                <button
                id={productID}
                value={0}
                onClick={(e)=>this.updateCart(e)}
                >Delete</button>
           break;
          case 'state':
          //state mean real time form data, state.
          var qty=0;
          if(this.props.store.Retailer.cart[productID]!=null){
            qty = this.props.store.Retailer.cart[productID].qty
          }
            //var qty = this.props.store.retailerCart[productID].qty;
            if(qty==""){qty=0;}
            output = parseInt(qty)*dataJson.retailPrice;
            output=parseFloat(output).toFixed(2)
           break;
          default:
          break;
        }
      }

      rowData.push(
        <c2.StyledTd color='white'>
        {output}
        </c2.StyledTd>
      );


    }


      return rowData;

  }

  renderTableData(device,data){
    var result=[];
     for(var item in data){
      //item = CODE only
      var colorArray = data[item].color;
      var rowData = data[item];
      var code = item;
      colorArray.map((color,i)=>{
        result.push(
          <tr>
           {this.renderRow(device,rowData,code,color)}
           </tr>
        );
      });
    }

    return result;
  }

 

  render(){

 
     var device = this.props.device;
     var costJson = this.props.store.Retailer.costBreakDown
     var totalWeight=costJson.totalWeight
     var totalProductCost=costJson.totalProductCost
     var totalShipmentCost=costJson.totalShipmentCost
     var finalCost=costJson.finalCost   
     var totalQty=costJson.totalQty
     
     if(this.state.redirect){
       this.setState({redirect:false});
       return <Redirect to={this.state.toLink}/>
     }
     return(
    <c2.Wrapper>
    <SelectGenderDialog/>  
    <c.ColPureDiv>
    <c2.Table>
    <OrderHeaderContainer
      type='takeOrder'
    />
    {
      this.renderTitle(device)
    }
    {
      this.renderTableData(device,data)
    }
    <TotalCostRow
      totalSpan = {totalRowSpan[device]-1}
      qtySpan = {qtyRowSpan[device]-1}
      qty = {totalQty}
      cost = {totalProductCost}
    />
    <RemarkRow
      totalSpan = {totalRowSpan[device]}
    />
    <tr
      style={{
        'background-color':'rgb(240,160,143)','margin':0,'padding':0
      }}
    
    >
      <td colSpan={totalRowSpan.desktop}>
      
      {totalQty>=20 ? (
      <c2.Button onClick={()=>this.props.callbackf('confirmOrder')}>Submit order draft</c2.Button>
      ):(
      <c2.Button disabled>Submit</c2.Button>
      )
      
      }
       
      </td>
    </tr>
    </c2.Table>
 
    </c.ColPureDiv>
    </c2.Wrapper>
  )
  }


  }

  export default TakeOrder;
