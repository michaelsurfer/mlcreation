import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import * as c from '../common/Css2.js';
import { device } from "../common/device";
import LogoImg from '../image/logo.png';
import menuIcon from '../image/menuIcon.png';
import {observer,inject} from "mobx-react";



const DropDownLink=styled.label`

padding:5px;

`;

const DropDownMenu=c.AutoFullCol.extend`
display:flex;
@media ${device.tablet}
 {
   display:none;
 };

`;

const Logo=styled.div`
  display:flex;
  flex-wrap: wrap;
  margin: auto;
`;
const MainBar=c.AutoFullRow.extend`
justify-content:space-between;
align-items:flex-end;
text-align:center;
padding:5px;
display:none;
@media ${device.tablet}
 {
   display:flex
 };

`;

const TopBar=c.AutoFullRow.extend`
background-color:rgb(13,34,33);
justify-content:space-between;
display:none;
@media ${device.tablet}
 {
   display:flex
 };
`;

const MenuGroup=c.RowPureDiv.extend`
width:360px;
flex-direction:${(props)=>props.reverse?'row-reverse':'row'};

`;

const TopBarLink=styled.label`
color:rgb(216,229,238);
margin:10px;
`;





@inject('store')
@observer
class NavBar extends Component{
  constructor(props){
    super(props);
    this.state={show:false};
  }


  renderDropMenu(){
    return(
      <DropDownMenu>
      <div><img src={menuIcon} onClick={()=>this.setState({show:!this.state.show})}/></div>
      {this.state.show?(
      <c.ColPureDiv>
      <DropDownLink>HOME</DropDownLink>
      <DropDownLink>FOR HER</DropDownLink>
      <DropDownLink>FOR HIM</DropDownLink>
      <DropDownLink>COMMENTS</DropDownLink>
      <DropDownLink>RETAILER ACCOUNT</DropDownLink>
      <DropDownLink>SHOPPING LIST</DropDownLink>
      <DropDownLink>LANGUAGE</DropDownLink>
       </c.ColPureDiv>
    ):(<div></div>)
    }
    </DropDownMenu>

    );
  }

  renderTopBar(){
    return(
      <TopBar>
      <div>
      </div>
      <div>
      <c.Link to="/YourAccount">RETAILER ACCOUNT</c.Link>
      <c.Link to="/cart">SHOPPING LIST ({this.props.store.cartSize})</c.Link>
      <TopBarLink>LANGUAGE</TopBarLink>
      </div>
      </TopBar>

    );
  }
  renderNavBar(){
  return(

  <MainBar>
  <MenuGroup>
  <c.Link to="/">HOME</c.Link>
  <c.Link to="/productList/g">FOR HER</c.Link>
  <c.Link to="/productList/m">FOR HIM</c.Link>
  <c.Link to="/product/comment">COMMENTS</c.Link>
  </MenuGroup>

  <Logo><img src={LogoImg}/></Logo>

  <MenuGroup reverse>
  <c.Link to="/product/about">ABOUT US</c.Link>
  <c.Link to="/contact">CONTACT US</c.Link>

  </MenuGroup>
  </MainBar>
   );
  }


  render(){
    return(
      <c.AutoFullCol>
      {this.renderDropMenu()}
      {this.renderTopBar()}
      {this.renderNavBar()}
      </c.AutoFullCol>
    );
  }

}


export default NavBar;
