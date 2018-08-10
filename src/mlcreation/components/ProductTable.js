import React,{Component} from 'react';
import styled from "styled-components";
import data from "../asset/ProductList.json";
import * as c from '../common/Css2.js';
import itemSmall from '../image/itemSmall.png';


const titlePink=c.ColorSchema.titlePink.color;
const titleBlue=c.ColorSchema.titleBlue.color;
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

const Button=styled.button`
background-color:rgb(240,160,143);
margin:10px;
`;

const TableField={
  refNo:{
    title:"W-S Ref. No.",
    color:titlePink,
    desktop:true,
    mobile:false,
    type:'text'
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
    type:'text'

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

}

const StyledTd=styled.td`
  background-color:${(props)=>props.color};
  border:1px solid grey;
  font-size:15px;
  margin:0px;
  `



  class ProductTable extends Component{

  constructor(props){
    super(props);
    var shoppingCart={};
    this.state={cart:{}};

   }


  componentDidMount(){

    var cart={};

    var sessionData=JSON.parse(sessionStorage.getItem("retailerOrder"));
    if(!sessionData){

     for(var item in data){
      var id = data[item].uid;
      cart[id]=0;
      };
    }else{

      cart = sessionData;
    }


    this.setState({cart:cart});
   }

   confirmOrder(){
     var data = JSON.stringify(this.state.cart);
     sessionStorage.setItem("retailerOrder", data);
     this.props.callbackf(data,'confirmOrder');
     //this.setState({showConfirmForm:true})
   }

 

  getTotalQty(){
    var total=0;
    var cartData=this.state.cart;
    for(var item in cartData){
      var qty = cartData[item];
      if(qty==""){qty=0;}
      total=total+parseInt(qty);
    };
    return total;
  }


  getTotalCost(){
    var total=0;
    var cartData=this.state.cart;
    for(var item in cartData){
      var qty = cartData[item];
      if(qty==""){qty=0;}
      total=total+parseInt(qty)*parseInt(data[item].retailPrice);
    };
     return total;
  }



  updateCart(e){
    var key = e.target.id;
    var qty = e.target.value;
    if(qty==""){qty=0;}
    qty=parseInt(qty).toFixed(0);
    var cart = this.state.cart;
    cart[key]=qty;
    this.setState({cart:cart});
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
            Company Name: {this.props.retailerData.comnpanyName}
            </td>
          </tr>
          <tr>
            <td
            colspan={totalRowSpan[device]}
            style={{
              'border':'1px solid black'
            }}
            >
            Address : {this.props.retailerData.address}
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
        >Company Name:<br/>Address: {this.props.retailerData.address}</td>

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
          >Contact Person : {this.props.retailerData.contact}</td>
          </tr>
          <tr>
          <td
          colspan={totalRowSpan[device]-headerRowSpan[device]}

          style={{
            'border':'1px solid black'
          }}

          >Phone No : {this.props.retailerData.phone}</td>
          </tr>
          <tr>
          <td
          colspan={totalRowSpan[device]-headerRowSpan[device]}

          style={{
            'border':'1px solid black'
          }}

          >Email : {this.props.retailerData.email}</td>
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
      ML Creation Co, Limited(Hong Kong)
      <br/>
      Company Registration Certicate no:.....
      </td>
      <td style={{
        'background-color':'white',
        'border':'1px solid black'
      }} colspan={totalRowSpan[device]-headerRowSpan[device]}></td>
      </tr>
      <tr>
      <td style={{
        'background-color':headerBlue,
        'border':'1px solid black'
      }} colspan={headerRowSpan[device]}>ML Creation Order No:</td>
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

  renderTableData(device,data){
    var result=[];
    console.log(data);
    for(var item in data){

      var dataJson = data[item];

      var rowData=[];

      for(var field in TableField){
        var json = TableField[field];
         if(json[device]){
          var output;
          switch(json.type){
            case 'text':
              output = dataJson[field];
            break;
            case 'input':

               output =
                  <input type='number'
                  id={dataJson.uid}
                  min={0}
                  value={this.state.cart[dataJson.uid]}
                  onChange={(e)=>this.updateCart(e)}
                  style={{
                    'width':'30px'
                  }}
                  />


             break;
             case 'img':
              output=
                <SmallImageBox image={itemSmall}/>
             break;
             case 'button':
                output =
                  <button
                  id={dataJson.uid}
                  value={0}
                  onClick={(e)=>this.updateCart(e)}
                  >Delete</button>
             break;
            case 'state':
            //state mean real time form data, state.
              var qty = this.state.cart[dataJson.uid];
              if(qty==""){qty=0;}
              output = parseInt(qty)*dataJson.retailPrice;
             break;
            default:
            break;
          }


          rowData.push(
            <StyledTd color='white'>
            {output}
            </StyledTd>
          );
        }
       }
       result.push(<tr>{rowData}</tr>);


    };

    return(
      <tbody>{result}</tbody>
    );

  }



  render(){
     var device = this.props.device;
     return(
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
    <StyledTd color={headerBlue}>{this.getTotalQty()}</StyledTd>
    <StyledTd color={headerBlue}>{this.getTotalCost()}</StyledTd>
    <td  colspan={totalRowSpan[device]-qtyRowSpan[device]-1}
    style={{
      'background-color':headerBlue
    }}
    ></td>
    </tr>
    </Table>
    <c.RowCenterDiv>
      <Button onClick={()=>this.confirmOrder()}>Submit order draft</Button>
    </c.RowCenterDiv>
    </c.ColPureDiv>

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
