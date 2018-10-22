import React, { Component } from 'react';
import styled from "styled-components";
import rightArrow from '../image/slider-right-arrow.svg';
import leftArrow from '../image/slider-left-arrow.svg';
import { device } from "../common/device";
import main01 from '../image/mainImages/main01.png';
import her01 from '../image/mainImages/her01.png';
import her02 from '../image/mainImages/her02.png';
import him01 from '../image/mainImages/him01.png';
import him02 from '../image/mainImages/him02.png';

/*
let imageJson={
  main:[require('../image/mainImages/main01.png'),require('../image/mainImages/her01.png'),require('../image/mainImages/him01.png')],
  m:[require('../image/mainImages/him01.png'),require('../image/mainImages/him02.png'),require('../image/mainImages/him01.png')],
  g:[require('../image/mainImages/her01.png'),require('../image/mainImages/her02.png'),require('../image/mainImages/her01.png')]
}
*/

let imageJson={
  main:[main01,her01,him01],
  m:[him01,him02,him01],
  g:[her01,her02,her01]
}


const Images=styled.div`
display:flex;
justify-content:space-between;
width:100%;
height:75vh;
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

    var index = 0 ;

    this.state = {
      imageIndex:index,
      imageLoadingCounter:0
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  
  }

componentDidMount(){
this.interval = setInterval(()=>{
   this.nextSlide();
},5000)
}
componentWillReceiveProps(){
   this.setState({imageIndex:0});

}

nextSlide=()=>{
  if(this.state.imageLoadingCounter ==5){
    if (this.state.imageIndex >= 2){this.setState({imageIndex:0})}else{
      this.setState({imageIndex:this.state.imageIndex+1})
    }
  }
  }
previousSlide=()=>{
    if (this.state.imageIndex <= 0){this.setState({imageIndex:2})}else{
      this.setState({imageIndex:this.state.imageIndex-1})
    }
  }
imageLoaded=()=>{
   var counter = this.state.imageLoadingCounter
  if(counter<5){
  counter=counter+1
  this.setState({imageLoadingCounter:counter})
  }
 }
  componentWillUpdate(){
   }
  render(){
    var gender = this.props.gender
    let img = imageJson[gender][this.state.imageIndex];


    return(
      <div>
        
        <div style={{'display':'none'}}>
        <img src={main01} onLoad={this.imageLoaded()}/>
        <img src={him01} onLoad={this.imageLoaded()}/>/>
        <img src={her01} onLoad={this.imageLoaded()}/>/>
        <img src={him02} onLoad={this.imageLoaded()}/>/>
        <img src={her02} onLoad={this.imageLoaded()}/>/>

        </div>
        <Images image={img}>

        <img src={leftArrow} onClick={this.previousSlide}/>
        <img src={rightArrow} onClick={this.nextSlide}/>
        </Images>
      </div>
    );
  }
}


export default ImageSlider;
