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

        var data={
           
            first:ev.target.first.value,
            last:ev.target.last.value,
            phone:ev.target.phone.value,
            email:ev.target.email.value
            
        }


        if(data.first!="" && data.last!="" && data.email!=""){
        this.setState({showWarning:false})    
        this.props.NextCallBackF(this.props.step,data)
        }else{
        this.setState({showWarning:true})    
        }
    }    

    render(){
        var active = (this.props.step == this.props.currentStep)
         return(
            <c.Form onSubmit={this.handleSubmit}>
                <c.FormRow border colored
                    onClick={()=>this.props.ReOpenCallBackF(this.props.step)}
                >
                    <c.FormTitle active={active}>
                        1. Basic Info
                    </c.FormTitle>
                </c.FormRow>    
                    {active &&
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
                        placeHolder='Enter your phone number (optional)'
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