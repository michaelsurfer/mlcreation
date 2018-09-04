import styled from "styled-components";
import colorJson from "../../asset/ColorCode.json";
import React from 'react';
import {imagePath} from '../../common/config.js';


const OutterBox=styled.div`
display:flex;
justify-content:center;
align-items:center;
width:20px;
height:20px;
margin:2px;
border-bottom:${(props)=>props.border}
 
`;

const Box=styled.div`
width:10px;
height:10px;
background-color:${(props)=>props.rgbValue};
`;

const ImgBox=styled.img`
width:10px;
height:10px;
`;


export const ColorBox=({
    colorCode,
    callbackF,
    selected
})=>{
    var json = colorJson[colorCode];
    console.log(json.rgbValue);
    var border='0px solid grey';
    if(selected){
        console.log("sected");
        border='1px solid grey'}
     return(
        <OutterBox border={border}>

        {(json.rgbValue == "IMG")?(
            <ImgBox src={imagePath+"colorbox/"+colorCode+".png"}
            id={colorCode}
            onClick={callbackF}
            />
        ):(
            <Box
            id={colorCode}
            onClick={callbackF}
            rgbValue={json.rgbValue}
            />
        )}
     
        </OutterBox>
    );
}