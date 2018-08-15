import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import * as c from '../common/Css2.js';
import itemSmall from '../image/itemSmall.png';
import data from "../asset/ProductList.json";


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
const InnerDiv=styled(c.ColPureDiv)`
align-items:flex-start;
width:90%;
margin:10px;
`;

const LeftBox=c.ColCenterDiv.extend`
flex:2;
border:0px solid black;
width:90%;
margin:10px;

`;

const RightBox=c.ColPureDiv.extend`
flex:5;
border:0px solid black;
width:90%;
margin:10px;

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
margin-bottom:10px;
margin-left:10px;
`;

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


  var selectColor=[];

  colorArray.map((item,i)=>{
    //var color = c.ProductColorCode[item].color;
    //console.log(color);
    selectColor.push (<ColorBox color={item}/>);
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

<SmallImageBox image={itemSmall}/>
<SmallImageBox image={itemSmall}/>
<SmallImageBox image={itemSmall}/>
<SmallImageBox image={itemSmall}/>
<SmallImageBox image={itemSmall}/>



</c.AutoFullRow>



<c.AutoFullCol>
 <Desc>SELECT COLOR</Desc>
<c.RowPureDiv>{selectColor}</c.RowPureDiv>
 </c.AutoFullCol>

<c.AutoFullCol>


<Button
  onClick={()=>callback()}
>ADD TO SHOPPING LIST</Button>
<SplitDiv bottom>
<Desc>Shipping & Return</Desc>
<Desc>See Comments</Desc>
</SplitDiv>

<Desc >Applicable to the adults aged 18 and above only</Desc>

</c.AutoFullCol>
</LeftBox>

<RightBox>
IMAGE
</RightBox>
</Wrapper>



);


}
