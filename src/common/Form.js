import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import * as css from './Css.js';


var domain = 'http://localhost:3000';



var fieldData = {
  email:{
    key:'email',
    type:'text',
    validateType:'email',
    title:'please enter your email address',
    mandatory:true,
    warningText:'invalid email',

  },
  password:{
    key:'password',
    type:'type',
    validateType:'password',
    title:'please enter password',
    mandatory:true,
    warningText:'password must be 0 - 6 characters'
  }

}



class Form extends Component{

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
      //this.setState({fieldData[item].key:data})
    }
    console.log(state);
    this.state = {
      formData:state,
      formReady:false,
    };
    /*
      you can access to state value like this :
        {this.state.formData.email.key}
    */
}

updateItem(e){
  var value = e.target.value;
  var key = e.target.id;
  var formData = this.state.formData;
  console.log(e.target.id);
  formData[key].value = value;

  this.setState({
    formData: formData
  });
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

validateForm(){
  //loop all item in state
  var formData = this.state.formData;

  var result=true;

  for(var item in formData){

    if(!formData[item].validFormat){
       result=false;
      break;
    }
  }
  console.log(result);
  this.setState({formReady:result});
 }



validateItem(e){
  //define all validating method of different type
  var key = e.target.id;
  var value = e.target.value;
  var formData = this.state.formData;
  var result=true;

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

  console.log(formData);
  this.validateForm();

}

render(){


  // Enable this if need auto gen
  /*

  var formResult=[];

  for(var item in fieldData){
    //console.log(item);
    formResult.push(
      <css.ColDiv>
      <css.TextDiv><css.FormText>{fieldData[item].title}</css.FormText></css.TextDiv>
      <css.Input id={item} type={fieldData[item].type} value={this.state.formData[item].value}
      onChange={(e)=>this.updateItem(e)}
      onBlur={(e)=>this.validateItem(e)}
      onFocus={(e)=>this.cancelWarning(e)}
      />
      {(!this.state.formData[item].validFormat && this.state.formData[item].value!="")?(
      <css.TextDiv><css.FormText>{fieldData[item].warningText}</css.FormText></css.TextDiv>
      ):(
          <div></div>
      )}
      </css.ColDiv>
    );
  }

  */

  //Enable this if need customeize UI

  var formResult=
    <css.ColDiv>

      <css.TextDiv center>
        <css.FormTitle>Company Details</css.FormTitle>
      </css.TextDiv>

      <css.TextDiv>
      <css.FormText>Company name</css.FormText>
      <css.Input id='email' type={fieldData.email.type} value={this.state.formData.email.value}
      onChange={(e)=>this.updateItem(e)}
      onBlur={(e)=>this.validateItem(e)}
      onFocus={(e)=>this.cancelWarning(e)}
      />
      </css.TextDiv>

      <css.TextDiv>
      <css.FormText>Tax I.D/EIN No:</css.FormText>
      <css.Input id='email' type='text'/>
      </css.TextDiv>

      <css.TextDiv>
      <css.FormText>Buyers Name:</css.FormText>
      <css.Input id='email' type={fieldData.email.type} value={this.state.formData.email.value}
      onChange={(e)=>this.updateItem(e)}
      onBlur={(e)=>this.validateItem(e)}
      onFocus={(e)=>this.cancelWarning(e)}
      />
      <css.FormText>Contact Phone No:</css.FormText>
      <css.Input id='email' type={fieldData.email.type} value={this.state.formData.email.value}
      onChange={(e)=>this.updateItem(e)}
      onBlur={(e)=>this.validateItem(e)}
      onFocus={(e)=>this.cancelWarning(e)}
      />
      </css.TextDiv>
      <css.TextDiv>

      <css.FormText>Email:</css.FormText>
      <css.Input id='email' type={fieldData.email.type} value={this.state.formData.email.value}
      onChange={(e)=>this.updateItem(e)}
      onBlur={(e)=>this.validateItem(e)}
      onFocus={(e)=>this.cancelWarning(e)}
      />
      </css.TextDiv>

      <css.TextDiv>
      <css.FormText>Company Address:</css.FormText>
      <css.Input id='email' type={fieldData.email.type} value={this.state.formData.email.value}
      onChange={(e)=>this.updateItem(e)}
      onBlur={(e)=>this.validateItem(e)}
      onFocus={(e)=>this.cancelWarning(e)}
      />
      </css.TextDiv>

      <css.TextDiv>

      <css.FormText>City:</css.FormText>
      <css.Input id='email' type={fieldData.email.type} value={this.state.formData.email.value}
      onChange={(e)=>this.updateItem(e)}
      onBlur={(e)=>this.validateItem(e)}
      onFocus={(e)=>this.cancelWarning(e)}
      />
      <css.FormText>State/Area:</css.FormText>
            <css.Input id='email' type={fieldData.email.type} value={this.state.formData.email.value}
            onChange={(e)=>this.updateItem(e)}
            onBlur={(e)=>this.validateItem(e)}
            onFocus={(e)=>this.cancelWarning(e)}
      />
      <css.FormText>Street:</css.FormText>
      <css.Input id='email' type={fieldData.email.type} value={this.state.formData.email.value}
      onChange={(e)=>this.updateItem(e)}
      onBlur={(e)=>this.validateItem(e)}
      onFocus={(e)=>this.cancelWarning(e)}
      />
      <css.FormText>No.:</css.FormText>
      <css.Input id='email' type={fieldData.email.type} value={this.state.formData.email.value}
      onChange={(e)=>this.updateItem(e)}
      onBlur={(e)=>this.validateItem(e)}
      onFocus={(e)=>this.cancelWarning(e)}
      />
      </css.TextDiv>


            <css.TextDiv>

            <css.FormText>Floor:</css.FormText>
            <css.Input id='email' type={fieldData.email.type} value={this.state.formData.email.value}
            onChange={(e)=>this.updateItem(e)}
            onBlur={(e)=>this.validateItem(e)}
            onFocus={(e)=>this.cancelWarning(e)}
            />
            <css.FormText>Room:</css.FormText>
                  <css.Input id='email' type={fieldData.email.type} value={this.state.formData.email.value}
                  onChange={(e)=>this.updateItem(e)}
                  onBlur={(e)=>this.validateItem(e)}
                  onFocus={(e)=>this.cancelWarning(e)}
            />
            <css.FormText>Zip code:</css.FormText>
            <css.Input id='email' type={fieldData.email.type} value={this.state.formData.email.value}
            onChange={(e)=>this.updateItem(e)}
            onBlur={(e)=>this.validateItem(e)}
            onFocus={(e)=>this.cancelWarning(e)}
            />
            <css.FormText>Country:</css.FormText>
            <css.Input id='email' type={fieldData.email.type} value={this.state.formData.email.value}
            onChange={(e)=>this.updateItem(e)}
            onBlur={(e)=>this.validateItem(e)}
            onFocus={(e)=>this.cancelWarning(e)}
            />
            </css.TextDiv>

            <css.TextDiv center>
              <css.FormTitle>Type of Business</css.FormTitle>
            </css.TextDiv>

            <css.TextDiv>

            <css.RowPureDiv>
            <css.FormText>Retailer:</css.FormText>
            <css.Input id='email' type='checkbox' value={this.state.formData.email.value}
                  onChange={(e)=>this.updateItem(e)}
                  onBlur={(e)=>this.validateItem(e)}
                  onFocus={(e)=>this.cancelWarning(e)}
            />
            </css.RowPureDiv>

            <css.RowPureDiv>
            <css.FormText>Number of Retailer stores:</css.FormText>
            <css.Input id='email' type='number' value={this.state.formData.email.value}
            onChange={(e)=>this.updateItem(e)}
            onBlur={(e)=>this.validateItem(e)}
            onFocus={(e)=>this.cancelWarning(e)}
            />
            </css.RowPureDiv>

            <css.RowPureDiv>
            <css.FormText>Mine Store Name:</css.FormText>
            <css.Input id='email' type={fieldData.email.type} value={this.state.formData.email.value}
            onChange={(e)=>this.updateItem(e)}
            onBlur={(e)=>this.validateItem(e)}
            onFocus={(e)=>this.cancelWarning(e)}
            />
            </css.RowPureDiv>

            </css.TextDiv>


            <css.TextDiv>


            <css.RowPureDiv>
            <css.FormText>E-Tailer:</css.FormText>
            <css.Input id='email' type='checkbox' value={this.state.formData.email.value}
                  onChange={(e)=>this.updateItem(e)}
                  onBlur={(e)=>this.validateItem(e)}
                  onFocus={(e)=>this.cancelWarning(e)}
            />
            </css.RowPureDiv>

            <css.RowPureDiv>
            <css.FormText>Number of E-Tailer stores:</css.FormText>
            <css.Input id='email' type='number' value={this.state.formData.email.value}
            onChange={(e)=>this.updateItem(e)}
            onBlur={(e)=>this.validateItem(e)}
            onFocus={(e)=>this.cancelWarning(e)}
            />
            </css.RowPureDiv>


            <css.RowPureDiv>
            <css.ColPureDiv>
            <div>
            <css.FormText>Amazon Store Name:</css.FormText>
            <css.Input id='email' type={fieldData.email.type} value={this.state.formData.email.value}
            onChange={(e)=>this.updateItem(e)}
            onBlur={(e)=>this.validateItem(e)}
            onFocus={(e)=>this.cancelWarning(e)}
            />
            </div>
            <div>
            <css.FormText>ebay Store Name:</css.FormText>
            <css.Input id='email' type={fieldData.email.type} value={this.state.formData.email.value}
            onChange={(e)=>this.updateItem(e)}
            onBlur={(e)=>this.validateItem(e)}
            onFocus={(e)=>this.cancelWarning(e)}
            />
            </div>
            <div>
           <css.FormText>Other:</css.FormText>
            <css.Input id='email' type={fieldData.email.type} value={this.state.formData.email.value}
                        onChange={(e)=>this.updateItem(e)}
                        onBlur={(e)=>this.validateItem(e)}
                        onFocus={(e)=>this.cancelWarning(e)}
            />
            </div>
            </css.ColPureDiv>
            </css.RowPureDiv>

            </css.TextDiv>

    </css.ColDiv>

  return(
  <css.LeftAlignDiv>
    {formResult}
    <css.ButtonDiv center>
    {this.state.formReady ? (
      <css.Button onClick={()=>this.register(formData)}>Register</css.Button>
    ):(
      <css.Button disable >Register</css.Button>)}
     </css.ButtonDiv>
   </css.LeftAlignDiv>
  )


}




}

export default Form;
