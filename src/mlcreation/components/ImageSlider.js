import React, { Component } from 'react';
import styled from "styled-components";
import rightArrow from '../image/slider-right-arrow.svg';
import leftArrow from '../image/slider-left-arrow.svg';
import { device } from "../common/device";



let imageArray=[require('../image/main01.png'), require('../image/herMain01.jpg'),require('../image/himMain01.jpg')];


const Images=styled.div`
display:flex;
justify-content:space-between;
width:100%;
height:40vh;
align-items:center;
border:0px solid blue;
border-radius:1px;
background-image:url(${(props)=>props.image});
background-repeat:no-repeat;
background-size: cover;
background-position: center;

@media ${device.tablet}{
  height:80vh;
 }
`;

class ImageSlider extends Component{
  constructor(props){
    super(props);

    var index = 0 ;

    if(this.props.gender == 'g'){index=1}
    if(this.props.gender == 'm'){index=2}

    this.state = {imageIndex:index};
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
    let img = imageArray[this.state.imageIndex];
    /*
    if(this.props.gender == 'main'){
    img=imageArray[0];
    }

    if(this.props.gender == 'her'){
    img=imageArray[1];
    }


    if(this.props.gender == 'him'){
    img=imageArray[2];
    }
*/

    return(
      <div>
        <Images image={img}>

        <img src={leftArrow} onClick={this.previousSlide}/>
        <img src={rightArrow} onClick={this.nextSlide}/>
        </Images>
      </div>
    );
  }
}


export default ImageSlider;
