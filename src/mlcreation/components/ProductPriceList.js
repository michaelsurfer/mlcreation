import React,{Component} from 'react';
import styled from "styled-components";
import data from "../asset/ProductList.json";
import * as c from '../common/Css2.js';
import {observer,inject} from "mobx-react";
import {ItemImage} from "./ItemImage";
import ProductColorCode from "../asset/ColorCode.json";

const titlePink=c.ColorSchema.titlePink.color;
const titleBlue=c.ColorSchema.titleBlue.color;
const tdBlue=c.ColorSchema.tdBlue.color;
const headerBlue=c.ColorSchema.headerBlue.color;



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


const Wrapper=styled.div`
width:80%`;


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



  @inject('store')
  @observer
  class ProductPriceList extends Component{

  constructor(props){
    super(props);
    }


  componentDidMount(){}


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
            case 'refNo':
              output = "W-"+code+"-"+color;
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
              <ItemImage 
              width='100px'
              height='100px'
              productID={code}
              color={color}
              index={1}
               /> 
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



/*
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
*/


  render(){
     var device = this.props.device;
     return(
    <Wrapper>
    <c.ColPureDiv>
    <Table>
    <tr><td
    colspan={totalRowSpan[device]}
    style={{
      'background-color':'rgb(240,160,143)',
      'text-align': 'center'

    }}
    >ml creation
    </td></tr>
    <tr><td
    colspan={totalRowSpan[device]}
    style={{'background-color':'rgb(190,220,231)'}}

    >ml creation
    </td></tr>
    {this.renderTitle(device)}
    {this.renderTableData(device,data)}
    <tr><td
    colspan={totalRowSpan[device]}
    style={{
      'background-color':'rgb(245,204,192)',
      'text-align': 'center'

    }}

    >ml creation
    </td></tr>
    </Table>

    </c.ColPureDiv>
    </Wrapper>
  )
  }


  }



  export default ProductPriceList;
