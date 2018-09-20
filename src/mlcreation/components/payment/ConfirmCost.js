import React, { Component } from 'react';
import * as c from "./Css";
 
class ConfirmCost extends Component{
    constructor(props){
        super(props)
    
    }
    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.NextCallBackF(this.props.step)


    }


    render(){
        var productCost=parseFloat(this.props.productCost)
        var shipmentCost=parseFloat(this.props.shipmentCost)
        var totalCost=productCost+shipmentCost
        var active = (this.props.step == this.props.currentStep)

        return(
            <c.Form onSubmit={this.handleSubmit}>
                <c.FormRow border colored
                    onClick={()=>this.props.ReOpenCallBackF(this.props.step)}
                >
                    <c.FormTitle active={active}>
                        3. Payment Detail
                    </c.FormTitle>
                </c.FormRow>    
                    {active &&
                        <div>
                        <c.FormField
                        title='Please conform payment detail'
                        type='remark'
                        />       
                        <c.FormField
                        title='Product Cost'
                        placeHolder={productCost}
                        type='cost'
                        />  
                        <c.FormField
                        title='Shipment Cost'
                        placeHolder={shipmentCost}
                        type='cost'
                        />  
                        <c.FormField
                        title='Total Cost'
                        placeHolder={totalCost}
                        type='cost'
                        />  
                       
                        <c.Button>Next</c.Button>
                        </div>
                    }
            </c.Form>
        );
    }


}    



export default ConfirmCost;