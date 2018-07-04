import React, { Component } from 'react';
import mainImage from './image/mainImage.jpg';
import styled from "styled-components";
import rightArrow from './image/slider-right-arrow.svg';
import leftArrow from './image/slider-left-arrow.svg';



let imageArray=[require('./image/herMain01.jpg'),require('./image/himMain01.jpg')];


const Images=styled.div`
display:flex;
justify-content:space-between;
width:100%;
height:90vh;
align-items:center;
border:0px solid blue;
border-radius:1px;
background-image:url(${(props)=>props.image});
background-repeat:no-repeat;
background-size: cover;
background-position: center;

`;

class ImageSlider extends Component{
  constructor(props){
    super(props);
    this.state = {imageIndex:0};
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

nextSlide=()=>{
    if (this.state.imageIndex >= 2){this.setState({imageIndex:0})}else{
      this.setState({imageIndex:this.state.imageIndex+1})
    }
  }
previousSlide=()=>{
    if (this.state.imageIndex <= 0){this.setState({imageIndex:2})}else{
      this.setState({imageIndex:this.state.imageIndex-1})
    }
  }

  render(){
    let img;
    if(this.props.gender == 'her'){
    img=imageArray[0];
    }


    if(this.props.gender == 'him'){
    img=imageArray[1];
    }


    return(
      <div>
        <Images image={img}>

        <img src={leftArrow} onClick={this.previousSlide}/>
        {this.state.imageIndex}
        <img src={rightArrow} onClick={this.nextSlide}/>
        </Images>
      </div>
    );
  }
}


export default ImageSlider;
