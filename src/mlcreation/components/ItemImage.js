import React, { Component} from 'react';
import styled from "styled-components";
import {productImagePath} from '../common/config.js';


const Image=styled.div`
width:${(props)=>props.width};
height:${(props)=>props.height};
background-image:url(${(props)=>props.img});
background-repeat:no-repeat;
background-size: ${(props)=>props.size};
background-position: center center;
margin-left:auto;
margin-right:auto;
overflow-x:hidden;
overflow-y:hidden;
border:0px solid;
background-color:${(props)=>props.backgroundcolor};
`;

export const ItemImage = ({
    width,height,productID,color,
    index,onClickCallBAckF,size,
    backgroundcolor,type
})=>{
    var url=productImagePath+productID+"/"+color+"/"+index+".png";
    //var url = imagePath+"/products/"+productID+"/"+index+"/"+color+".jpg";
    if(type=='cover' && productID=='MR' && index=='1'){
        url=productImagePath+productID+"/"+color+"/cover.png";
    }
return(
    <Image
        width={width}
        height={height}
        img={url}
        onClick={onClickCallBAckF}
        size={size}
        backgroundcolor={backgroundcolor}
    />
);
};

