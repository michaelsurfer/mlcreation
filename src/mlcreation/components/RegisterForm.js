import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import * as s from '../common/Css2.js';
import { device } from "../common/device";



var fieldData = {
  company:{
    key:'company',
    type:'text',
    needValidation:true,
    validateType:'text',
    title:'Company Name',
    mandatory:true,
    warningText:'enter company name',

  },
  ein:{
    key:'ein',
    type:'text',
    needValidation:true,
    validateType:'text',
    title:'Tax I.D/EIN No.',
    mandatory:true,
    warningText:'enter EIN no'
  },
  website:{
    key:'website',
    type:'text',
    needValidation:true,
    validateType:'url',
    title:'Website',
    mandatory:false,
    warningText:'enter website'
  },
  buyer:{
    key:'buyer',
    type:'text',
    needValidation:true,
    validateType:'text',
    title:'Buyers Name',
    mandatory:true,
    warningText:'enter buyers name'
  },
  phone:{
    key:'phone',
    type:'text',
    needValidation:true,
    validateType:'text',
    title:'Contact Phone No',
    mandatory:true,
    warningText:'enter phone no'
  },
  email:{
    key:'email',
    type:'text',
    needValidation:true,
    validateType:'email',
    title:'Email',
    mandatory:true,
    warningText:'invalid email address'
  },
  password:{
    key:'password',
    type:'text',
    needValidation:true,
    validateType:'password',
    title:'Password',
    mandatory:true,
    warningText:'password must be 0-6 characters'
  },
  address:{
    key:'address',
    type:'text',
    needValidation:false,
    validateType:'text',
    title:'Company Address',
    mandatory:true,
    warningText:'invalid'
  },
  city:{
    key:'city',
    type:'text',
    needValidation:false,
    validateType:'text',
    title:'City',
    mandatory:true,
    warningText:'invalid'
  },
  area:{
    key:'area',
    type:'text',
    needValidation:false,
    validateType:'text',
    title:'Area',
    mandatory:true,
    warningText:'invalid'
  },
  street:{
    key:'street',
    type:'text',
    needValidation:false,
    validateType:'text',
    title:'Street',
    mandatory:true,
    warningText:'invalid'
  },
  no:{
    key:'no',
    type:'text',
    needValidation:false,
    validateType:'text',
    title:'No',
    mandatory:true,
    warningText:'invalid'
  },
  floor:{
    key:'floor',
    type:'text',
    needValidation:false,
    validateType:'text',
    title:'Floor',
    mandatory:true,
    warningText:'invalid'
  },
  room:{
    key:'room',
    type:'text',
    needValidation:false,
    validateType:'text',
    title:'Room',
    mandatory:true,
    warningText:'invalid'
  },
  zip:{
    key:'zip',
    type:'text',
    needValidation:false,
    validateType:'text',
    title:'Zip code',
    mandatory:true,
    warningText:'invalid'
  },
  country:{
    key:'country',
    type:'text',
    needValidation:false,
    validateType:'text',
    title:'Country',
    mandatory:true,
    warningText:'invalid'
  },
  retailer:{
    key:'retailer',
    type:'checkbox',
    needValidation:false,
    validateType:'text',
    title:'Retailer',
    mandatory:true,
    warningText:'invalid'
  },
  retailerNo:{
    key:'retailerNo',
    type:'number',
    needValidation:false,
    validateType:'number',
    title:'Number of Retailer Stores',
    mandatory:true,
    warningText:'invalid'
  },
  mine:{
    key:'mine',
    type:'text',
    needValidation:false,
    validateType:'text',
    title:'Mine Store Name',
    mandatory:true,
    warningText:'invalid'
  },
  eTailer:{
    key:'eTailer',
    type:'checkbox',
    needValidation:false,
    validateType:'text',
    title:'E-Tailer',
    mandatory:true,
    warningText:'invalid'
  },
  eTailerNo:{
    key:'eTailerNo',
    type:'number',
    needValidation:false,
    validateType:'number',
    title:'Number of E-tailer Stores',
    mandatory:true,
    warningText:'invalid'
  },
  amazon:{
    key:'amazon',
    type:'text',
    needValidation:false,
    validateType:'text',
    title:'Amazon Store Name',
    mandatory:true,
    warningText:'invalid'
  },
  eBay:{
    key:'eBay',
    type:'text',
    needValidation:false,
    validateType:'text',
    title:'e-bay Store Name',
    mandatory:true,
    warningText:'invalid'
  },
  other:{
      key:'other',
      type:'text',
      needValidation:false,
      validateType:'text',
      title:'Other',
      mandatory:true,
      warningText:'invalid'
    },

}









const FormCol=s.BasicDiv.extend`
flex-direction:column;
flex:${(props)=>props.doubleSize?'2':'1'}

`;

const FormRow=s.BasicDiv.extend`
flex-direction:column;
flex:${(props)=>props.doubleSize?'2':'1'}
border-bottom:${(props)=>props.border?'0.5px solid grey':'0px'}
border-left:${(props)=>props.border?'1px solid grey':'0px'}
border-right:${(props)=>props.border?'1px solid grey':'0px'}
border-top:${(props)=>props.border?'0.5px solid grey':'0px'}
margin:0px;
@media ${device.tablet}{
  flex-direction:row;
 }
`;

const Cell=s.BasicDiv.extend`
flex:${(props)=>props.flex}
justify-content:${(props)=>props.align}
align-items:${(props)=>props.align}
margin:1px;
padding:2px;
`;

const TextInput=styled.input`
width:100%;
color:${(props)=>props.color};
border: 1px solid grey;
border-radius:4px;
`;

const InvisibleFormText=s.RegistrationFormText.extend`
opacity:0;
display:none;
@media ${device.tablet}{
  display:block;
 }

`

class RegisterForm extends Component{
  constructor(props){
    super(props);
    var state = {};
    for(var item in fieldData){
      var data = {
        key:fieldData[item].key,
        value:"",
        validFormat:false
      };

      state[fieldData[item].key] = data;
      this.state = {
        formData:state,
        formReady:false,
      };
      /*
        you can access to state value like this :
          {this.state.formData.email.key}
      */

    }

  }

  renderFormHeader(title){
    return(
    <FormRow border>
    <Cell center flex='1' align='center'>
    <s.RegistrationFormTitle>{title}</s.RegistrationFormTitle>
    </Cell>
    </FormRow>
  );
  }
  renderEmptyElementSpace(){
    return(
      <FormRow >
      <Cell flex='1'>
        <InvisibleFormText>asdfs</InvisibleFormText>
       </Cell>
      <Cell flex='2' >
      <InvisibleFormText>asasf</InvisibleFormText>
       </Cell>
      </FormRow>
    );
  }
  cancelWarning(e){
    var key = e.target.id;
    var value = e.target.value;
    var formData = this.state.formData;
    formData[key].validFormat = true;
    this.setState({
      formData: formData
    });
  }

  updateItem(e){
    var value = e.target.value;
    var key = e.target.id;
    var formData = this.state.formData;
    formData[key].value = value;
    this.setState({
      formData: formData
    });
  }
  validateItem(e){
    //define all validating method of different type

    var key = e.target.id;
    var value = e.target.value;
    var formData = this.state.formData;
    var result=true;

    if(fieldData[key].needValidation){



    switch(key){
      case 'email':
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        result = re.test(String(value).toLowerCase());
        console.log("setting result of email to "+result);
      break;
      case 'password':
        if(value.length >0 && value.length <7) {result=false;}
      break;
      default:
      break;
    }

    formData[key].validFormat = result;
    this.setState({
      formData: formData
    });

  }
  }
  renderFormElement(key,_align){
    var align;
    var color='grey';
    var type = fieldData[key].type;
    if(_align){align = _align}else{align='left'}
    var title = fieldData[key].title;
    var currentValue = this.state.formData[key].value;
    if(!this.state.formData[key].validFormat && currentValue!=""){
      currentValue = fieldData[key].warningText;
      color='red';
    }

    return(
    <FormRow >
    <Cell flex='1' align={align}>
      <s.RegistrationFormText>{title}</s.RegistrationFormText>
    </Cell>
    <Cell flex='2' align={align}>
      <TextInput
      type={type}
      color={color}
      id={key}
      value={currentValue}
      onChange={(e)=>this.updateItem(e)}
      onBlur={(e)=>this.validateItem(e)}
      onFocus={(e)=>this.cancelWarning(e)}
      />
    </Cell>
    </FormRow>
  );
  }

  render(){
    return(
      <s.FullPureDiv direction='column'>
      {this.renderFormHeader('Company Details')}
      <FormRow border>
      {this.renderFormElement('company')}
      </FormRow>
      <FormRow border>
      {this.renderFormElement('ein')}
      </FormRow>

      <FormRow border>

      {this.renderFormElement('website')}
      </FormRow>

      <FormRow border>
      {this.renderFormElement('buyer')}
      {this.renderFormElement('phone')}
      </FormRow>
      <FormRow border>
      {this.renderFormElement('email')}
      {this.renderFormElement('password')}

      </FormRow>
        <FormRow border>
      {this.renderFormElement('address')}
      </FormRow>
      <FormRow border>
      {this.renderFormElement('city')}
      {this.renderFormElement('area')}
      {this.renderFormElement('street')}
      {this.renderFormElement('no')}
      </FormRow>
      <FormRow border>
      {this.renderFormElement('floor')}
      {this.renderFormElement('room')}
      {this.renderFormElement('zip')}
      {this.renderFormElement('country')}
      </FormRow>




      {this.renderFormHeader('Type of Business')}


      <FormRow border>
      {this.renderFormElement('retailer','center')}
      {this.renderFormElement('retailerNo','center')}
      <FormCol doubleSize>
      {this.renderEmptyElementSpace()}
      {this.renderFormElement('mine','center')}
      {this.renderEmptyElementSpace()}
      </FormCol>
      </FormRow>

      <FormRow border>
      {this.renderFormElement('eTailer','center')}
      {this.renderFormElement('eTailerNo','center')}
      <FormCol doubleSize>
      {this.renderFormElement('amazon','center')}
      {this.renderFormElement('eBay','center')}
      {this.renderFormElement('other','center')}
      </FormCol>
      </FormRow>
      <FormRow border>
       <s.ButtonDiv>
       <button>Reset</button>

       <button>Confirm</button>
       </s.ButtonDiv>
       </FormRow>

      </s.FullPureDiv>

    );
  }

}

export default RegisterForm;
