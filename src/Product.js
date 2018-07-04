import React,{Component} from 'react';
import styled from "styled-components";
import ImageSlider from './ImageSlider';


let himProductIDArray=[[1,2,3,4,5],[6,7,8,9,10]];
let herProductIDArray=[[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]];


const StyledProductBox=styled.div`
  width:200px;
  height:200px;
  border:1px solid red;
  border-radius:1px;
  margin:10px;
`;

const ProductList=({className,children,list})=>(
  <div className={className}>
{list.map((id,i)=>

    <StyledProductBox>
      {id}
    </StyledProductBox>


)}




</div>
);

const StyledProductList=styled(ProductList)`
  display:flex;
  flex:1;
  flex-direction:row;
  flex-wrap:nowrap;
  background-color:grey;
  justify-content:space-around;
  margin:10px;
 `;



class Product extends Component{

  constructor(props){
    super(props);

  };

  renderProduct(){
    if(this.props.gender=='him'){

      return (
        <div>
        <StyledProductList list={himProductIDArray[0]}/>
        <StyledProductList list={himProductIDArray[1]}/>
        </div>
      )

    }
    else{

      return (
        <div>
        <StyledProductList list={herProductIDArray[0]}/>
        <StyledProductList list={herProductIDArray[1]}/>
        <StyledProductList list={herProductIDArray[2]}/>

        </div>
      )

    }

    }

  render(){
    return(
      <div style={{'background-color':'black'}}>
      <ImageSlider gender={this.props.gender}/>
        {this.renderProduct()}

        </div>
    );
  }

}


export default Product;
