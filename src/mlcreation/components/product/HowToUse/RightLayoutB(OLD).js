import React from 'react';
import {HowToUse} from './HowToUse';
import styled from "styled-components";
import * as c from "./Css";
import SB from '../../image/SB.png';
import {OverlayerMark} from './OverlayerMark';

export const RightLayoutB=({
    productID,
    color,
    textData={}
})=>{

    return( 
        <c.OutterWrapper right>
            <c.Image_A
                top='50px'
                right='10px'
                img={SB}
              />
              <c.Image_A
                top='50px'
                right='40px'
                img={SB}
              >
            <OverlayerMark
                top='100px'
                left='40px'
                height='100px'
                textTop='200px'
                textLeft='40px'
            />  
            </c.Image_A>
            <c.TextDiv
                right='10px'
                >
            <HowToUse/>
            </c.TextDiv>            
          </c.OutterWrapper>
    );

}