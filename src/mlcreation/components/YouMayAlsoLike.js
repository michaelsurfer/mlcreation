import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import {imagePath,productImagePath} from '../common/config.js';
import data from '../asset/ProductList.json';


let Combination={
    m:[ 
                    ['VA','BR','CBR','RHT'],
                    ['SR','CBR','ITS','MR'],
                    ['MR','RHT','SR','DB'],
                    ['DB','VA','RHT','MR'],
                    ['BR','VA','MR','RHT'],
                    ['SR','ITS','DB','MR'],
                    ['MR','ITS','VA','PR'],
                    ['ITS','VA','DB','CBR']
    ],
    g:[
                    ['LB','ITS','RVKB','GF'],
                    ['PF','GB','LB','DB'],
                    ['RC','CB','GF','RVKB'],
                    ['DB','ITS','RC','LB'],
                    ['LB','EVVA','DB','RHT'],
                    ['CB','LB','RC','GF'],
                    ['GF','RVKB','RC','CB'],
                    ['RVKB','EVVA','LB','GF']

    ]
}
let ProductIDArray={
    m:[
        {name:'VA',color:'TMO'},
        {name:'SR',color:'GBK'},
        {name:'BR',color:'GBK'},
        {name:'MR',color:'GBK'},
        {name:'ITS',color:'G'},
        {name:'PR',color:'BK'},
        {name:'CBR',color:'GGY'},
        {name:'RHT',color:'GBK'},
    ],
    g:[
        {name:'CB',color:'GO'},
        {name:'ITS',color:'S'},
        {name:'GF',color:'GSPO'},
        {name:'RVKB',color:'GBK'},
        {name:'GB',color:'GBK'},
        {name:'RC',color:'SGRBL'},
        {name:'LB',color:'GO'},
        {name:'RHT',color:'GSHPI'},
        {name:'PF',color:'R'},
        {name:'DB',color:'GO'}
    ]
}

const Wrapper=styled.div`
display:flex;
width:100%;
height:414px;
background-color:black;
align-items:center;
flex-direction:column;
`
const InnerWrapper=styled.div`
width:100%;
height:330px;
background-color:white;
`
const StyledProductBox=styled.a`
  width:100%;
  height:330px;
  background-color:rgb(239,238,242);
  margin:0px 0px 0px 0px;
  background-image:url(${(props)=>props.img});
  background-repeat:no-repeat;
  background-size:contain;
  background-position: center;
  border-left:1px solid white;
  border-right:1px solid white;

  flex-direction:row; 
`;
const StyledRow=styled.div`
display:flex;
flex-direction:rwo;
flex-wrap:no-wrap;
background-color:white;
justify-content:space-between;
 `;

 const Title=styled.label`
 color:white;
height:30px;
margin-top:10px;
 `
const RenderImageBoxs=({gender})=>{
    var totalSize = Combination[gender].length
    var id =   Math.floor(Math.random() * Math.floor(totalSize));
    var combinationArray  = Combination[gender][id]
    var result = []
    //for(var item in combinationJson){
    combinationArray.forEach((item)=>{
        var colorArray=data[item].color
        var randomColor=Math.floor(Math.random() * Math.floor(colorArray.length))
        var productColor=colorArray[randomColor]
        result.push(
            <ImageBox
                gender={gender}
                productCode={item}
                productColor={productColor}
            />
        )
    })

    return (
        <StyledRow>

        {result}
        </StyledRow>

        )


}
const ImageBox = ({gender,productCode,productColor})=>{
    
    var imgUrl=productImagePath+productCode+"/"+productColor+"/1.png";
    var link = "/product/"+gender+"/"+productCode;

    return(         
         <StyledProductBox href={link} img={imgUrl}/>
        )
}


export const YouMayAlsoLike=({gender})=>{
    //randomize 4 number
    var totalSize = ProductIDArray[gender].length
    console.log('total size'+totalSize)
    var random =   Math.floor(Math.random() * Math.floor(totalSize));

    return(
    <Wrapper>
        <Title>YOU MAY ALSO LIKE</Title>
        <InnerWrapper>
                 <RenderImageBoxs
                    gender={gender}
                    />
         </InnerWrapper>
    </Wrapper>)
    
}