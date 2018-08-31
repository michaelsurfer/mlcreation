import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import * as c from '../common/Css2.js';
import itemSmall from '../image/itemSmall.png';
import data from "../asset/ProductList.json";
import {ItemImage} from "../components/ItemImage";
import {NavLink} from "react-router-dom";


const Wrapper=c.RowPureDiv.extend`
background-color:rgb(239,238,242);
`;
const Button=styled.button`
background-color:black;
color:white;
width:100%;
`;
const SplitDiv=styled.div`
display:flex;
justify-content:space-between;
width:100%;
border-bottom:${(props)=>props.bottom ?  '1px solid grey':'0px'};

`;
const Desc=styled.label`
color:black;
font-size:small;
border-bottom:${(props)=>props.bottom ?  '1px solid black':'0px'};
text-decoration:${(props)=>props.underline ?  'underline':'none'};
padding:5px;
`;

const Link=styled(NavLink)`
font-size:small;
`;

const LeftBox=c.ColCenterDiv.extend`
flex:2;
border:0px solid black;
width:90%;
margin:10px;

`;

const RightBox=c.ColPureDiv.extend`
flex:4;
border:0px solid black;
width:90%;
margin:10px;
justify-content:center;
align-items:center;
border:0px solid red;
`;

const EmptyImageBox=styled.div`
display:flex;
width:100px;
height:100px;
background-color:white;
margin:2px;
`;

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
const ColorBox=styled.div`
width:20px;
height:20px;
background-color:${(props)=> c.ProductColorCode[props.color].color};
`;

const OutterColorBox=styled.div`
width:20px;
height:30px;
margin-bottom:10px;
margin-left:10px;
display:flex;
justify-content:center;
align-items:center;
border-bottom:${(props)=>props.selected ? '1px solid grey':'0px'}
`;
/*
export const Description=({
  productID=0,
  price="$$$",
  description1="description1",
  description2="description2",
  length="length",
  diameter="diameter",
  weight="weight",
  remark="remark",
  colorArray=['red','black','blue'],
  callback
})=>{
*/
class ProductDesc extends Component{
  constructor(props){
    super(props);
    this.state={
      //default selected color
      selectedColor:this.props.colorArray[0],
      selectedImage:'1'
    }
 
  }


render(){
  var productID=this.props.productID;
  var price=this.props.price;
  var description1=this.props.description1;
  var description2=this.props.description2;
  var length=this.props.length;
  var diameter=this.props.diameter;
  var weight=this.props.weight;
  var remark=this.props.remark;
  var colorArray=this.props.colorArray;
  var callback = this.props.callback;
  var selectColor=[];

  colorArray.map((item,i)=>{
    //var color = c.ProductColorCode[item].color;
    //console.log(color);
    if(this.state.selectedColor == item)
    {
      selectColor.push (
        <OutterColorBox selected
        onClick={()=>this.setState({selectedColor:item})}
        >
        <ColorBox color={item}/>
        </OutterColorBox>
      );
    }else{
      selectColor.push (
        <OutterColorBox
        onClick={()=>this.setState({selectedColor:item})}

        >
        <ColorBox color={item}/>
        </OutterColorBox>
      );

    }
     }
  );


return(
<Wrapper>

<LeftBox>
<c.AutoFullCol>

<Desc>USD {price}</Desc>
<Desc underline>DESCRIPTION</Desc>
<Desc >{description1}</Desc>
<Desc >{description2}</Desc>

<SplitDiv>
  <Desc>Length {length}</Desc>
  <Desc>Diameter {diameter}</Desc>
  <Desc>Weight {weight}</Desc>
  </SplitDiv>

<Desc>{remark}</Desc>

</c.AutoFullCol>



<c.AutoFullRow>

<ItemImage 
  width='100px'
  height='100px'
  productID={productID}
  color={this.state.selectedColor}
  index={1}
  onClickCallBAckF={()=>this.setState({selectedImage:'1'})}
/>


<ItemImage 
  width='100px'
  height='100px'
  productID={productID}
  color={this.state.selectedColor}
  index={2}
  onClickCallBAckF={()=>this.setState({selectedImage:'2'})}
/>
<EmptyImageBox/>

<SmallImageBox image={itemSmall}/>

<SmallImageBox image={itemSmall}/>



</c.AutoFullRow>



<c.AutoFullCol>
 <Desc>SELECT COLOR</Desc>
<c.RowPureDiv>{selectColor}</c.RowPureDiv>
 </c.AutoFullCol>

<c.AutoFullCol>

<Button
  onClick={()=>callback(this.state.selectedColor)}
>ADD TO SHOPPING LIST</Button>
<SplitDiv bottom>
<Desc>Shipping & Return</Desc>
<Link to={"/comment/"+productID} >See Comments</Link>
</SplitDiv>
<Desc >Applicable to the adults aged 18 and above only</Desc>
</c.AutoFullCol>
</LeftBox>
<RightBox>
<ItemImage 
  width='400px'
  height='400px'
  productID={productID}
  color={this.state.selectedColor}
  index={this.state.selectedImage}
 />
</RightBox>
</Wrapper>

);
}

}

export default ProductDesc;
