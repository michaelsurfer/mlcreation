import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import * as s from '../common/Css2.js';
import { device } from "../common/device";


const FormRow=s.BasicDiv.extend`
flex-direction:column;

@media ${device.tablet}{
  flex-direction:row;
 }
`;

const Cell=s.BasicDiv.extend`
flex:${(props)=>props.flex}
justify-content:${(props)=>props.center}
align-items:${(props)=>props.center}
`;

const TextInput=styled.input`
width:99%;
`;


const DoubledDiv=s.BasicDiv.extend`
  flex:2;
  margin:0px;
`;
const CenteredDiv=s.BasicDiv.extend`
justify-content:center;
align-items:center;
margin:0px;
`;
class RegistrationForm extends Component{

  constructor(props){
    super(props);
  }




  onChange(e){
    console.log(e.target.value);
  }

  renderFormElement(title,key,type){


    return(
      <FormRow>
      <Cell>
        <s.RegistrationFormText>
          {title}
          </s.RegistrationFormText>
      </Cell>
      <Cell flex='2'>
        <TextInput type={type} name={key} onChange={this.onChange}/>
      </Cell>
      </FormRow>
    );
  }




  render(){
    return(
    <s.FullPureDiv>

      <s.ColCenterDiv>
        <s.RegistrationFormTitle>
          Company Details
        </s.RegistrationFormTitle>
      </s.ColCenterDiv>
        {this.renderFormElement('Company name:','name','text')}
        {this.renderFormElement('Tax I.D/EIN No.:','name','text')}
        {this.renderFormElement('Website:','name','text')}
      <FormRow>
        {this.renderFormElement('Buyers Name:','name','text')}
        {this.renderFormElement('Contact Phone No.:','name','text')}
      </FormRow>
        {this.renderFormElement('Email:','name','text')}
        {this.renderFormElement('Company Address:','name','text')}
      <FormRow>
        {this.renderFormElement('City:','name','text')}
        {this.renderFormElement('Area:','name','text')}
        {this.renderFormElement('Street:','name','text')}
        {this.renderFormElement('No:','name','text')}
      </FormRow>
      <FormRow>
        {this.renderFormElement('Floor:','retailer','text')}
        {this.renderFormElement('Room:','name','text')}
        {this.renderFormElement('Zip code:','name','text')}
        {this.renderFormElement('Country:','name','text')}
      </FormRow>

      <s.ColCenterDiv>
        <s.RegistrationFormTitle>
          Type of Business
        </s.RegistrationFormTitle>
      </s.ColCenterDiv>


      <FormRow>
      <s.BasicDiv>
      <CenteredDiv>
        <s.RegistrationFormText>
          Retailer
          </s.RegistrationFormText>
      </CenteredDiv>
      <CenteredDiv>
        <TextInput type='checkbox' onChange={this.onChange}/>
      </CenteredDiv>
      </s.BasicDiv>


      <s.BasicDiv>
      <CenteredDiv>
        <s.RegistrationFormText>
          Number of Retailer stores:
          </s.RegistrationFormText>
      </CenteredDiv>
      <CenteredDiv>
        <TextInput type='number' onChange={this.onChange}/>
      </CenteredDiv>
      </s.BasicDiv>

         <DoubledDiv>
         {this.renderFormElement('Mine Store Name:','name','text')}

        </DoubledDiv>
       </FormRow>




       <FormRow>
       <s.BasicDiv>
       <CenteredDiv>
         <s.RegistrationFormText>
           Retailer
           </s.RegistrationFormText>
       </CenteredDiv>
       <CenteredDiv>
         <TextInput type='checkbox' onChange={this.onChange}/>
       </CenteredDiv>
       </s.BasicDiv>


       <s.BasicDiv>
       <CenteredDiv>
         <s.RegistrationFormText>
           Number of Retailer stores:
           </s.RegistrationFormText>
       </CenteredDiv>
       <CenteredDiv>
         <TextInput type='number' onChange={this.onChange}/>
       </CenteredDiv>
       </s.BasicDiv>

          <Cell flex='2'>
          <CenteredDiv>
          <s.ColPureDiv>

          {this.renderFormElement('Amazon Store Name:','name','text')}
          {this.renderFormElement('e-Bay Store Name:','name','text')}
          {this.renderFormElement('Other:','name','text')}
          </s.ColPureDiv>
          </CenteredDiv>
         </Cell>
        </FormRow>

       <FormRow>
       <s.BasicDiv>
       <CenteredDiv>
         <s.RegistrationFormText>
           Home Parties:
           </s.RegistrationFormText>
       </CenteredDiv>
       <CenteredDiv>
         <TextInput type='checkbox' onChange={this.onChange}/>
       </CenteredDiv>
       </s.BasicDiv>
       <s.BasicDiv></s.BasicDiv>
       <DoubledDiv></DoubledDiv>
       </FormRow>
       <FormRow>
        <s.ButtonDiv>
        <button>Reset</button>

        <button>Confirm</button>
        </s.ButtonDiv>
        </FormRow>
    </s.FullPureDiv>
     );
  }


}


export default RegistrationForm;
