import React, { Component } from 'react';
import styled from "styled-components";
import { device } from "./device";
import mainImage from './image/mainImage.jpg';
import ImageSlider from './ImageSlider';
import himSubImg from './image/himSubImg.png';
import herSubImg from './image/herSubImg.png';
import SloganBanner from './SloganBanner';

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


const Title=styled.p`
color:${(props)=>props.him ? '#fff' : '#000'}
font-size:${(props)=>props.big ? 'x-large' : 'small'}

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

height:400px;
justify-content:center;
background-image:url(${props=>props.src});
background-repeat:no-repeat;
background-size: cover;
background-position: center;
`;

const Card=({className,children,onClick=f=>f})=>(
  <div className={className}>
     {children}
  </div>
 );

const StyledCard=styled(Card)`
display:flex;
flex:1;
flex-direction:column;
background-color:${props=>props.him ? '#000':'rgb(251,160,132)'};
height:400px;
justify-content:center;
align-items:center;
text-align:center;
 `;

class Home extends Component {




render(){
  return(
    <Page>
      <ImageSlider gender="main"/>

      <Section>
      <StyledCard her>
      <Title her big>For Her</Title>
      <Title her>Woman is beauity....</Title>
      <Title her>Find your pleasure of.......</Title>
      </StyledCard>
      <StyledImgCard src={himSubImg}/>
      </Section>

      <Section reverse>
      <StyledImgCard src={herSubImg}/>
      <StyledCard him>
        <Title him big>For Him</Title>
        <Title him>Man is power....</Title>
        <Title him>Disciver the power of.......</Title>
      </StyledCard>
      </Section>


      <SloganBanner gender='him'/>
    </Page>
  )
}

}


export default Home;
