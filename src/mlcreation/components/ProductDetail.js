import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import * as c from '../common/Css2.js';
import { device } from "../common/device";
import itemImg from '../image/item.png';


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
  display:block;
  @media ${device.tablet}{
  display:block;
   }

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
width:100%;
justify-content:center;
border:0px solid blue;
padding:10px;
`;

const InnerDescCell=styled.div`
border:0px solid green;
display:flex;
flex:1;
width:100%;
position:relative;
min-height:${(props)=>props.noMin ? '10px':'150px'};
`;

const OutterCell=styled.div`
display:flex;
flex:1;
flex-direction:column;
border:1px solid white;

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

const ReturnInnerDescCell=(({direction})=>{
  switch(direction){
    case 'left':
    return(
    <InnerDescCell>
      <Image/>
       <DescArea left>
        ;malsjflkasjlidfjaasdfasfdasfasfasdfaservris;ff
      </DescArea>
    </InnerDescCell>
  )
    break;
    case 'right':
    return(
    <InnerDescCell>
    <Image right/>

      <DescArea >
        ;saasdfasfasd;fkajw;fjaemwl;kfmnalk;wmnflawnflasndlfnmdnlaksdnfl;ff
        asdijaslkdfnmliasdhjfliadijas
        asdlfhalsjdnfljasndlfadsjhilf
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
const Cell=(({direction})=>{
  return(
    <OutterCell>
      <InnerTitleCell>
        Title
      </InnerTitleCell>
      <ReturnInnerDescCell direction={direction}/>
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
  data={
    section1:{title:"title",desc:"dasdfljasdfnlasndf"},
    section2:{title:"title",desc:"dasdfljasdfnlasndf"}
  }
})=>{

  return(
    <div>
    <Row>
    <Cell direction='left' section={data}/>
    <Cell direction='right' section={data}/>
    </Row>
    <ReturnLastRow/>
    </div>
  );

});
