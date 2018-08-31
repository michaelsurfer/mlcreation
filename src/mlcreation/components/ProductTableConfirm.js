import React,{Component} from 'react';
import styled from "styled-components";
import data from "../asset/ProductList.json";
import * as c from '../common/Css2.js';
 import {apis} from '../common/config.js';
import {observer,inject} from "mobx-react";
import StaticData from "../asset/StaticData.json";
import {ItemImage} from "./ItemImage";
import ProductColorCode from "../asset/ColorCode.json";


const titlePink=c.ColorSchema.titlePink.color;
const titleBlue=c.ColorSchema.titleBlue.color;
const tdBlue=c.ColorSchema.tdBlue.color;
const headerBlue=c.ColorSchema.headerBlue.color;


var qtyRowSpan={
  desktop:5,
  mobile:3
};
var headerRowSpan={
  desktop:4,
};
var totalRowSpan={
  desktop:8,
  mobile:5
};


const SmallImageBox=styled.div`
width:50px;
height:60px;
display:flex;
flex:1;
border:0px solid black;
background:url(${(props)=>props.image});
background-repeat:no-repeat;
background-size: contain;
background-position: center;
margin:5px;
`;

const Table=styled.table`
border-collapse: collapse;
border:1px solid grey;
`;
 
const Wrapper=styled.div`
width:80%`;


const Button=styled.button`
background-color:${(props)=>props.black? 'black':'rgb(240,160,143)'};
color: ${(props)=>props.black? 'white':'black'};
width:100%;
margin:0;
border:1px solid ;
border-color:${(props)=>props.black? 'black':'rgb(240,160,143)'};
 `;

const TableField={
  refNo:{
    title:"W-S Ref. No.",
    color:titlePink,
    desktop:true,
    mobile:false,
    type:'refNo'
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
    title:"Item Picture",
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
     this.props.store.createOrder();
     
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
      if(json[device]){
      result.push(
      <StyledTd color={json.color}>
        {json.title}
      </StyledTd>
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
      /*
      if(!this.props.store.retailerCart[productID]){
        this.props.store.retailerCart[productID]={
          name:code,
          qty:0,
          color:color
        }
      }
      */
      var id = this.props.store.retailerCart[productID];
      if(id && id.qty!=0){

      for(var field in TableField){
        var json = TableField[field];
         if(json[device]){
           switch(json.type){
             case 'color':
               output = ProductColorCode[color].name;
             break;
             case 'refNo':
               output = "W-"+code+"-"+color;
             break;
            case 'text':
              output = dataJson[field];
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
          <StyledTd color='white'>
          {output}
          </StyledTd>
        );


      }
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
     return(
    <Wrapper>
    <c.ColPureDiv>
    <Table>
    {this.renderTop(device)}
    {this.renderHeader(device)}
    {this.renderTitle(device)}
    {this.renderTableData(device,data)}
    <tr>
    <td  colspan={qtyRowSpan[device]-1}
    style={{
      'background-color':headerBlue
    }}
    ></td>
    <StyledTd color={headerBlue}>Total</StyledTd>
    <StyledTd color={headerBlue}>{this.props.store.totalRetailerQty}</StyledTd>
    <StyledTd color={headerBlue}>{this.props.store.totalRetailerCost}</StyledTd>

    {device=='desktop' &&

      <td  colspan={totalRowSpan[device]-qtyRowSpan[device]-1}
      style={{
        'background-color':headerBlue,
        'border':'1px solid grey'
      }}
      ></td>
    }




    </tr>

    <tr>

    </tr>
    <td  colspan={totalRowSpan[device]}
    style={{
      'background-color':headerBlue,'margin':0,
      'border':'0px solid grey'

    }}
    >Remark:</td>

    <tr>
    <td  colspan={qtyRowSpan[device]-1}
    style={{
      'background-color':headerBlue,'margin':0,'padding':0
    }}
    >
    <Button black onClick={()=>this.back()}>Back to Order Draft</Button>

    </td>

    <td colspan={totalRowSpan[device]-qtyRowSpan[device]+1}
    style={{
      'background-color':headerBlue,'margin':0,'padding':0
    }}
    >

    <Button onClick={()=>this.confirmOrder()}>Pay this order</Button>

    </td>

    </tr>
    </Table>

    </c.ColPureDiv>
    </Wrapper>
  )
  }


  }


  export default ProductTableConfirm;
