import React, { Component } from 'react';
import styled from "styled-components";
import mainImage from './image/mainImage.jpg';
import {observer,inject} from "mobx-react";





const Frame=styled.div`
flex:1;
display:flex;
flex-direction:column;
text-align: center;
border:1px solid grey;
border-radius:1px;

  @media ${device.tablet}{
   }

  @media ${device.laptop}{
   }
  @media ${device.desktop}{
   }
`;

@inject('store')
@observer

class [className] extends Component{

  constructor(props){
    super(props);
    this.state=({
      key:'value',
    });
    this.login = this.login.bind(this);
  }

  login(){
    this.props.store.login=true;
     this.setState({key:'true'});
  }
render(){
  return(

    <button onClick={this.login}>Sign In</button>

  );
}


}


export default [ClassName];
