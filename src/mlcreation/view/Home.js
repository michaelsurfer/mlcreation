import React, { Component } from 'react';
import styled from "styled-components";
import { device } from "../common/device";
import ImageSlider from '../components/ImageSlider';
import himSubImg from '../image/himSubImg.png';
import herSubImg from '../image/herSubImg.png';
import littleRedLogo from '../image/littleRedLogo.png';
import littleBlackLogo from '../image/littleBlackLogo.png';
import allPackagesImg from '../image/allPackages.png';


import {SloganBanner} from '../components/SloganBanner';

const AllPackageImage=styled.img`
display: block;
width: 100%;
height: auto;
`;
const AllPackageBanner=styled.div`
width:100%;
height:500px;
background-image:url(${allPackagesImg});
background-repeat:no-repeat;
background-size: cover;
background-position:bottom;
`;
const StyledLink = styled.a`
text-decoration: none;
color:grey;
`;
const SmallLogo=styled.img`
padding:30px;
`;
const Page=styled.div`
flex:1;
display:flex;
flex-direction:column;
text-align: center;
border:1px solid grey;
border-radius:0px;

`;


const Title=styled.label`
color:${(props)=>props.him ? '#fff' : '#000'}
font-size:${(props)=>props.big ? '35px' : '25px'}
font-family:"Lucida Sans Unicode", "Lucida Grande", sans-serif;	

`;
const Space=styled.div`
display:block;
height:40px;
`;
const Section=styled.div`
display:flex;
flex:1;
flex-direction:${(props)=>props.reverse ? 'column-reverse' : 'column'};
width:100%;
flex-direction:row;

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
height:390px;
justify-content:center;
background-image:url(${props=>props.src});
background-repeat:no-repeat;
background-size: contain;
background-position:${props=>props.him ? 'left bottom':'right bottom'};


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
background-color:${props=>props.him ? 'rgb(20,24,23)':'rgb(216,183,171)'};
height:390px;
justify-content:center;
align-items:center;
text-align:center;
padding:0px;
 `;

class Home extends Component {




render(){
  return(
    <Page>
      <ImageSlider gender="main"/>

      <StyledLink href="/productList/g">
      <Section>
      <StyledCard her>
      <Title her big>For Her</Title>
      <Space/>

      <Title her>Woman is beauity....</Title>
      <Title her>Find your pleasure of.......</Title>
      <SmallLogo src={littleRedLogo}/>
      </StyledCard>
      <StyledImgCard src={herSubImg}/>
      </Section>
      </StyledLink>

      <StyledLink href="/productList/m">

      <Section reverse>
      <StyledImgCard src={himSubImg} him/>
      <StyledCard him>
        <Title him big>For Him</Title>
        <Space/>
        <Title him>Man is power....</Title>
        <Title him>Disciver the power of.......</Title>
        <SmallLogo src={littleBlackLogo}/>

      </StyledCard>
      </Section>
      </StyledLink>


      <SloganBanner gender='g'/>
      <AllPackageImage
        src={allPackagesImg}
      />
    </Page>
  )
}

}


export default Home;
