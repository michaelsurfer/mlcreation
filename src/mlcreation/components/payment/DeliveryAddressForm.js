import React, { Component } from 'react';
 import * as c from "./Css";
 
class DeliveryAddressForm extends Component{
    constructor(props){
        super(props)
        this.state={
            showWarning:false
        };
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        var address=ev.target.address.value
         if(address!=""){
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
                        2. Delivery Info
                    </c.FormTitle>
                </c.FormRow>    
                    {this.props.step == this.props.currentStep &&
                        <div>
                        <c.FormField
                        title='Please enter your delivey address below'
                        type='remark'
                        />   
                        <c.FormField
                        title=''
                        placeHolder='Enter your address'
                        id="address"
                        type='textarea'
                        noTitle={true}
                        />  
                        {this.state.showWarning &&
                        
                        <c.WarningText>
                            * please enter deliver address
                        </c.WarningText>
                        }
                        <c.Button>Next</c.Button>
                        </div>
                    }
            </c.Form>
        );
    }


}    



export default DeliveryAddressForm;