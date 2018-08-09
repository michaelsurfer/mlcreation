import React, { Component } from 'react';
import styled from "styled-components";
import { device } from "../common/device";
import ImageSlider from '../components/ImageSlider';
import himSubImg from '../image/himSubImg.png';
import herSubImg from '../image/herSubImg.png';
import {SloganBanner} from '../components/SloganBanner';

const StyledLink = styled.a`
text-decoration: none;

  color:grey;

`;

const Page=styled.div`
flex:1;
display:flex;
flex-direction:column;
text-align: center;
border:1px solid grey;
border-radius:0px;

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

width:100%;
height:180px;
justify-content:center;
background-image:url(${props=>props.src});
background-repeat:no-repeat;
background-size: contain;
background-position:${props=>props.him ? 'left bottom':'right bottom'};

@media ${device.tablet}{
  height:280px;

 }

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
height:auto;
justify-content:center;
align-items:center;
text-align:center;
 `;

class Home extends Component {




render(){
  return(
    <Page>
      <ImageSlider gender="main"/>

      <StyledLink href="/her">
      <Section>
      <StyledCard her>
      <Title her big>For Her</Title>
      <Title her>Woman is beauity....</Title>
      <Title her>Find your pleasure of.......</Title>
      </StyledCard>
      <StyledImgCard src={herSubImg}/>
      </Section>
      </StyledLink>

      <StyledLink href="/him">

      <Section reverse>
      <StyledImgCard src={himSubImg} him/>
      <StyledCard him>
        <Title him big>For Him</Title>
        <Title him>Man is power....</Title>
        <Title him>Disciver the power of.......</Title>
      </StyledCard>
      </Section>
      </StyledLink>


      <SloganBanner gender='m'/>
    </Page>
  )
}

}


export default Home;
