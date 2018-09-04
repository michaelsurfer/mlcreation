import React from 'react';
import {HowToUseText} from './HowToUseText';
import styled from "styled-components";
import * as c from "./Css";
 

export const RightLayoutB=({
    productID,
    color,
    textData={}
})=>{
    var url=c.path+productID+"/"+color+"/2.png";
    var url2=c.path+productID+"/"+color+"/3.png";

    return( 
        <c.OutterWrapper right>
            <c.Image_A
                top='100px'
                right='0px'
                img={url}
              />

            <c.Image_A
                top='300px'
                right='0px'
                img={url2}
              /> 
            
            <c.TextDiv
                right='10%'
                left='5%'
                >
            <HowToUseText/>
            <HowToUseText/>

            </c.TextDiv>            
          </c.OutterWrapper>
    );

}