import React from 'react';
import {HowToUseText} from './HowToUseText';
import styled from "styled-components";
import * as c from "./Css";
//import text from "./HowToUseText.json";
const Title=styled.label`
font-size:17px;
font-family:Arial;
font-weight:bold;
margin-top:10px;
margin-bottom:10px;
align-text:center;
`;
const RTextDiv=styled.div`
width:100%;
display:flex;
align-items:center;
border:0px solid red;
z-index:2;
flex-direction:column;
`;

const Desc=styled.label` 
font-size:100%;
font-family:Arial;
white-space:pre-wrap;
line-height: 30px;
`;
const Row=styled.div`
display:flex;
flex-direction:row;
width:100%;
height:260px;
`;
var clean =
    `
•    It’s splashproof.
•    Clean it with antibacterial soap after each use.
•    Do not use alcohol, acetone-based or gasoline-based cleaning products.
    `;

 var tips="It is only applicable to the adults aged 18 and above. Pregnant women or the patients with cardiac pacemaker, diabetes, phlebitis or thrombosis should consult a professional physician before using this product.";
 var disclaimer="Use this product at your own risk. Neither ML Creation nor its retailers will bear any legal liability arising out of the use.";   
    
export const EvvaLower=({
    productID,
    color,
    textData={}
})=>{
    //var url=c.path+"/products/"+productID+"/"+color+"/1.jpg";
    var url=c.path+productID+"/"+color+"/s.png";
    return(
        <Row>
          <c.OutterWrapper left>
  
            
            <RTextDiv>
            <HowToUseText
                title="Important Tips"
                desc={tips}
                center='center'
                type='tips'
            />
            <HowToUseText
                title="Disclaimer"
                desc={disclaimer}
                center='center'
                type='disclaimer'
            />
             </RTextDiv>            
          </c.OutterWrapper>
          </Row>
    );

}