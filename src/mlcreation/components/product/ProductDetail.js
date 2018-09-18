import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import * as c from '../../common/Css2.js';
import { device } from "../../common/device";
import {imagePath} from '../../common/config.js';
import {HowToUse} from './HowToUse';

const Image=styled.div`
  position:absolute;
  left:${(props)=>props.left?'0px':''};
  right:${(props)=>props.right?'0px':''};

  width:160px;
  height:180px;
  margin-left:10px;
  margin-right:10px;
  margin-top:40px;
  background-image:url(${(props)=>props.img});
  background-repeat:no-repeat;
  background-size: ${(props)=>props.size};
  background-position: center 0;
  z-index:1;
  display:block;
  @media ${device.tablet}{
  display:block;
   }
`;   

/*
const Image=styled.div`
  position:absolute;
  left:${(props)=>props.left?'0px':''};
  right:${(props)=>props.right?'0px':''};

  width:150px;
  height:150px;
  margin-left:2px;
  margin-right:2px;
  z-index:1;
  display:block;
`;
*/
const Wrapper=styled.div`
margin-top:10px;
`;


const DescArea=styled.div`
  display:flex;
  width:${(props)=>props.center?'100%':'80%'};
  align-items:${(props)=>props.center?'center':''};
  justify-content:${(props)=>props.center?'center':''};
  padding:10px;
  overflow-wrap:break-word;
  word-break:break-all;
  margin-left:${(props)=>props.left?'130px':''};
  margin-right:${(props)=>props.right?'150px':''};
  border:0px solid red;
  min-width: 10%;
  z-index:2;

`;

const InnerTitleCell=styled.div`
display:flex;
width:auto;
justify-content:center;
border:1px solid green;
padding:10px;
height:100px;
align-items:center;
font-size:21pt;
font-family:Arial;
font-weight:bold;
`;

const InnerDescCell=styled.div`
border:1px solid green;
display:flex;
width:100%;
position:relative;
min-height:${(props)=>props.noMin ? '10px':'150px'};
`;

const OutterCell=styled.div`
display:flex;
flex:1;
flex-direction:column;
border:1px solid blue;
height:auto;
 `;


 const Row=styled.div`
 display:flex;
 flex:1;
 flex-direction:column;
 width:100%;
 background-color:rgb(241,181,158);

 @media ${device.tablet}{
   flex-direction:row;
   width:100%;

  }
  `

const ReturnInnerDescCell=(({direction,productID,color,center})=>{
  //var url1 = imagePath+"/products/"+productID+"/1/"+color+".png";
  //var url2 = imagePath+"/products/"+productID+"/2/"+color+".png";

  var url1=imagePath+"/products/"+productID+"/"+color+"/1.jpg";
  var url2=imagePath+"/products/"+productID+"/"+color+"/2.jpg";



  switch(direction){
    case 'left':
    return(
    <InnerDescCell>
      <Image img={url1} size='contain'/>
      <DescArea left>
      <HowToUse center={center}/>
      </DescArea>
    </InnerDescCell>
  )
    break;
    case 'right':
    return(
    <InnerDescCell>
    <Image img={url2} right size='contain'/>

      <DescArea >
      <HowToUse center={center}/>

      </DescArea>
    </InnerDescCell>
  )
    break;
    case 'bottom':
    return(
    <InnerDescCell>
      <DescArea >
        ;saasdfasfasd;fkajw;fjaemwl;kfmnalk;wmnflawnflasndlfnmdnlaksdnfl;ff
        asdijaslkdfnmliasdhjfliadijas
        asdlfhalsjdnfljasndlfadsjhilf
      </DescArea>
    </InnerDescCell>

  )
    break;
  }
});
const Cell=(({direction,productID,color,title,center})=>{
  return(
    <OutterCell>
      <InnerTitleCell>
        {title}
      </InnerTitleCell>
      <ReturnInnerDescCell 
        direction={direction} 
        productID={productID} 
        color={color}
        center={center}
      />
    </OutterCell>
  );
});

const ReturnLastRow=()=>{
  return(
    <Row>
    <OutterCell>
      <InnerTitleCell>
        How to Clean it?
      </InnerTitleCell>
      <ReturnInnerDescCell direction='left'/>
    </OutterCell>
    <OutterCell>
      <InnerTitleCell>
            Important Tips:
      </InnerTitleCell>
      <InnerDescCell noMin>
        <DescArea center>
          ;saasdfasfasd;fkajw;fjaemwl;kfmnalk;wmnflawnflasndlfnmdnlaksdnfl;ff
          asdijaslkdfnmliasdhjfliadijas
          asdlfhalsjdnfljasndlfadsjhilf
        </DescArea>
      </InnerDescCell>
       <InnerTitleCell>
            Important Tips:
      </InnerTitleCell>
      <InnerDescCell noMin>
        <DescArea center>
          ;saasdfasfasd;fkajw;fjaemwl;kfmnalk;wmnflawnflasndlfnmdnlaksdnfl;ff
          asdijaslkdfnmliasdhjfliadijas
          asdlfhalsjdnfljasndlfadsjhilf
        </DescArea>
      </InnerDescCell>
       </OutterCell>
    </Row>
  );
};

export const ProductDetail=(({
  productID,color,
  data={
    section1:{title:"Button Function",desc:"dasdfljasdfnlasndf"},
    section2:{title:"How To Charge It?",desc:"dasdfljasdfnlasndf"}
  }
})=>{

  return(
    <Wrapper>
    <Row>
    <Cell direction='left' 
       center={false}
      section={data}
      productID={productID}
      color={color}
      title="Button Functions:"
      />
    <Cell direction='right' 
      center={false}
      section={data}
      productID={productID}
      color={color}   
      title="How To Charge It?"   
      />
    </Row>
    <Row>
    <Cell direction='left' 
      center={false}
      section={data}
      productID={productID}
      color={color}
      title="Button Functions:"
      />
    <Cell direction='right' 
      center={true}
      section={data}
      productID={productID}
      color={color}   
      title="How To Charge It?"   
      />
    </Row>
 
    </Wrapper>
  );

});
