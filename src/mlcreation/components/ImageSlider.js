import React, { Component } from 'react';
import styled from "styled-components";
import rightArrow from '../image/slider-right-arrow.svg';
import leftArrow from '../image/slider-left-arrow.svg';
import { device } from "../common/device";



let imageJson={
  main:[require('../image//mainImages/main01.png'),require('../image//mainImages/her01.png'),require('../image//mainImages/him01.png')],
  m:[require('../image//mainImages/him01.png'),require('../image//mainImages/him02.png'),require('../image//mainImages/main01.png')],
  g:[require('../image//mainImages/her01.png'),require('../image//mainImages/her02.png'),require('../image//mainImages/main01.png')]
}

const Images=styled.div`
display:flex;
justify-content:space-between;
width:100%;
height:680px;
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

    this.state = {imageIndex:index};
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }


componentWillReceiveProps(){
  console.log('componentWillReceiveProps')
  this.setState({imageIndex:0});

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
    var gender = this.props.gender
    let img = imageJson[gender][this.state.imageIndex];


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
