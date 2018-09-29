import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import * as c from '../../common/Css2.js';
import data from "../../asset/ProductList.json";
import {ItemImage} from "../../components/ItemImage";
import {NavLink} from "react-router-dom";
import ColorPicker from "../colorPicker/ColorPicker";
import {HowToUseView} from "./HowToUseView";
import {text} from "./HowToUse/Css"; 
import imageScale from "../../asset/ProductImgScale.json";
import rohs from '../../image/rohs.png';


const OutterWrapper=styled.div`
display:flex;
flex-direction:column;
`;
const Rohs=styled.img`
margin-top:30px;
margin-bottom:10px;
`

const Wrapper=c.RowPureDiv.extend`
background-color:${(props)=>props.color};
justify-content:space-between;
height:auto;
padding:1px;
`;
const Button=styled.button`
background-color:black;
color:white;
width:100%;
height:40px;
margin-top:20px;
font-size:14pt;
font-family: 'Bai Jamjuree', sans-serif;
letter-spacing: 3px;

`;
const SplitDiv=styled.div`
display:flex;
justify-content:space-between;
width:65%;
width:${(props)=>props.width}
margin-top:10px;
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
margin-top:5px;
border-bottom:${(props)=>props.bottom ?  '1px solid black':'0px'};
text-decoration:${(props)=>props.underline ?  'underline':'none'};
font-family: "Times New Roman", Times, serif;
white-space:pre-wrap;
line-height:20px;
text-overflow:ellipsis;
margin:5px;
`;

const SelectColorText=styled.label`
font-size:13.5pt;
font-family: "Microsoft JhengHei UI";
margin-top:30px;
margin-bottom:8px;
margin-left:0px;
`;

const Link=styled(NavLink)`
font-size:16pt;
font-family: "Arial Unicode MS";
text-decoration:none;
color:black;
`;

const SelectionCell=styled.div`
width:93px;
height:108px;
margin-left:0px;
margin-right:5px;
`

const LeftBox=styled.div`
display:flex;
flex-direction:column;
width:70%;
height:auto;
margin-left:66px;
border:0px solid red;
`

const InnerLeftBox=styled.div`
width:600px;
border:0px solid blue;
height:auto;
`

const RightBox=c.ColPureDiv.extend`
border:0px solid black;
width:100%;
margin:10px;
justify-content:center;
align-items:center;
border:0px solid blue;
 `;

const How2UseBox=styled.div`
width:95px;
height:110px;
display:flex;
justify-content:center;
align-items:center;
text-align: center;
font-size:15pt;
font-family: "Arial Unicode MS";
background-color:${(props)=>c.ThemeColor[props.gender].how2Use};
color:${(props)=>(props.gender=='g')?'black':'black'};
`;

const HowBigIsIt=styled(How2UseBox)`
background-color:black;
color:white;
`;
 

const Description=({productID})=>{
  return(
    <Desc>
    {text[productID].desc}
    </Desc>
  ); 
}

const Dimension=({json})=>{

  var result=[]
  for(var item in json){
    var title = item
    if(title=='Bweight'){title="body weight"}
    if(title ="size"){title="size of"}
    result.push(
      <Desc>
        {item}:{json[item]}
      </Desc>
    )
  }

  return(
    <SplitDiv width='65%'>
      {result}
    </SplitDiv>
  )
}

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

  var dimension=data[productID].dimension
 
  var remark=this.props.remark;
  var colorArray=this.props.colorArray;
  var callback = this.props.callback;
  
return(
<OutterWrapper>
<Wrapper
color={c.ThemeColor[gender].product}
>
<LeftBox>
  <c.EmptySpace height='32px'/> 
  <Desc bold>USD {price}</Desc>
  <c.EmptySpace height='32px'/>
  <Desc underline bold>DESCRIPTION</Desc>
  <br/>
  <Description productID={productID}/>

  <InnerLeftBox>
  <Dimension json={dimension}/>
  
  <Rohs src={rohs}/>
<c.AutoFullRow>
<SelectionCell>
<ItemImage 
  width='95px'
  height='110px'
  productID={productID}
  color={this.state.selectedColor}
  index={1}
  onClickCallBAckF={()=>this.setState({selectedImage:'1'})}
  size='contain'
  backgroundcolor={gender=='m'?'white':'rgb(238,239,243)'}
/>
</SelectionCell>
<SelectionCell>
<ItemImage 
  width='95px'
  height='110px'
  productID={productID}
  color={this.state.selectedColor}
  index={2}
  onClickCallBAckF={()=>this.setState({selectedImage:'2'})}
  size='contain'
  backgroundcolor={gender=='m'?'white':'rgb(238,239,243)'}
/>
</SelectionCell>
<SelectionCell>
<ItemImage 
  width='95px'
  height='110px'
  productID={productID}
  color={this.state.selectedColor}
  index={3}
  onClickCallBAckF={()=>this.setState({selectedImage:'3'})}
  size='contain'
  backgroundcolor={gender=='m'?'white':'rgb(238,239,243)'}
/>
</SelectionCell>

{(data[productID].numOfImage==4) &&
<SelectionCell>
<ItemImage 
  width='95px'
  height='110px'
  productID={productID}
  color={this.state.selectedColor}
  index={4}
  onClickCallBAckF={()=>this.setState({selectedImage:'4'})}
  size='contain'
  backgroundcolor={gender=='m'?'white':'rgb(238,239,243)'}
/>
</SelectionCell>
}
<SelectionCell>
<HowBigIsIt
gender={gender}
onClick={()=>this.setState({selectedImage:'m'})}

 >HOW BIG IT IS?</HowBigIsIt>
</SelectionCell>

<SelectionCell>
<a href='#how2use' style={{'text-decoration':'none'}}>
<How2UseBox
gender={gender}
>
 HOW TO USE IT?

</How2UseBox>
</a>
</SelectionCell>
</c.AutoFullRow>

<c.EmptySpace height='10px'/>

<SelectColorText>SELECT COLOR</SelectColorText>
<c.RowPureDiv>
<ColorPicker
  colorArray={colorArray}
  selectedColor={this.state.selectedColor}
  productID={productID}

  pickColorCallbackF={this.pickColorCallbackF}
/>

</c.RowPureDiv>
<Button
  onClick={()=>callback(this.state.selectedColor)}>
  ADD TO SHOPPING LIST
  </Button>
<SplitDiv width='100%'>
<Link to='/policy'>
  Shipping & Return
  </Link>
<Link to={"/comment/"+productID} >See Comments</Link>
</SplitDiv>

<c.Line/>
<ShippingReturnText >Applicable to the adults aged 18 and above only</ShippingReturnText>
<c.EmptySpace height='5px'/>


</InnerLeftBox>
</LeftBox>







<RightBox>
<ItemImage 
  width={imageScale[productID]}
  height={imageScale[productID]}
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
