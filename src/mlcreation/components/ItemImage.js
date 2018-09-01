import React, { Component} from 'react';
import styled from "styled-components";
import {imagePath} from '../common/config.js';


const Image=styled.div`
width:${(props)=>props.width};
height:${(props)=>props.height};
background-image:url(${(props)=>props.img});
background-repeat:no-repeat;
background-size: ${(props)=>props.size};
background-position: center center;
margin:2px;
overflow-x:hidden;
overflow-y:hidden;
border:0px solid;
background-color:white;
`;

export const ItemImage = ({
    width,height,productID,color,
    index,onClickCallBAckF,size
})=>{
    var url=imagePath+"/products/"+productID+"/"+color+"/"+index+".jpg";
    //var url = imagePath+"/products/"+productID+"/"+index+"/"+color+".jpg";
return(
    <Image
        width={width}
        height={height}
        img={url}
        onClick={onClickCallBAckF}
        size={size}
    />
);
};

