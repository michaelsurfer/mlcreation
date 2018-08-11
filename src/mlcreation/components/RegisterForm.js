import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import * as s from '../common/Css2.js';
import { device } from "../common/device";
import {apis} from '../common/config.js';



const ModalWrapper=styled.div`
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.6);
display:${(props)=>props.display};
`;

const Modal=styled.div`
position:fixed;
background:white;
width:auto;
height:auto;
top:50%;
left:50%;
transform: translate(-50%,-50%);

display:flex;
flex-direction:column;
padding:20px;
`;


const WarningText=styled.label`
color:red;
font-size:small;
padding:5px;
`;

const WarningTitle=styled.label`
color:grey;
font-size:small;
padding:5px;
`;

const Button=styled.button`
background-color:${(props)=>props.black? 'black':'rgb(240,160,143)'};
color: ${(props)=>props.black? 'white':'black'};
margin:0;
border:1px solid ;
border-color:${(props)=>props.black? 'black':'rgb(240,160,143)'};
width:100%;
margin-top:20px;
 `;


const Wrapper=s.FullPureDiv.extend`
background-color:white;
flex-direction:column;
width:70%;
`;

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
    warningText:'please enter EIN no'
  },
  website:{
    key:'website',
    type:'text',
    needValidation:true,
    validateType:'url',
    title:'Website',
    mandatory:true,
    warningText:'please enter website'
  },
  buyer:{
    key:'buyer',
    type:'text',
    needValidation:true,
    validateType:'text',
    title:'Buyers Name',
    mandatory:true,
    warningText:'please enter buyers name'
  },
  phone:{
    key:'phone',
    type:'text',
    needValidation:true,
    validateType:'text',
    title:'Contact Phone No',
    mandatory:true,
    warningText:'please enter phone no'
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
    warningText:'please enter Address'
  },
  city:{
    key:'city',
    type:'text',
    needValidation:false,
    validateType:'text',
    title:'City',
    mandatory:true,
    warningText:'please enter city'
  },
  area:{
    key:'area',
    type:'text',
    needValidation:false,
    validateType:'text',
    title:'Area',
    mandatory:true,
    warningText:'please enter area'
  },
  street:{
    key:'street',
    type:'text',
    needValidation:false,
    validateType:'text',
    title:'Street',
    mandatory:true,
    warningText:'please enter street'
  },
  no:{
    key:'no',
    type:'text',
    needValidation:false,
    validateType:'text',
    title:'No',
    mandatory:true,
    warningText:'please enter street no'
  },
  floor:{
    key:'floor',
    type:'text',
    needValidation:false,
    validateType:'text',
    title:'Floor',
    mandatory:true,
    warningText:'please enter floor'
  },
  room:{
    key:'room',
    type:'text',
    needValidation:false,
    validateType:'text',
    title:'Room',
    mandatory:true,
    warningText:'please enter room'
  },
  zip:{
    key:'zip',
    type:'text',
    needValidation:false,
    validateType:'text',
    title:'Zip code',
    mandatory:true,
    warningText:'please enter zip'
  },
  country:{
    key:'country',
    type:'text',
    needValidation:false,
    validateType:'text',
    title:'Country',
    mandatory:true,
    warningText:'please enter country'
  },
  retailer:{
    key:'retailer',
    type:'checkbox',
    needValidation:false,
    validateType:'text',
    title:'Retailer',
    mandatory:true,
    warningText:'please enter retailer name'
  },
  retailerNo:{
    key:'retailerNo',
    type:'number',
    needValidation:false,
    validateType:'number',
    title:'Number of Retailer Stores',
    mandatory:true,
    warningText:'please enter retailer No'
  },
  mine:{
    key:'mine',
    type:'text',
    needValidation:false,
    validateType:'text',
    title:'Mine Store Name',
    mandatory:true,
    warningText:'please enter mine store name'
  },
  eTailer:{
    key:'eTailer',
    type:'checkbox',
    needValidation:false,
    validateType:'text',
    title:'E-Tailer',
    mandatory:false,
    warningText:'invalid'
  },
  eTailerNo:{
    key:'eTailerNo',
    type:'number',
    needValidation:false,
    validateType:'number',
    title:'Number of E-tailer Stores',
    mandatory:false,
    warningText:'invalid'
  },
  amazon:{
    key:'amazon',
    type:'text',
    needValidation:false,
    validateType:'text',
    title:'Amazon Store Name',
    mandatory:false,
    warningText:'invalid'
  },
  eBay:{
    key:'eBay',
    type:'text',
    needValidation:false,
    validateType:'text',
    title:'e-bay Store Name',
    mandatory:false,
    warningText:'invalid'
  },
  other:{
      key:'other',
      type:'text',
      needValidation:false,
      validateType:'text',
      title:'Other',
      mandatory:false,
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
`;

class RegisterForm extends Component{
  constructor(props){
    super(props);
    var state = {};
    for(var item in fieldData){
      //* for testing
      var data = {
        key:fieldData[item].key,
        value:"TESTING",
        validFormat:true
      };

      /*
      var data = {
        key:fieldData[item].key,
        value:"",
        validFormat:false
      };
      */
      state[fieldData[item].key] = data;
      this.state = {
        formData:state,
        formReady:false,
        showModal:'none',
        warning:[]
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

handleSubmit(){
   //check all data then pop up modal
  console.log(this.state.formData);
  var data = this.state.formData;
  var warning = [];
  for(var item in data){
    var key = data[item].key;

    if(!data[item].validFormat && fieldData[key].mandatory){
       console.log(key);
      var warningText = fieldData[key].warningText;
      warning.push(
        <WarningText>{warningText}</WarningText>
      )
    }
  }
  console.log(warning.length);
  if(warning.length==0){
    //check email duplication...
    fetch(apis.checkEmail.endpoint+"/"+data.email.value)
      .then(response=>response.json())
      .then(data=>{
        if(data.result){
          //duplicated Email
          var warning=<WarningText>Duplicated Email address</WarningText>
          this.setState({
            warning:warning,
            showModal:'block'
          });
        }
      });

  }else{
    //show warning modal
    this.setState({
      warning:warning,
      showModal:'block'
    });
  }
}



  render(){
    return(
      <Wrapper>
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
       <Button type='button' black>Reset</Button>

       <Button
        onClick={()=>this.handleSubmit()}
       >Confirm</Button>
       </s.ButtonDiv>
       </FormRow>

       <ModalWrapper display={this.state.showModal}>
        <Modal>
        <WarningTitle>Cannot register because of following:</WarningTitle>  
        {this.state.warning}
        <Button black
          onClick={()=>this.setState({showModal:'none'})}
          >Got it</Button>
        </Modal>
       </ModalWrapper>


      </Wrapper>

    );
  }

}

export default RegisterForm;
