import React, { Component } from 'react';
import styled from "styled-components";
import * as c from '../common/Css2.js';
import {apis} from '../common/config.js';
import img from '../image/contactusimg.jpg';
import Dialog from '../components/dialog/Dialog';
import {observer,inject} from "mobx-react";
import {validateEmail} from '../common/Utility.js';
import '../../index.css'


const Wrapper=styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
`;
const InnerWrapper=styled.div`
display:flex;
flex-direction:row;
width:100%;
`;

const Table=styled.table`
border-collapse: collapse;
border:0px solid green;
`;

const LeftBox=styled.div`
    display:flex;
    flex:1;
    background-color:rgb(224,199,200);
    justify-content:center;
    align-items:center;
    height:608px;
 `;
const LeftBoxInnerWrapper=styled.div`
    width:70%;
    height:100%;
    padding:0px;
    display:flex;
    flex-direction:column;
    border:0px solid;
    justify-content:space-around;
  `;

const WhiteLine=styled.div`
    width:100%;
    height:18px;
    background-color:white;
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
    border:0px solid black;
    justify-content:center;
    align-items:center;
`;


const Title=styled.label`
    font-size:40pt;
    margin-top:20px;
    margin-bottom:15px;
    font-family: 'Yellowtail', cursive;

`;

const Desc=styled.label`
    font-size:18pt;
    color:rgb(61,49,48);
 `;

const RightTable=styled.table`
border-collapse: collapse;
border:1px solid grey;
width:640px;
height:327px;
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
border:none;
font-size:20pt;
&::-webkit-input-placeholder {
    color: black;
    font-size:18pt;
    font-weight:bold;
  }

 `;


const TextArea=styled.textarea`
width:100%;
height:100px;
border:none;
background:transparent;
font-size:20px;
`;
const StyledTd=styled.td`
margin:0;
padding:5px;
overflow:hidden;
border:3px solid white;
background:transparent;
`;

const StyledTr=styled.tr`
height:50px;
`;

const LeftTd=styled.td`
vertical-align: top;

`;

const Button=styled.button`
width:100%;
height:100%;
background-color: Transparent;
border: none;
font-color:black;
font-size:20pt;
font-weight:bold;

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
            <InnerWrapper>
            <Dialog/>
            <LeftBox>
            <LeftBoxInnerWrapper>
                 <Table>
                    <tr>
                        <LeftTd colSpan={2}
                            style={{
                                "height":"150px"                            }}
                        >
                        <Title>ML Creation Co. Limited</Title>
                        </LeftTd>
                    </tr>
                    <StyledTr>
                        <LeftTd><Desc>Contact Person :</Desc></LeftTd>
                        <LeftTd><Desc>Susanna Lee</Desc></LeftTd>
                    </StyledTr>
                    <StyledTr>
                        <LeftTd><Desc>Mobile Phone :</Desc></LeftTd>
                        <LeftTd><Desc>+852 97 383 616</Desc></LeftTd>
                    </StyledTr>
                    <StyledTr>
                        <LeftTd><Desc>E-Mail :</Desc></LeftTd>
                        <LeftTd><Desc>susanna@mlcreationco.com</Desc></LeftTd>
                    </StyledTr>
                    <StyledTr>
                        <LeftTd><Desc>Address :</Desc></LeftTd>
                        <LeftTd>
                            <Desc>
                            Room 527, 5/F., Kwai on industry estate,
                            <br/>
                            103-113 Tia Lin Pai Road, Kwai Chung,
                            <br/>
                            N.T. Hong Kong    
                            </Desc>
                        </LeftTd>
                    </StyledTr>
                    
                    <StyledTr>
                        <td><Desc>Website :</Desc></td>
                        <td><Desc>www.mlcreationco.com</Desc></td>
                    </StyledTr>
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
                        
                        
                        colspan="2" align="center"><Button>Submit</Button></td>
                    </tr>
                    
                </RightTable>
                </form>
            </RightBoxInnerWrapper>    
            </RightBox>
            </InnerWrapper>
            <WhiteLine/>
        </Wrapper>
    );
}


}

export default ContactUsView;