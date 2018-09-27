import React from 'react';
import {HowToUseText} from './HowToUseText';
import * as c from "./Css";
 

export const EvvaLeft=({
    productID,
    color,
 })=>{
    var url=c.path+productID+"/"+color+"/1.png";

    return( 
        <c.OutterWrapper left>
            <c.Image_A
            top={c.topPosition}
                left='-30px'
                img={url}
              />
            
            <c.LTextDiv>
            <HowToUseText
            type='functions'
            productID={productID}
            />
             </c.LTextDiv>            
          </c.OutterWrapper>
    );

}