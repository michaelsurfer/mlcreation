import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import * as c from '../common/Css2.js';
import { device } from "../common/device";
import {imagePath} from '../common/config.js';


const Image=styled.div`
  position:absolute;
  left:${(props)=>props.left?'0px':''};
  right:${(props)=>props.right?'0px':''};

  width:150px;
  height:150px;
  margin-left:2px;
  margin-right:2px;
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

const ReturnInnerDescCell=(({direction,productID,color})=>{
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
        ;malsjflkasjlidfjaasdfasfdasfasfasdfaservris;ff
      </DescArea>
    </InnerDescCell>
  )
    break;
    case 'right':
    return(
    <InnerDescCell>
    <Image img={url2} right size='contain'/>

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
const Cell=(({direction,productID,color})=>{
  return(
    <OutterCell>
      <InnerTitleCell>
        Title
      </InnerTitleCell>
      <ReturnInnerDescCell 
        direction={direction} 
        productID={productID} 
        color={color}
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
    section1:{title:"title",desc:"dasdfljasdfnlasndf"},
    section2:{title:"title",desc:"dasdfljasdfnlasndf"}
  }
})=>{

  return(
    <div>
    <Row>
    <Cell direction='left' 
      section={data}
      productID={productID}
      color={color}
      />
    <Cell direction='right' 
      section={data}
      productID={productID}
      color={color}      
      />
    </Row>
    <ReturnLastRow/>
    </div>
  );

});
