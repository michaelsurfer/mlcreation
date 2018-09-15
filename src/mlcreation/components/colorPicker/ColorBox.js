import styled from "styled-components";
import colorJson from "../../asset/ColorCode.json";
import React from 'react';
import {imagePath} from '../../common/config.js';


const OutterBox=styled.div`
display:flex;
justify-content:center;
align-items:center;
width:30px;
height:30px;
margin:2px;
border-bottom:${(props)=>props.border}
 
`;

const Box=styled.div`
width:${(props)=>props.size};
height:${(props)=>props.size};
background-color:${(props)=>props.rgbValue};
`;

const ImgBox=styled.img`
width:${(props)=>props.size};
height:${(props)=>props.size};
`;


export const ColorBox=({
    productID,
    colorCode,
    callbackF,
    selected,
    size='27px'
})=>{
    var json = colorJson[colorCode];
    var border='0px solid grey';
    
    if(selected){
        console.log("sected");
        border='1px solid grey'}
        console.log(colorCode);
     return(
        <OutterBox border={border}>

        {(!json.rgbValue)?(
            <ImgBox src={imagePath+"colorbox/"+productID+"/"+colorCode+".png"}
            id={colorCode}
            onClick={callbackF}
            size={size}
            />
        ):(
            <Box
            id={colorCode}
            onClick={callbackF}
            size={size}
            rgbValue={json.rgbValue}
            />
        )}
         </OutterBox>
    );
}