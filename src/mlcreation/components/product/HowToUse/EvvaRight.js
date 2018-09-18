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
        <c.OutterWrapper left>
            <c.Image_A
            top={c.topPosition}
            left='0px'
                img={url}
              />
            
            <c.TextDiv
                left='15%'
                >
            <HowToUseText
            type='clean'
            productID={productID}
            />

            </c.TextDiv>            
          </c.OutterWrapper>
    );

}