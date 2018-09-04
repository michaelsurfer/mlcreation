
import React, { Component } from 'react';
import styled from "styled-components";


const Wrapper=styled.div`
flex-direction:column;
justify-content:center;

 `;
const TitleDiv=styled.div`
justify-content:center;
align-text:center;
width:100%;
align-items:center;
display:flex;
`;
const Title=styled.label`
font-size:17px;
font-family:Arial;
font-weight:bold;
margin-top:10px;
margin-bottom:10px;
align-text:center;
`;
const DescUL=styled.ul`
font-size:17pt;
margin:0px;
left:0px;
margin-top:10px;
margin-bottom:10px;
`;
const DescLI=styled.li`
list-style-type:${(props)=>props.type};
margin-top:10px;
margin-bottom:10px;
 `;
const Desc=styled.label` 
font-size:100%;
font-family:Arial;
white-space:pre-wrap;
line-height: 30px;
`;

const DescDiv=styled.div`
border:1px solid green;
padding-left:0px;
`;
var data={
ITS:{

    charge:{
        title:"How to Charge It?",
        text:`
        A.  Open the cover of the recharging hole.
        B.  Gently insert the USB charger into the recharging hole (see picture).
        C.  While under charge, the light indicator will be flashing.
        D.  Once fully recharged, the light indication will stay on.
        *    Please fully charge it before first use.
        *    2.5 hours of charging = 2 hours of usage
        *    For keeping the battery life, each 3 month charge it once
        `
    },
    
    clean:{
        title:"How to Clean It?",
        text:`
A.  Open the cover of the recharging hole.
B.  Gently insert the USB charger into the recharging hole (see picture).
C.  While under charge, the light indicator will be flashing.
D.  Once fully recharged, the light indication will stay on.
*    Please fully charge it before first use.
*    2.5 hours of charging = 2 hours of usage
*    For keeping the battery life, each 3 month charge it once even you don’t use it.
        `,
        }
 
    }
}


export const HowToUseText=({
    productID='ITS',type='clean'
})=>{
    /*
    var result=[];
 
    for (var item in json){
        var tempResult=[];

        if(json[item].title){
            tempResult.push(
             <Title>{json[item].title}</Title>
             )
        }
 
        var descArray=json[item].desc;
         descArray.map((text,i)=>{
            tempResult.push(
            <DescLI type='upper-alpha'>      
            <Desc>{text}</Desc>
            </DescLI>
            )
        });
        result.push(<DescUL>{tempResult}</DescUL>);

    */

     

    return(
        <Wrapper>
         <TitleDiv>   
         <Title>
             {data[productID][type].title}
        </Title>   
        </TitleDiv>
        <DescDiv>
        <Desc>
        {data[productID][type].text}
        </Desc>
        </DescDiv>
         </Wrapper>
     );


}