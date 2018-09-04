import React from 'react';
import {HowToUseText} from './HowToUseText';
import styled from "styled-components";
import * as c from "./Css";
 

export const LeftLayoutA=({
    productID,
    color,
    textData={}
})=>{
    var url=c.path+productID+"/"+color+"/1.png";

    return( 
        <c.OutterWrapper left>
            <c.Image_A
                top='50px'
                left='-30px'
                img={url}
              />
            
            <c.TextDiv
                right='5%'
                left='20%'
                >
            <HowToUseText/>
            <HowToUseText/>

            </c.TextDiv>            
          </c.OutterWrapper>
    );

}