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
    var result=[];
    if(selected){
        console.log("sected");
        border='1px solid grey'
        }
        console.log(json.rgbValue);

    if(json.rgbValue=="image"){
 
        result.push(
            <ImgBox src={imagePath+"colorbox/"+productID+"/"+colorCode+".png"}
            id={colorCode}
            onClick={callbackF}
            size={size}
            />
        );
    }else if(json.rgbValue=="various"){
        var _json=json['variant'];
         if(_json[productID].rgbValue=="image"){
            //use Image
            result.push(
                <ImgBox src={imagePath+"colorbox/"+productID+"/"+colorCode+".png"}
                id={colorCode}
                onClick={callbackF}
                size={size}
                />
            );
        }else{
            var rgbValue=_json[productID].rgbValue;
            result.push(
                <Box
                id={colorCode}
                onClick={callbackF}
                size={size}
                rgbValue={rgbValue}
                />
                );

        }

        
    }else{
        result.push(
            <Box
            id={colorCode}
            onClick={callbackF}
            size={size}
            rgbValue={json.rgbValue}
            />
        );
    }    

     return(
        <OutterBox border={border}>
        {result}
         </OutterBox>
    );
}