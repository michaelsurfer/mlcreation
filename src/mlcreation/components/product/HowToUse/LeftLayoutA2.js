import React from 'react';
import {HowToUseText} from './HowToUseText';
import styled from "styled-components";
import * as c from "./Css";
//import text from "./HowToUseText.json";

var text ={
    ITS:`
    AI.  Open the cover of the recharging hole.
    B.  Gently insert the USB charger into the recharging hole (see picture).
    C.  While under charge, the light indicator will be flashing.
    D.  Once fully recharged, the light indication will stay on.
    *    Please fully charge it before first use.
    *    2.5 hours of charging = 2 hours of usage
    *    For keeping the battery life, each 3 month charge it once even you don’t use it.
    `
    }
export const LeftLayoutA=({
    productID,
    color,
    textData={}
})=>{
    //var url=c.path+"/products/"+productID+"/"+color+"/1.jpg";
    var url=c.path+productID+"/"+color+"/1.png";
    return(
        <c.OutterWrapper left>
            <c.Image_A
                top='500px'
                left='1px'
                img={url}

            />
            
            <c.TextDiv
                left='0%'
            >
            {text.ITS}
             </c.TextDiv>            
          </c.OutterWrapper>
    );

}