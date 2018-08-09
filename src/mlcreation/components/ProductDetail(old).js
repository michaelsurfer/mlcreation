import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import * as c from '../common/Css2.js';
import { device } from "../common/device";
import itemImg from '../image/item.png';


const Wrapper=styled.div`
display:flex;
flex:1;
flex-direction:column;
width:100%;
height:auto;
background-color:white;
@media ${device.tablet}{
  height:500px;
 }
`;
const Row=styled.div`
display:flex;
flex:1;
flex-direction:column;
width:100%;
background-color:rgb(241,181,158);
border-bottom:${(props)=>props.bottom ? ('1px solid white'):('0px solid white')}
border-left:${(props)=>props.whiteline ? ('1px solid white'):('0px solid white')}

@media ${device.tablet}{
  flex-direction:row;
 }


`;
const Cell=styled.div`
position:relative;
display:flex;
flex:1;
flex-direction:column;
 background-color:rgb(241,181,158);
border-bottom:${(props)=>props.bottom ? ('1px solid white'):('0px solid white')}
border-left:${(props)=>props.whiteline ? ('1px solid white'):('0px solid white')}
justify-content:flex-start;
align-items:center;
padding:10px;

`;
const OutterCell=styled.div`
display:flex;
flex:1;
flex-direction:column;
border-bottom:${(props)=>props.bottom ? ('1px solid white'):('0px solid white')}
border-left:${(props)=>props.whiteline ? ('1px solid white'):('0px solid white')}

`;

const Image=styled.div`
  position:absolute;
  left:${(props)=>props.left?'0px':''};
  right:${(props)=>props.right?'0px':''};

  width:150px;
  height:150px;
  margin-left:2px;
  margin-right:2px;
  background-image:url(${itemImg});
  background-repeat:no-repeat;
  background-size: cover;
  background-position: center;
  z-index:1;
  display:none;
  @media ${device.tablet}{
  display:block;
   }

`;

const Title=styled.label`
  z-index:2;
`;
const TitleArea=styled.div`
display:flex;
width:100%;
justify-content:center;
align-items:center;
border: 0px solid grey;
padding:5px;

`;
const DescArea=styled.div`
display:flex;
flex:1;
padding:10px;
left:${(props)=>props.left?'0px':''};
right:${(props)=>props.right?'0px':''};

position:relative;
flex-direction:column;
border: 0px solid red;

@media ${device.tablet}{
position:absolute;

 }


 `;

 const DescArea2=styled.div`
 display:flex;
 flex:1;
 padding:10px;
 left:${(props)=>props.left?'0px':''};
 right:${(props)=>props.right?'0px':''};

 flex-direction:column;
 border: 1px solid red;
  `;

const Desc=styled.label`
z-index:2;
padding:10px;

`;

export const ProductDetail=(({})=>{
  return(
    <Wrapper>
      <Row bottom>
      <OutterCell>
      <TitleArea>
        <Title>Button Functions:</Title>
      </TitleArea>
      <Cell>
        <DescArea right>
        <Desc>a;ksdfjl;kasmdf;ksmf;dasfd</Desc>
        <Desc>a;ksdfjl;kasmdf;ksmf;dasfd</Desc>
        <Desc>a;ksdfjl;kasmdf;ksmf;dasfd</Desc>
        <Desc>a;ksdfjl;kasmdfasfsdfasdf;ksmf;dasdfsdfasdfasdfasfd</Desc>
        </DescArea>
        <Image left/>
      </Cell>
      </OutterCell>

      <OutterCell whiteline>
      <TitleArea>
        <Title>Button Functions:</Title>
      </TitleArea>
      <Cell>
       <Image right/>
      <DescArea left>
      <Desc>a;ksdfjl;kasmdf;ksmf;dasfd</Desc>
      <Desc>a;ksdfjl;kasmdf;ksmf;dasfd</Desc>
      <Desc>a;ksdfjl;kasmdf;ksmf;dasfd</Desc>
      <Desc>a;ksdfjl;kasmdfasfsdfasdf;ksmf;dasdfsdfasdfasdfasfd</Desc>
      </DescArea>
      </Cell>
      </OutterCell>
      </Row>




      <Row bottom>

      <OutterCell>
      <TitleArea>
        <Title>Button Functions:</Title>
      </TitleArea>
      <Cell>
        <DescArea right>
        <Desc>a;ksdfjl;kasmdf;ksmf;dasfd</Desc>
        <Desc>a;ksdfjl;kasmdf;ksmf;dasfd</Desc>
        <Desc>a;ksdfjl;kasmdf;ksmf;dasfd</Desc>
        <Desc>a;ksdfjl;kasmdfasfsdfasdf;ksmf;dasdfsdfasdfasdfasfd</Desc>
        </DescArea>
        <Image left/>
      </Cell>
      </OutterCell>


      <OutterCell whiteline>
      <TitleArea>
        <Title>Button Functions:</Title>
      </TitleArea>
      <Cell>
         <Desc>a;ksdfjl;kasmdfasdfasdfsfasfasdfasdf;ksmf;dasfd<br/>asfasdfasfasfdasfasfasfas</Desc>


        <TitleArea>
         <Title>Button Functions:</Title>
       </TitleArea>

       <Desc>a;ksdfjl;kasmdf;ksmf;dasfd</Desc>
       <Desc>a;ksdfjl;kasmdf;ksmf;dasfd</Desc>

       </Cell>

      </OutterCell>
      </Row>
    </Wrapper>
  );
});


/*
const Title=styled.label`
color:black;
font-size:small;
padding:5px;
font-weight:bold;
`;
const Desc=styled.label`
color:black;
font-size:small;
padding:5px;
`;

const Row=c.RowCenterDiv.extend`
border-bottom:${(props)=>props.bottom ? ('1px solid white'):('0px solid white')}
border-left:${(props)=>props.whiteline ? ('1px solid white'):('0px solid white')}
border-right:0px solid white;
background-color:rgb(241,181,158);
flex-direction:column;
margin:0px;
width:100%;
padding:0px;

@media ${device.tablet}{
  flex-direction:row;
 }
`;

const ColPureDiv=c.ColPureDiv.extend`
justify-content:center;
align-items:${(props)=>props.center?('center'):('flex-start')};
flex:${(props)=>props.flex};
width:100%;
`;


const ImageRow=c.RowCenterDiv.extend`
background-color:rgb(241,181,158);
width:100%;
justify-content:space-around;
display:none;
@media ${device.tablet}{
  display:flex;
 }
`;

export const ProductDetail=({})=>{
  return(
    <c.FullPureDiv direction='column'>

      <Row bottom>
        <Row>
          <ColPureDiv flex='1'>
          IMAAGE
          </ColPureDiv>

          <ColPureDiv flex='3'>
          <ColPureDiv center><Title>Button Functions:</Title></ColPureDiv>

            <p>dewrtewrtewtewrtertwrfsg</p>
            <p>dfsg</p>
            <p>dfsg</p>
          </ColPureDiv>
      </Row>

      <Row whiteline>
        <ColPureDiv flex='3'>
        <ColPureDiv center><Title>How To Charge It?</Title></ColPureDiv>

          <p>dfsg</p>
          <p>dfsg</p>
          <p>dfsg</p>
        </ColPureDiv>

        <ColPureDiv flex='1'>
      IMAGE
        </ColPureDiv>
      </Row>
    </Row>


    <Row bottom>
      <Row>
        <ColPureDiv flex='1'>
        IMAGE
        </ColPureDiv>

        <ColPureDiv flex='3'>
          <ColPureDiv center><Title>How to Clean it?</Title></ColPureDiv>
          <Desc>It is splashproof</Desc>
          <Desc>Clean it with antibacterial soap after each use</Desc>
          <Desc>Do not use alcohol,acetone-based or gasoline-based clearning products</Desc>

        </ColPureDiv>
    </Row>

    <Row whiteline>
      <ColPureDiv center>
      <Title>Important Tips:</Title>
      <Desc>A. kashfkjashbfjkabsdjkfads</Desc>
      <Title>Disclaimer:</Title>
      <Desc>A. kashfkjashbfjkabsdjkfads</Desc>


      </ColPureDiv>
    </Row>

  </Row>

 <Row>
      <ImageRow>
      <div>image row</div>
      <div>image row</div>
      <div>image row</div>
      </ImageRow>
 </Row>
    </c.FullPureDiv>
  )
}
*/
