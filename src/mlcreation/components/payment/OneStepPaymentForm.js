import React, { Component } from 'react';
import styled from "styled-components";
import {Form,Table,Tr,Th,Td,Input} from '../../common/Css2';
import {Elements, StripeProvider} from 'react-stripe-elements';
import InjectedCheckoutForm from './CheckoutForm';
import stripeImg from '../../image/stripe.png';

const StripeImage=styled.img`
display: block;
width: 60%;
height: auto;
margin-left: auto;
margin-right: auto;
 `;

const Title=styled.label`
font-size:21px;
margin-top:20px;
padding:20px;
`
const TotalText=styled.label`
font-size:25px;
padding:20px;
`
class OneStepPaymentForm extends Component{
    constructor(props){
        super(props)
        this.PaymentDoneCallBackF=this.PaymentDoneCallBackF.bind(this);

        this.state={
            loading:false,
            formValidated:false,
            formData:{
                first:'',
                last:'',
                address:'',
                country:'',
                email:'',
                phone:''
            }
        }
    }
    PaymentDoneCallBackF(token){
        var json ={
            token:token,
            info:this.state.formData
        }
        this.props.PaymentDoneCallBackF(json)
    }
   
    validateItem(e){
        var formData = this.state.formData
        var valid = true
        for(var item in formData){
            if(formData[item]==''){
                valid=true
                break
            }
        }
        this.setState({formValidated:valid})
    }
    updateItem(e){
        var value = e.target.value
        var key = e.target.id
        var formData = this.state.formData
        formData[key]=value
        this.setState({
            formData:formData
        })
    }

    render(){
        var total = this.props.total
        var TitleTDHeight= '40px';
        return(
            <Form>
                <Table>
                    <Tr bottom><Td colSpan={2} height={TitleTDHeight}>
                        <Title>
                        Please enter your information:
                        </Title></Td>
                    </Tr>
                    <Tr>
                        <Th>First Name:</Th>
                        <Td>
                            <Input 
                                id='first'
                                placeholder='enter your first name'
                                onChange={(e)=>this.updateItem(e)}
                                onBlur={(e)=>this.validateItem(e)}
                                value={this.state.formData.first}
                                />
                        </Td>
                    </Tr>
                    <Tr>
                        <Th>Last Name:</Th>
                        <Td>
                            <Input
                                id='last'
                                placeholder='enter your last name'
                                onChange={(e)=>this.updateItem(e)}
                                onBlur={(e)=>this.validateItem(e)}
                                value={this.state.formData.last}
                            />
                        </Td>
                    </Tr>
                    <Tr bottom top><Td colSpan={2} height={TitleTDHeight}>
                        <Title>
                        Please enter your delivery information:
                        </Title></Td>
                    </Tr> 
                    <Tr>
                        <Th>Delivery Address:</Th>
                        <Td>
                            <Input
                                id='address'
                                placeholder='enter your delivery address'
                                onChange={(e)=>this.updateItem(e)}
                                onBlur={(e)=>this.validateItem(e)}
                                value={this.state.formData.address}
                            />
                        </Td>
                    </Tr>
                    <Tr>
                        <Th>Country:</Th>
                        <Td>
                            <Input
                                id='country'
                                placeholder='enter your country name'
                                onChange={(e)=>this.updateItem(e)}
                                onBlur={(e)=>this.validateItem(e)}
                                value={this.state.formData.country}
                            />
                        </Td>
                    </Tr>
                    <Tr>
                        <Th>Email:</Th>
                        <Td>
                            <Input
                                id='email'
                                placeholder='enter your email address'
                                onChange={(e)=>this.updateItem(e)}
                                onBlur={(e)=>this.validateItem(e)}
                                value={this.state.formData.email}
                            />
                        </Td>
                    </Tr>                    
                    <Tr>
                        <Th>Phone:</Th>
                        <Td>
                            <Input
                                id='phone'
                                placeholder='enter your phone number'
                                onChange={(e)=>this.updateItem(e)}
                                onBlur={(e)=>this.validateItem(e)}
                                value={this.state.formData.phone}
                            />
                        </Td>
                    </Tr>

                    
                    <Tr bottom top><Td colSpan={2} height={TitleTDHeight}>
                        <Title>
                        Please enter your Card information:
                        </Title></Td>
                    </Tr>         
                    <Tr>
 
                    </Tr>
                    <Tr>
                        <Th><TotalText>Total:</TotalText></Th>
                        <Td><TotalText>USD {total}</TotalText></Td>
                    </Tr>            
                    <Tr>
                    <Td colSpan={2}>    
                    <StripeProvider apiKey="pk_test_yqi17IvtKCcZp2JUa3tnDwOe">
                    <Elements>
                    <InjectedCheckoutForm
                        canPay={this.state.formValidated}
                        total={total}
                        orderNo='test'
                        uuid='test'
                        PaymentDoneCallBackF={this.PaymentDoneCallBackF}
                    />
                    </Elements>
                    </StripeProvider>
                    </Td>
                    </Tr>
                    <Td colSpan={2}>
                    <StripeImage src={stripeImg}/>
                    </Td>

                </Table>
            </Form>
        )
    }
    

}

export default OneStepPaymentForm;