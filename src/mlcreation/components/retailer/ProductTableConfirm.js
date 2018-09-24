import React,{Component} from 'react';
import styled from "styled-components";
import data from "../../asset/ProductList.json";
import * as c from '../../common/Css2.js';
import * as c2 from './Css.js';
import {observer,inject} from "mobx-react";
import StaticData from "../../asset/StaticData.json";
import {ItemImage} from "../ItemImage";
import ProductColorCode from "../../asset/ColorCode.json";
import OrderHeaderContainer from "./OrderHeaderContainer";
import {TotalCostRow} from "./TotalCostRow";
import {RemarkRow} from "./RemarkRow";
import {ShowUPC} from "./ShowUPC";


const titlePink='rgb(254,203,191)';
const titleBlue='rgb(236,221,220)';
const tdBlue=c.ColorSchema.tdBlue.color;
const headerBlue=c.ColorSchema.headerBlue.color;


var qtyRowSpan={
  desktop:7,
  mobile:3
};
var headerRowSpan={
  desktop:4,
};
var totalRowSpan={
  desktop:9,
  mobile:5
};


 
const Table=styled.table`
border-collapse: collapse;
border:1px solid grey;
`;
 
const Wrapper=styled.div`
width:100%`;


const Button=styled.button`
background-color:${(props)=>props.black? 'black':'rgb(240,160,143)'};
color: ${(props)=>props.black? 'white':'black'};
width:100%;
margin:0;
border:1px solid ;
border-color:${(props)=>props.black? 'black':'rgb(240,160,143)'};
 `;

const TableField={
  No:{
    title:"No",
    color:titlePink,
    desktop:true,
    mobile:false,
    type:'No'
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
  UPC:{
    title:"UPC",
    color:titlePink,
    desktop:true,
    mobile:false,
    type:'upc'

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
  weight:{
    title:"Weight (KG)",
    color:titlePink,
    desktop:true,
    mobile:true,
    type:'state'
  }

}

const StyledTd=styled.td`

  background-color:${(props)=>props.color};
  border:1px solid grey;
  font-size:15px;
  margin:0px;

  `


@inject('store')
@observer
class ProductTableConfirm extends Component{

  constructor(props){
    super(props);

   }


  componentDidMount(){
    this.props.store.refreshOrderNo();
   }


   back(){
     this.props.callbackf('takeOrder');
   }

   confirmOrder(){
      this.props.callbackf('payment');
   }


  renderTop(device){
    var result=[];
    if(device=='mobile'){
      result.push(
        <tbody>
          <tr
          style={{
            'border':'1px solid black'
          }}
          >
            <td
            colspan={totalRowSpan[device]}
            style={{
              'border':'1px solid black'
            }}
            >
            Company Name:{this.props.store.retailerData.company.value}
            </td>
          </tr>
          <tr>
            <td
            colspan={totalRowSpan[device]}
            style={{
              'border':'1px solid black'
            }}
            >
            Address : {this.props.store.retailerData.address.value}
            </td>
          </tr>

        </tbody>
      );
    }else{
      result.push(
        <tbody
        >
        <tr>
        <td
        colspan={headerRowSpan[device]}
        rowspan='5'
        >Company Name:{this.props.store.retailerData.company.value}
        <br/>Address:{this.props.store.retailerData.address.value}</td>

         <td
          colspan={totalRowSpan[device]-headerRowSpan[device]}
          style={{
            'background-color':'rgb(240,160,143)',
            'border':'1px solid black'
          }}
          >Purchase Order Draft</td>
          </tr>

          <tr>
          <td
          colspan={totalRowSpan[device]-headerRowSpan[device]}

          style={{
            'border':'1px solid black'
          }}
          >Contact Person: {this.props.store.retailerData.buyer.value}</td>
          </tr>
          <tr>
          <td
          colspan={totalRowSpan[device]-headerRowSpan[device]}

          style={{
            'border':'1px solid black'
          }}

          >Phone No  {this.props.store.retailerData.phone.value}</td>
          </tr>
          <tr>
          <td
          colspan={totalRowSpan[device]-headerRowSpan[device]}

          style={{
            'border':'1px solid black'
          }}

          >Email  {this.props.store.retailerData.email.value}</td>
          </tr>
          </tbody>

      );
    }

    return result
  }

  renderHeader(device){
    var result=[];
    if(device=='mobile'){
      result.push(
      <tbody>
        <tr>
        <td style={{
          'background-color':headerBlue,
          'border':'1px solid black'
        }} colspan={totalRowSpan[device]}>Supplier:</td>
        </tr>
        <tr>
        <td style={{
          'background-color':'white',
          'border':'1px solid black'
        }} colspan={totalRowSpan[device]}> ML Creation Co, Limited(Hong Kong)</td>
        </tr>
        <tr>
        <td style={{
          'background-color':headerBlue,
          'border':'1px solid black'
        }} colspan={totalRowSpan[device]}>Ship To:</td>
        </tr>
        <tr>
        <td style={{
          'background-color':'white',
          'border':'1px solid black'
        }} colspan={totalRowSpan[device]}></td>
        </tr>
      </tbody>
    )
    }else{
    result.push(
      <tbody>
      <tr>
      <td style={{
        'background-color':headerBlue,
        'border':'1px solid black'
      }} colspan={headerRowSpan[device]}>Supplier:</td>
      <td style={{
        'background-color':headerBlue,
        'border':'1px solid black'
      }} colspan={totalRowSpan[device]-headerRowSpan[device]}>Ship To:</td>
      </tr>
      <tr>
      <td style={{
        'background-color':'white',
        'border':'1px solid black'
      }} colspan={headerRowSpan[device]}>
      {StaticData.companyInfo.name}      <br/>
      Company Registration Certicate no: {StaticData.companyInfo.BR}
      </td>
      <td style={{
        'background-color':'white',
        'border':'1px solid black'
      }} colspan={totalRowSpan[device]-headerRowSpan[device]}>
                  {this.props.store.retailerData.address.value}      
      </td>
      </tr>
      <tr>
      <td style={{
        'background-color':headerBlue,
        'border':'1px solid black'
      }} colspan={headerRowSpan[device]}>ML Creation Order No: {this.props.store.orderNo.orderNo}</td>
      <td style={{
        'background-color':headerBlue,
        'border':'1px solid black'
      }} colspan={totalRowSpan[device]-headerRowSpan[device]}>Order Date:</td>
      </tr>
      </tbody>
    );
    }
    return result
  }

  renderTitle(device){
    var result=[];
    for(var field in TableField){
      var json = TableField[field];
      var minWidth='50px';
      if(field=="No"){
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



    renderRow(device,rowData,code,color,index){

      var dataJson=rowData;
      var productID = code+"-"+color;
      var output="";
      var rowData=[];
     
      
      if(!this.props.store.retailerCart[productID]){
        this.props.store.retailerCart[productID]={
          name:code,
          qty:0,
          color:color
        }
      }
      
      var id = this.props.store.retailerCart[productID];
      if(id && id.qty!=0){

      for(var field in TableField){
        var json = TableField[field];
         if(json[device]){
           switch(json.type){
             case 'color':
               output = ProductColorCode[color].name;
             break;
             case 'No':
               output = index;
             break;
            case 'text':
              output = dataJson[field];
            break;
            case 'upc':
            output = <ShowUPC productID={code} color={color}/>
            break;
            case 'input':
              output = this.props.store.retailerCart[productID].qty;
            /*
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
              */
             break;
             case 'img':
              output=
              
              <ItemImage 
              width='100px'
              height='100px'
              productID={code}
              color={color}
              index={1}
              size='contain'
               /> 
               
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
          <c2.StyledTd color='white' align='center'>
          {output}
          </c2.StyledTd>
        );


      }
    }

        return rowData;

    }



      renderTableData(device,data){
        var result=[];
        var index=0;
         for(var item in data){
          //item = CODE only
          var colorArray = data[item].color;
          var rowData = data[item];
          var code = item;
          colorArray.map((color,i)=>{
            console.log(index);
            var productID = code+"-"+color;
            var id = this.props.store.retailerCart[productID];
            if(id && id.qty!=0){index++}
          
            result.push(
              <tr>
               {this.renderRow(device,rowData,code,color,index)}
               </tr>
            );
          });
        }

        return result;
      }

  render(){
     var device = this.props.device;
    

     var costJson = this.props.store.retailerCostBreakDown
     var totalWeight=costJson.totalWeight
     var totalProductCost=costJson.totalProductCost
     var totalShipmentCost=costJson.totalShipmentCost
     var finalCost=costJson.finalCost   
     var totalQty=costJson.totalQty

      return(
    <c2.Wrapper>
    <c.ColPureDiv>
    <c2.Table>
    <OrderHeaderContainer
      type='confirm'
    />
    {this.renderTitle(device)}
    {this.renderTableData(device,data)}
    <TotalCostRow 
      totalSpan = {totalRowSpan[device]-1}
      qtySpan = {qtyRowSpan[device]-1}
      qty = {totalQty}
      cost = {totalProductCost}
    />
     
     <RemarkRow
      totalSpan = {totalRowSpan[device]}
    />

    <tr>
    <td  colspan={4}
    style={{
      'background-color':'rgb(240,160,143)','margin':0,'padding':0
    }}
    >
    <c2.Button black onClick={()=>this.back()}>Back to Order Draft</c2.Button>

    </td>

    <td colspan={5}
    style={{
      'background-color':'rgb(240,160,143)','margin':0,'padding':0
    }}
    >

    <c2.Button onClick={()=>this.confirmOrder()}>Pay this order</c2.Button>

    </td>

    </tr>
    </c2.Table>

    </c.ColPureDiv>
    </c2.Wrapper>
  )
  }


  }


  export default ProductTableConfirm;
