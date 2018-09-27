import React from 'react';
import {HowToUseText} from './HowToUseText';
import styled from "styled-components";
import * as c from "./Css";
 

export const RightLayoutC=({
    productID,
    color,
    textData={}
})=>{
    var url1=c.path+productID+"/"+color+"/1.png";
    var url2=c.path+productID+"/"+color+"/2.png";

    return( 
        <c.OutterWrapper right>
            <c.Image_A
                top={c.topPosition}
                right='-10px'
                img={url2}
              />
              <c.Image_A
                top={c.topPosition}
                right='80px'
                img={url1}
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