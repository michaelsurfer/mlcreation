import React, { Component } from 'react';
import styled from "styled-components";
import * as c from '../common/Css2.js';
import {apis} from '../common/config.js';
import img from '../image/contactusimg.jpg';
import Dialog from '../components/Dialog';
import {observer,inject} from "mobx-react";
import {validateEmail} from '../common/Utility.js';


const Wrapper=styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
`;

const Table=styled.table`
border-collapse: collapse;
border:0px solid grey;
`;

const LeftBox=styled.div`
    display:flex;
    flex:1;
    background-color:rgb(253,159,129);
    justify-content:center;
    align-items:center;
    
 `;
const LeftBoxInnerWrapper=styled.div`
    width:70%;
    padding:20px;
    display:flex;
    flex-direction:column;
    border:0px solid;
    justify-content:center;
    align-items:center;
`;

const RightBox=styled.div`
    display:flex;
    flex:1;
    justify-content:center;
    align-items:center;
    background-image:url(${img});
background-repeat:no-repeat;
background-size: cover;
`;
const RightBoxInnerWrapper=styled.div`
    width:70%;
    padding:20px;
    display:flex;
    flex-direction:column;
    border:0px solid;
    justify-content:center;
    align-items:center;
`;


const Title=styled.label`
    font-size:x-large;
    margin-top:20px;
    margin-bottom:15px;
`;

const Desc=styled.label`
    font-size:small;
    color:rgb(61,49,48);
`;

const RightTable=styled.table`
border-collapse: collapse;
border:0px solid grey;
`;

const FormText=styled.label`
    font-size:small;
`;

const TextInput=styled.input`
width:100%;
max-width:100%;
display:block;
margin:0;
padding:0;
background:transparent;
 `;


const TextArea=styled.textarea`
width:100%;
height:100px;;
border:none;
background:transparent;

`;
const StyledTd=styled.td`
margin:0;
padding:0;
overflow:hidden;
border:3px solid white;
background:transparent;
`;



@inject('store')
@observer
class ContactUsView extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);

    }

    handleSubmit(event){
        event.preventDefault();
        var email=event.target.email.value;
        var name=event.target.name.value;
        var text=event.target.text.value;

        if(email=="" || name=="" || text==""){
            this.props.store.showDialog("Please complete the form,",true,false);
            return;
        }
        if(!validateEmail(email)){
            this.props.store.showDialog("Please input a valid email address",true,false);
            return;
        }

        console.log("handleSubmit");
        console.log(email);
        console.log(name);

        fetch(apis.contactUs.endpoint,{

            method:'POST',
            headers:{
              'Accept':'application/json',
              'Content-Type':'application/json',
            },
            body:JSON.stringify({
                email:email,
                name:name,
                text:text
            }),
          }).then(response=>response.json())
          .then(data=>{
              this.props.store.showDialog("Thanks for your message, we will get back to you soon",true,false);
            //this.orderNo.uuid=data.uuid;
            //console.log("order created on the server with uuid "+data.uuid);
            //this.loading = false;
          });


      }


render(){
    return(

        <Wrapper>
            <Dialog/>
            <LeftBox>
            <LeftBoxInnerWrapper>
                <Title>ML Creation Co. Limited</Title>
                <Table>
                    <tr>
                        <td><Desc>Contact Person :</Desc></td>
                        <td><Desc>Susanna Lee</Desc></td>
                    </tr>
                    <tr>
                        <td><Desc>Mobile Phone :</Desc></td>
                        <td><Desc>+852 97 383 616</Desc></td>
                    </tr>
                    <tr>
                        <td><Desc>E-Mail :</Desc></td>
                        <td><Desc>susanna@mlcreationco.com</Desc></td>
                    </tr>
                    <tr>
                        <td><Desc>Address :</Desc></td>
                        <td>
                            <Desc>
                            Room 527, 5/F., Kwai on industry estate,
                            <br/>
                            103-113 Tia Lin Pai Road, Kwai Chung,
                            <br/>
                            N.T. Hong Kong    
                            </Desc>
                        </td>
                    </tr>
                    
                    <tr>
                        <td><Desc>Website :</Desc></td>
                        <td><Desc>www.mlcreationco.com</Desc></td>
                    </tr>
                </Table>
            </LeftBoxInnerWrapper>    
            </LeftBox>
            <RightBox>
            <RightBoxInnerWrapper>
            <form onSubmit={this.handleSubmit}>
                <RightTable>
                    <tr>
                        <StyledTd><TextInput placeholder="Your name" id='name'/></StyledTd>
                        <StyledTd><TextInput placeholder="email" id='email'/></StyledTd>
                    </tr>    
                    <tr>
                        <td style={{
                            'margin':'0',
                            'padding':'0',
                            'overflow':'hidden',
                            'border':'3px solid white'

                        }} colspan="2">
                        <TextArea id="text"/>
                        </td>
                    </tr>
                    <tr>
                        <td 
                        style={{
                            'margin':'0',
                            'padding':'0',
                            'overflow':'hidden',
                            'border':'3px solid white'

                        }}
                        
                        
                        colspan="2" align="center"><button>Submit</button></td>
                    </tr>
                    
                </RightTable>
                </form>
            </RightBoxInnerWrapper>    
            </RightBox>
        </Wrapper>
    );
}


}

export default ContactUsView;