import React,{Component} from 'react';
import styled from "styled-components";
import data from "../../asset/ProductList.json";
import * as c from '../../common/Css2.js';
import {observer,inject} from "mobx-react";
import {ItemImage} from "../ItemImage";
import ProductColorCode from "../../asset/ColorCode.json";
import {Redirect} from "react-router";
import SelectGenderDialog from "../dialog/SelectGenderDialog";
import {ShowUPC} from "./ShowUPC";


const titlePink='rgb(254,203,191)';
const titleBlue='rgb(236,221,220)';
 

var totalRowSpan={
  desktop:11,
  mobile:6
};

 

const Header=styled.div`
height:58px;
width:100%;
justify-content:center; 
align-items:center;
display:flex;
background-color:rgb(223,200,200);
margin-top:0px;
margin-bottom:10px;
`;

const Table=styled.table`
border-collapse: collapse;
border:0px solid grey;
white-space:pre-wrap;

`;

 

const Wrapper=styled.div`
width:100%`;


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
    type:'upc'

  },
  retailPrice:{
    title:"Unit Price (USD)",
    color:titlePink,
    desktop:true,
    mobile:true,
    type:'text'

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
  `

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
  class ProductPriceList extends Component{

  constructor(props){
    super(props);
    this.state={
       redirect:false,
      toLink:""
    };
    }


  componentDidMount(){}
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

  renderTitle(device){
    var result=[];
    for(var field in TableField){
      var json = TableField[field];
      var minWidth='100px';
      if(field=="No"){
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


    renderRow(device,rowData,code,color,index){

      var dataJson=rowData;
      var productID = code+"-"+color;
      var output="";
      var rowData=[];
     /*
      if(!this.props.store.retailerCart[productID]){
        this.props.store.retailerCart[productID]={
          name:code,
          qty:0,
          color:color
        }
      }
      */
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
      var index=0;
      for(var item in data){
        //item = CODE only
        var colorArray = data[item].color;
        var rowData = data[item];
        var code = item;
        colorArray.map((color,i)=>{
          index++;
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
     if(this.state.redirect){
      this.setState({redirect:false});
      return <Redirect to={this.state.toLink}/>
    }
     return(
    <Wrapper>
          <SelectGenderDialog/>  

    <c.ColPureDiv>
    <Table>
    <tr><td
    colspan={totalRowSpan[device]}
    style={{
      'background-color':'white',
      'text-align': 'center',
      'height':'59px',
      
    }}
    >
    <Header>ML Creation Retailer/E-Tailer Price List</Header>
    </td></tr>
    <tr>
      <td colspan={5}
      style={{
        "width":"50%",
        "background-color":"rgb(237,220,220)",
        "border-top":"1px solid grey",
        "vertical-align":"top"

      }}
      >
      {
`
ML Creation Co.,Limited (Hong Kong)
Company Registration Certification No,:61575741-000-06-17-9
Contact Person:Susanna Lee
Phone: 00852-97383616
Email: susanna@mlcreationco.com
`
      }
      </td>
      <td 
      colspan={6}
       style={{
        "width":"50%",
        "background-color":"rgb(237,220,220)",
        "border-left":"1px solid grey",
        "vertical-align":"top"

      }}
      >
<b>Order MOQ.:</b>
{`
The quanitiy of each product is not less than 2 pieces.
The total Qty. of each order is not less than 20 pieces. Each product can be mixed with color.      
`}
<b>Delivery Time:</b>
{`
After your payment, we will deliver your order to your designed delivery address within 5 business days,
For remote areas is 7 working days.

`}

      </td>  
    </tr> 
    {this.renderTitle(device)}
    {this.renderTableData(device,data)}
    <tr><td
    colspan={totalRowSpan[device]}
    style={{
      'background-color':titlePink,
      'text-align': 'center',
      'height':'50px',
      'border-bottom':'1px solid grey'

    }}
    >
            All our products' design are patented. All our products have CE(EMC),RoHS,& FCC international standards certification.
    </td></tr>
    </Table>

    </c.ColPureDiv>
    </Wrapper>
  )
  }


  }



  export default ProductPriceList;
