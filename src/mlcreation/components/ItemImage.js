import React, { Component} from 'react';
import styled from "styled-components";
import {imagePath} from '../common/config.js';


const Image=styled.div`
width:${(props)=>props.width};
height:${(props)=>props.height};
background-image:url(${(props)=>props.img});
background-repeat:no-repeat;
background-size: 120%;
background-position: center;
margin:2px;

`;

export const ItemImage = ({
    width,height,productID,color,
    index,onClickCallBAckF
})=>{
    var url=imagePath+productID+"/"+color+"/"+index+".jpg";
return(
    <Image
        width={width}
        height={height}
        img={url}
        onClick={onClickCallBAckF}
    />
);
};

