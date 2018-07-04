import React, { Component } from 'react';
import styled from "styled-components";
import { device } from "./device";
import mainImage from './image/mainImage.jpg';
import ImageSlider from './ImageSlider';


let imgArray=[mainImage,mainImage,mainImage];

const Page=styled.div`
flex:1;
display:flex;
flex-direction:column;
text-align: center;
border:1px solid grey;
border-radius:1px;

  @media ${device.tablet}{
   }

  @media ${device.laptop}{
   }
  @media ${device.desktop}{
   }
`;

 


const Section=styled.div`
display:flex;
flex:1;
flex-direction:${(props)=>props.reverse ? 'column-reverse' : 'column'};
width:100%;

@media ${device.tablet}{
  flex-direction:row;
  }
`;



const ImgCard=({className,children,index,type,onClick=f=>f})=>(
  <div className={className}>
     <div>{index}</div>
    {children}
  </div>
 );

const StyledImgCard=styled(ImgCard).attrs({
  src:props=>props.src
})`
display:flex;
flex:1;
flex-direction:row;
border:1px solid red;
border-radius:1px;
height:400px;
justify-content:center;

background-image:url(${props=>props.src});
`;

const Card=({className,children,type,onClick=f=>f})=>(
  <div className={className}>
    <div>{type}</div>
    {children}
  </div>
 );

const StyledCard=styled(Card)`
display:flex;
flex:1;
flex-direction:row;
border:1px solid red;
border-radius:1px;
height:400px;
justify-content:center;
 `;

class Home extends Component {




render(){
  return(
    <Page>
      <ImageSlider page="main"/>
      <Section>
      <StyledImgCard src={imgArray[0]}/>
      <StyledCard type='him'/>
      </Section>
      <Section reverse>
      <StyledCard type='her'/>
      <StyledImgCard src={imgArray[1]}/>
      </Section>

    </Page>
  )
}

}


export default Home;
