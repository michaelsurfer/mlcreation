import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import * as c from '../common/Css2.js';
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";
import {apis} from '../common/config.js';
import {observer,inject} from "mobx-react";
import RetailerBar from '../components/RetailerBar';

export const YourAccountView =({})=>{
  return(
    <div>
    <RetailerBar/>

      your account view.
    </div>
  )
}
