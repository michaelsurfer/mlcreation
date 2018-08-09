import React,{Component} from 'react';
import styled from "styled-components";
import ImageSlider from '../components/ImageSlider';
import { device } from "../common/device";
import {SloganBanner} from '../components/SloganBanner';
import {ProductDetail} from '../components/ProductDetail';
import {Description} from '../components/ProductDesc';

import {Header} from '../components/ProductHeader';
import * as c from '../common/Css2.js';

import itemImg from '../image/item.png';


export const Product=({gender})=>{
  return(
    <c.ColPureDiv>
    <Header
    title="title"
    description1="description1"
    description2="description2"
    image="image url"
    gender={gender}
    />
    <Description/>
    <ProductDetail/>
    <SloganBanner gender={gender}/>

    </c.ColPureDiv>
  );
}
