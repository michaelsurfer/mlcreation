import styled from "styled-components";
import React, { Component } from 'react';
import {ColorBox} from "./ColorBox";

const Wrapper=styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;

`;

class ColorPicker extends Component{

constructor(props){
    super(props);

    this.pickColorCallback=this.pickColorCallback.bind(this);
}

pickColorCallback=(e)=>{

    console.log("selected color is :"+e.target.id);
}

render(){
    var result=[];
    var colorArray = this.props.colorArray;
     colorArray.map((item,i)=>{
         if(this.props.selectedColor == item){
            console.log(this.props.selectedColor);

            result.push(
                <ColorBox 
                selected={true}
                colorCode={item}
                callbackF={this.props.pickColorCallbackF}    
                />
            );
        }else{
            result.push(
                <ColorBox 
                selected={false}
                colorCode={item}
                callbackF={this.props.pickColorCallbackF}    
                />
            );
        } 
 
    });

    return(
        <Wrapper>
            {result}
        </Wrapper>
    );
}

}

export default ColorPicker;