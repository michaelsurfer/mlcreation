import React,{Component} from 'react';
import styled from "styled-components";
import ImageSlider from '../components/ImageSlider';
import { device } from "../common/device";
import {SloganBanner} from '../components/SloganBanner';
import {ProductDetail} from '../components/ProductDetail';
import ProductDesc from '../components/ProductDesc';
import {observer,inject} from "mobx-react";

import {Header} from '../components/ProductHeader';
import * as c from '../common/Css2.js';
import data from "../asset/ProductList.json";

import itemImg from '../image/item.png';

@inject('store')
@observer
class Product extends Component{
  constructor(props){
    super(props);
    this.callbackF=this.callbackF.bind(this);
  }

  callbackF(selectedColor){
    //var productID = this.props.productID +"-"+ selectedColor;
     this.props.store.addOne2Cart(this.props.productID,selectedColor);
  }

  render(){
    var productID = this.props.productID;
    var gender = this.props.gender;
    var itemName = data[productID].itemName;
    var colorArray = data[productID].color;
    var price = data[productID].retailPrice;
    var title1 = data[productID].title1;
    var title2 = data[productID].title2;
    var description1 = data[productID].description1;
    var description2 = data[productID].description2;
    var remark = data[productID].remark;


    return(
      <c.ColPureDiv>
      <Header
      title={itemName}
      description1={title1}
      description2={title2}
      image="image url"
      gender={gender}
      />
      <ProductDesc
      productID={productID}
      price={price}
      description1={description1}
      description2={description2}
      length="length"
      diameter="diameter"
      weight="weight"
      remark={remark}
      colorArray={colorArray}
      callback={this.callbackF}
      />
      <ProductDetail/>
      <SloganBanner gender={gender}/>

      </c.ColPureDiv>
    );
  }

}

export default Product;
