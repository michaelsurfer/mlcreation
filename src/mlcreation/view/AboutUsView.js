import React, { Component } from 'react';
import styled from "styled-components";
import susanna from '../image/susanna.jpg';
import '../../index.css'

const Wrapper=styled.div`
width:100%;
background-color:rgb(234,221,220);
`;

const HeaderBanner=styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;
background-color:black;
height:430px;
`;
const HeaderTextBox=styled.div`
display:flex;
flex-direction:column;
margin-right:10%;

`;
const HeaderTitle=styled.label`
font-size:48pt;
font-family:"Times New Roman";
font-weight:bold;
color:rgb(202,49,161);
margin-left:20px;
`;
const HeaderDesc=styled.label`
font-size:13pt;
font-family:"Arial";
font-style: italic;
color:white;
`;
const Susanna=styled.div`
height:400px;
width:400px;
background-image:url(${susanna});
background-repeat:no-repeat;
background-size: contain;
border:0px solid white;
margin-right:10%;
`;
const BodyArea=styled.div`
width:100%;
display:flex;
justify-content:center;
`;
const TitleText=styled.label`
font-size:21pt;
font-family:微软雅黑, STXihei;
white-space:pre-wrap;
line-height: 30px;
`;
const DescText=styled.label`
font-size:12pt;
font-family:微软雅黑, STXihei;
white-space:pre-wrap;
line-height: 25px;
`;
const ThanksText=styled.label`
font-size:18pt;
font-family:微软雅黑, STXihei;
white-space:pre-wrap;
line-height: 30px;
`;
const SignatureText=styled.label`
font-size:21pt;
font-family:"Nothing You Could Do";
white-space:pre-wrap;
line-height: 30px;
padding-top:40px;
color:rgb(202,49,161);

`;
const LeftBox=styled.div`
display:flex;
flex-direction:column;
width:50%; 
padding-top:4%;
padding-left:10%;
padding-bottom:5%;
`;
const RightBox=styled.div`
display:flex;
flex-direction:column;
width:50%; 
padding-top:4%;
padding-bottom:5%;
padding-left:5%;

`;
const FounderText=`— Founder of ML Creation`;
const LeftTitle=`We are not creating a Sex Toy Brand only!
We are creating the beauty and style for Sex Life!
`;
const LeftDesc=`
People ask me what is the meaning of ML?  
My Love?
Make Love?                                  

I think they are both right as love create everything.

ML Creation was founded in 2013. 

I deeply believe that a wonderful sex toy should not only bring the 
beautiful feeling for our body, it is also a fashion thing of full aesthetic. 
It should light us up, make us look more beautiful, more sexy. 
We don’t need to feel shy when we buy or use it.

Simple, style, unique, colorful, functionality are my design philosophy.
Simple is the soul of beauty, 
Unique is the depth of simple.
Functionality is the fundamental value of a product.

I was asked by a newspaper reporter how to know a sex toy 
is beautiful and elegant? I told her, it’s very simple, just stand 
in front of the mirror and hold it in front of your chest, then, 
you will find out whether it makes you more beautiful, more 
elegant or make you look worse. You can try out.
A nice & unique dress makes us look better and more personality, so do their items. 
`;
const RightDesc=`
•	Beautiful, elegant, unique and colorful design.
•	All materials are environmentally friendly and safe.
        They are tested and certified under the supervision of international testing laboratories.
•	USB rechargeable and water proof.
•	Very Strong vibration with the lowest noise.
•	Functional and practical with easiest buttons. 
•	The best quality with affordable prices.
•	And we guarantee that if a product fails to work due to defective workmanship or materials,
        we will fully replace it for the purchased item, whether you’re a distributor, retailers or consumer.


`;
const LeftArea=()=>(
    <LeftBox>
        <TitleText>{LeftTitle}</TitleText>
        <DescText>{LeftDesc}</DescText>
    </LeftBox>
);
const RightArea=()=>(
    <RightBox>
        <TitleText>Why you buy ML Creation products?</TitleText>
        <DescText>{RightDesc}</DescText>
        <ThanksText>Thanks for buying ML Creation products. Enjoy them!</ThanksText>
        <SignatureText>Susanna</SignatureText>
    </RightBox>
);
export const AboutUsView=()=>{
return(
    <Wrapper>
        <HeaderBanner>
            <HeaderTextBox> 
            <HeaderTitle>
                Susanna
            </HeaderTitle>
            <HeaderDesc>
                {FounderText}
            </HeaderDesc>
             </HeaderTextBox>
             <Susanna/>

        </HeaderBanner>    
        <BodyArea>
            <LeftArea/>
            <RightArea/>
        </BodyArea>
    </Wrapper>
);
}
