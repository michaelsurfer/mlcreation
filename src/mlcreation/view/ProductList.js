import React, { Component } from 'react';
import styled from "styled-components";
import ImageSlider from '../components/ImageSlider';
import {SloganBanner} from '../components/SloganBanner';
import {ProductGrid} from '../components/ProductGrid';


export const ProductList=(({gender})=>{

return(
  <div>
  <ImageSlider gender={gender}/>
  <ProductGrid gender={gender}/>
  <SloganBanner gender={gender}/>

  </div>
);

});
