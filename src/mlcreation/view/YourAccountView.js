import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import * as c from '../common/Css2.js';
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";
import {apis} from '../common/config.js';
import {observer,inject} from "mobx-react";
import RetailerBar from '../navigation/RetailerBar';



const Wrapper=c.ColCenterDiv.extend`
background-color:${(props)=>props.color};
padding:20px;
`;


export const YourAccountView =({})=>{

  var color='rgb(239,238,242)';


  return(
    <div>
    <RetailerBar/>
    <Wrapper color={color}>
      <RegisterForm/>
    </Wrapper>
    </div>
  )
}
