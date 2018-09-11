import React,{Component} from 'react';
import styled from "styled-components";
import data from "../asset/ProductList.json";
import StaticData from "../asset/StaticData.json";
import * as c from '../common/Css2.js';
//import itemSmall from '../image/itemSmall.png';
 import {observer,inject} from "mobx-react";
import ProductColorCode from "../asset/ColorCode.json";
import {ItemImage} from "./ItemImage";
import SelectGenderDialog from "./dialog/SelectGenderDialog";
import {Redirect} from "react-router";


const titlePink='rgb(254,203,191)';
const titleBlue='rgb(236,221,220)';
const tdBlue=c.ColorSchema.tdBlue.color;
const headerBlue=c.ColorSchema.headerBlue.color;


var qtyRowSpan={
  desktop:6,
  mobile:3
};
var headerRowSpan={
  desktop:5,
};
var totalRowSpan={
  desktop:11,
  mobile:6
};


const Table=styled.table`
border-collapse: collapse;
border:1px solid grey;
`;

const Button=styled.button`
background-color:rgb(240,160,143);
margin:10px;
`;


const Wrapper=styled.div`
width:100%;
`;


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

const StyledTd=styled.td`
  background-color:${(props)=>props.color};
  border:1px solid grey;
  font-size:15px;
  margin:0px;
  text-align: center; 
  `;

  const StyledTh=styled.th`
  background-color:${(props)=>props.color};
  border:1px solid grey;
  font-size:15px;
  margin:0px;
  text-align: center;
  min-width:${(props)=>props.minWidth}; 
  padding:5px;
 `


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


  componentDidMount(){
    this.props.store.refreshOrderNo();
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
            Company Name:
            </td>
          </tr>
          <tr>
            <td
            colspan={totalRowSpan[device]}
            style={{
              'border':'1px solid black'
            }}
            >
            Address :
            </td>
          </tr>

        </tbody>
      );
    }else{
      result.push(
        <tbody>
        <tr>
        <td
        colspan={headerRowSpan[device]}
        rowspan='5'
        >
        Company Name: {this.props.store.retailerData.company.value}
        <br/>
        Address: {this.props.store.retailerData.address.value}</td>

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
          >Contact Person : {this.props.store.retailerData.buyer.value}</td>
          </tr>
          <tr>
          <td
          colspan={totalRowSpan[device]-headerRowSpan[device]}

          style={{
            'border':'1px solid black'
          }}

          >Phone No : {this.props.store.retailerData.phone.value}</td>
          </tr>
          <tr>
          <td
          colspan={totalRowSpan[device]-headerRowSpan[device]}

          style={{
            'border':'1px solid black'
          }}

          >Email : {this.props.store.retailerData.email.value}</td>
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
        <td style={{'background-color':headerBlue,
          'border':'1px solid black'
        }} colspan={totalRowSpan[device]}>Supplier:</td>
        </tr>
        <tr>
        <td style={{
          'background-color':'white',
          'border':'1px solid black'
        }} colspan={totalRowSpan[device]}> {StaticData.companyInfo.name}
        </td>
        </tr>
        <tr>
        <td style={{
          'background-color':headerBlue,
          'border':'1px solid black'
        }} colspan={totalRowSpan[device]}>Ship To: 
        
        </td>
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
      <td style={{'background-color':headerBlue,'border':'1px solid black'}} colspan={headerRowSpan[device]}>
        Supplier:
      </td>
      <td style={{
        'background-color':headerBlue,
        'border':'1px solid black'
      }} colspan={totalRowSpan[device]-headerRowSpan[device]}>Ship To:
       </td>
      </tr>
      <tr>
      <td style={{
        'background-color':'white',
        'border':'1px solid black'
      }} colspan={headerRowSpan[device]}>
      {StaticData.companyInfo.name}
      <br/>
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
      }} colspan={headerRowSpan[device]}>ML Creation Order No: {this.props.store.orderNo.orderNo}
      </td>
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
      var minWidth='70px';
      if(field=="selectionBox"){
        minWidth='10px';
      }
      if(json[device]){
      result.push(
      <StyledTh 
      color={json.color}
      minWidth={minWidth}
      >
        {json.title}
      </StyledTh>
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
        <StyledTd color='white'>
        {output}
        </StyledTd>
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
    <Wrapper>
    <SelectGenderDialog/>  
    <c.ColPureDiv>
    <Table>
    <tr>
    <td colspan={6} 
          style={{
            "width":"50%",
            "background-color":"rgb(237,220,220)",
            "border-top":"1px solid grey",
            "vertical-align":"top"
    
          }}
    >
    Your Order No.:      
    </td>
    <td colspan={8} 
          style={{
            "width":"50%",
            "background-color":"rgb(237,220,220)",
            "border-top":"1px solid grey",
            "vertical-align":"top"
    
          }}
    >
    Order Date:      
    </td>
    </tr>  
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
    <td  colspan={totalRowSpan[device]-qtyRowSpan[device]-1}
    style={{
      'background-color':headerBlue
    }}
    ></td>
    </tr>
    </Table>
    <c.RowCenterDiv>
      <Button onClick={()=>this.props.callbackf('confirmOrder')}>Submit order draft</Button>
    </c.RowCenterDiv>
    </c.ColPureDiv>
    </Wrapper>
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
