import React, { Component } from 'react';
 import * as c from "./Css";
 
class BasicInfoForm extends Component{
    constructor(props){
        super(props)
        this.state={
            showWarning:false
        };
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        var first=ev.target.first.value
        var last=ev.target.last.value
        //if(first!="" && last!=""){
        if(true){
        this.setState({showWarning:false})    
        this.props.NextCallBackF(this.props.step)
        }else{
        this.setState({showWarning:true})    
        }
    }    

    render(){
        return(
            <c.Form onSubmit={this.handleSubmit}>
                <c.FormRow border
                    onClick={()=>this.props.ReOpenCallBackF(this.props.step)}
                >
                    <c.FormTitle>
                        1. Basic Info
                    </c.FormTitle>
                </c.FormRow>    
                    {this.props.step == this.props.currentStep &&
                        <div>
                        <c.FormField
                        title='Please enter following information so we can contact you '
                        type='remark'
                        />    
                        <c.FormField
                        title='First Name'
                        placeHolder='Enter your First Name'
                        id="first"
                        type='textinput'
                        />  
                        <c.FormField
                        title='Last Name'
                        placeHolder='Enter your Last Name'
                        id="last"
                        type='textinput'

                        />  
                        <c.FormField
                        title='Phone No'
                        placeHolder='Enter your phone number'
                        id="phone"
                        type='number'

                        />  
                        <c.FormField
                        title='Email'
                        placeHolder='Enter your Email Address'
                        id="email"
                        type='textinput'

                        />  
                        {this.state.showWarning &&
                        
                        <c.WarningText>
                            * please enter all information
                        </c.WarningText>
                        }
                        <c.Button>Next</c.Button>
                        </div>
                    }
            </c.Form>
        );
    }


}    



export default BasicInfoForm;