import React,{Component} from 'react';
import styled from "styled-components";
import data from "../../asset/ProductList.json";
import StaticData from "../../asset/StaticData.json";
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

const titlePink='rgb(254,203,191)';
const titleBlue='rgb(236,221,220)';
const tdBlue=c.ColorSchema.tdBlue.color;
const headerBlue=c.ColorSchema.headerBlue.color;


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
    type:'selectionBox'
  },
  itemName:{
    title:"Item Name",
    color:titlePink,
    desktop:true,
    mobile:true,
    type:'text'

  },
  color:{
    title:"Colour",
    color:titlePink,
    desktop:true,
    mobile:false,
    type:'color'

  },
  itemPic:{
    title:"Picture",
    color:titlePink,
    desktop:true,
    mobile:true,
    type:'img'

  },
  description:{
    title:"Item Description",
    color:titlePink,
    desktop:true,
    mobile:true,
    type:'text'
  },
  UPC:{
    title:"UPC",
    color:titlePink,
    desktop:true,
    mobile:false,
    type:'text'

  },
  retailPrice:{
    title:"Unit Price (USD)",
    color:titlePink,
    desktop:true,
    mobile:true,
    type:'text'

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
    type:'state'
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

 

  @inject('store')
  @observer
  class ProductTable extends Component{

  constructor(props){
    super(props);
    this.state={
      orderNo:0,
      redirect:false,
      toLink:""
    };
   }

  redirect(productID){
    var gender = data[productID].gender;
    var toLink="";
    if(gender=='both'){
    this.props.store.showSelectGenderDialog.productID=productID;
    this.props.store.showSelectGenderDialog.show=true;
    }else{
      toLink="/product/"+gender+"/"+productID;
      this.setState({toLink:toLink,redirect:true});

    }
  }   

  confirmOrder(){
     /*
     var data = JSON.stringify(this.state.cart);
     sessionStorage.setItem("retailerOrder", data);
     this.props.callbackf(data,'confirmOrder');
     */
    }



  getTotalQty(){

    return this.props.store.totalRetailerQty;
  }


  getTotalCost(){

     return this.props.store.totalRetailerCost;
  }



  updateCart(e){
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
      var minWidth='70px';
      if(field=="selectionBox"){
        minWidth='10px';
      }
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
    console.log("render Row");
    console.log(productID);
    console.log(dataJson);
    if(!this.props.store.retailerCart[productID]){
      this.props.store.retailerCart[productID]={
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
            output = "";
          break;
          case 'text':
            output = dataJson[field];
          break;
          case 'input':
            output =
                <input type='number'
                id={productID}
                min={0}
                value={this.props.store.retailerCart[productID].qty}
                onChange={(e)=>this.updateCart(e)}
                style={{
                  'width':'30px'
                }}
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
            var qty = this.props.store.retailerCart[productID].qty;
            if(qty==""){qty=0;}
            output = parseInt(qty)*dataJson.retailPrice;
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
    console.log(data);
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
      qty = {this.props.store.totalRetailerQty}
      cost = {this.props.store.totalRetailerCost}
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
      <c2.Button onClick={()=>this.props.callbackf('confirmOrder')}>Submit order draft</c2.Button>
      </td>
    </tr>
    </c2.Table>
 
    </c.ColPureDiv>
    </c2.Wrapper>
  )
  }


  }

  ProductTable.defaultProps={
    retailerData:{
      comnpanyName:'ABC Limited',
      contact:"Michael Wong",
      address:'Room H, 6/H Park Island Ma Wan',
      phone:'98589541',
      email:'michael@gmail.com'
    }
  };

  export default ProductTable;
