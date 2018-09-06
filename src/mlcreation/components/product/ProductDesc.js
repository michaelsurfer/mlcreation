import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import * as c from '../../common/Css2.js';
import data from "../../asset/ProductList.json";
import {ItemImage} from "../../components/ItemImage";
import {NavLink} from "react-router-dom";
import ColorPicker from "../colorPicker/ColorPicker";
//import {ProductDetail} from "./ProductDetail";
import {HowToUseView} from "./HowToUseView";

const OutterWrapper=styled.div`
display:flex;
flex-direction:column;
`;

const Wrapper=c.RowPureDiv.extend`
background-color:${(props)=>props.color};
justify-content:space-between;
height:600px;
padding:1px;
`;
const Button=styled.button`
background-color:black;
color:white;
width:100%;
height:40px;
margin-top:20px;
font-size:14pt;
font-family: Verdana, Geneva, sans-serif;

`;
const SplitDiv=styled.div`
display:flex;
justify-content:space-between;
width:100%;
border-bottom:${(props)=>props.bottom ?  '1px solid grey':'0px'};
 `;


const ShippingReturnText=styled.label`
font-size:16pt;
margin-top:0px;
margin-below:0px;
font-family:"Arial Unicode MS";
text-decoration:${(props)=>props.underline ?  'underline':'none'};

`;

const Desc=styled.label`
font-weight:${(props)=>props.bold?'bold':''}
color:black;
font-size:16pt;
margin-top:0px;
border-bottom:${(props)=>props.bottom ?  '1px solid black':'0px'};
text-decoration:${(props)=>props.underline ?  'underline':'none'};
font-family: "Times New Roman", Times, serif;
`;

const SelectColorText=styled.label`
font-size:13.5pt;
font-family: "Microsoft JhengHei UI";
margin-top:8px;
margin-bottom:8px;
`;

const Link=styled(NavLink)`
font-size:16pt;
font-family: "Arial Unicode MS";
text-decoration:none;
color:black;
`;

const LeftBox=c.ColCenterDiv.extend`

border:0px solid black;
width:517px;
margin-left:66px;
border:0px solid red;

`;

const RightBox=c.ColPureDiv.extend`
border:0px solid black;
width:100%;
margin:10px;
justify-content:center;
align-items:center;
border:1px solid blue;
 `;

const How2UseBox=styled.div`
width:95px;
height:110px;
background-color:${(props)=>(props.gender=='g')?'black':'rgb(251,159,130)'};
color:${(props)=>(props.gender=='g')?'white':'black'};
display:flex;
justify-content:center;
align-items:center;
margin-left:5px;
margin-right:5px;
text-align: center;
font-size:15pt;
font-family: "Arial Unicode MS";
`;

const HowBigIsIt=styled.extend()

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
/*
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
 */

class ProductDesc extends Component{
  constructor(props){
    super(props);
    this.state={
      //default selected color
      selectedColor:this.props.colorArray[0],
      selectedImage:'1'
    }
    this.pickColorCallbackF=this.pickColorCallbackF.bind(this);

  }
  pickColorCallbackF=(e)=>{
    var selectedColor=e.target.id;
    console.log("pickColorCallbackF :"+selectedColor);

   this.setState({selectedColor:selectedColor});

}

render(){
  var gender=this.props.gender; 
  var productID=this.props.productID;
  var price=this.props.price;
  var description1=this.props.description1;
  var description2=this.props.description2;
  var description3=this.props.description3;

  var length=this.props.length;
  var diameter=this.props.diameter;
  var weight=this.props.weight;
  var remark=this.props.remark;
  var colorArray=this.props.colorArray;
  var callback = this.props.callback;
  var selectColor=[];
/*
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
*/

return(
<OutterWrapper>
<Wrapper
color={c.ThemeColor[gender].product}
>

<LeftBox>
<c.AutoFullCol>
<c.EmptySpace height='32px'/>
<Desc bold>USD {price}</Desc>
<c.EmptySpace height='32px'/>
<Desc underline bold>DESCRIPTION</Desc>
<c.EmptySpace height='32px'/>

<Desc >{description1}</Desc>
<Desc >{description2}</Desc>
<c.EmptySpace height='32px'/>
<Desc >{description3}</Desc>

<SplitDiv>
  <Desc>Length 333mm</Desc>
  <Desc>Diameter {diameter}</Desc>
  <Desc>Weight {weight}</Desc>
</SplitDiv>
<c.EmptySpace height='32px'/>

<Desc>{remark}</Desc>

</c.AutoFullCol>



<c.AutoFullRow>

<ItemImage 
  width='95px'
  height='110px'
  productID={productID}
  color={this.state.selectedColor}
  index={1}
  onClickCallBAckF={()=>this.setState({selectedImage:'1'})}
  size='contain'
/>


<ItemImage 
  width='95px'
  height='110px'
  productID={productID}
  color={this.state.selectedColor}
  index={2}
  onClickCallBAckF={()=>this.setState({selectedImage:'2'})}
  size='contain'
/>

{(data[productID].numOfImage==3) &&

<ItemImage 
  width='95px'
  height='110px'
  productID={productID}
  color={this.state.selectedColor}
  index={3}
  onClickCallBAckF={()=>this.setState({selectedImage:'3'})}
  size='contain'
/>


}
 
<How2UseBox
gender={gender}
 >HOW BIG IT IS?</How2UseBox>
<How2UseBox
gender={gender}
>HOW TO USE IT?</How2UseBox>




</c.AutoFullRow>



<c.AutoFullCol>
 <SelectColorText>SELECT COLOR</SelectColorText>



<c.RowPureDiv>
<ColorPicker
  colorArray={colorArray}
  selectedColor={this.state.selectedColor}
  productID={productID}

  pickColorCallbackF={this.pickColorCallbackF}
/>

</c.RowPureDiv>



 </c.AutoFullCol>

<c.AutoFullCol>

<Button
  onClick={()=>callback(this.state.selectedColor)}
>ADD TO SHOPPING LIST</Button>
<SplitDiv>
<ShippingReturnText>Shipping & Return</ShippingReturnText>
<Link to={"/comment/"+productID} >See Comments</Link>
</SplitDiv>
<c.Line/>
<ShippingReturnText >Applicable to the adults aged 18 and above only</ShippingReturnText>
<c.EmptySpace height='5px'/>


</c.AutoFullCol>
</LeftBox>
<RightBox>
<ItemImage 
  width='100%'
  height='100%'
  productID={productID}
  color={this.state.selectedColor}
  index={this.state.selectedImage}
  size='contain'
  type='cover'
 />
</RightBox>
</Wrapper>
<HowToUseView
    gender={gender}
    productID={productID}
    color={this.state.selectedColor}
    LLayout={data[productID].LLayout}
    RLayout={data[productID].RLayout}
/>
</OutterWrapper>
);
}

}

export default ProductDesc;
