import React from 'react';
import {HowToUseText} from './HowToUseText';
import styled from "styled-components";
import * as c from "./Css";
 

export const RightLayoutA=({
    productID,
    color,
    textData={}
})=>{
    var url=c.path+productID+"/"+color+"/2.png";

    return( 
        <c.OutterWrapper right>
            <c.Image_A
            top={c.topPosition}
                right='0px'
                img={url}
              />
            
            <c.TextDiv
                right='10%'
                left='5%'
                >
            <HowToUseText
            type='charge'
            productID={productID}
            />

            </c.TextDiv>            
          </c.OutterWrapper>
    );

}