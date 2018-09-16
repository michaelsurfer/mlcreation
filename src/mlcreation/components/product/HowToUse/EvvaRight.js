import React from 'react';
import {HowToUseText} from './HowToUseText';
import * as c from "./Css";
 

export const EvvaRight=({
    productID,
    color,
    textData={}
})=>{
    var url=c.path+productID+"/"+color+"/s.png";

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
            type='clean'
            productID={productID}
            />

            </c.TextDiv>            
          </c.OutterWrapper>
    );

}