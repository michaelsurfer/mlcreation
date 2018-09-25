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
display:none;


`;

const Logo=styled.div`
  display:flex;
  flex-wrap: wrap;
  margin: auto;
  padding:10px;
  border:0px solid;
`;
const MainBar=c.AutoFullRow.extend`
justify-content:space-between;
align-items:flex-end;
text-align:center;
padding:5px;
height:120px;
display:flex;
`;

const TopBar=c.AutoFullRow.extend`
background-color:${(props)=>props.color};
justify-content:flex-end;
align-items:center;
display:flex;
height:50px;
padding-right:10px;
border:0px solid white;

`;

const MenuGroup=c.RowPureDiv.extend`
width:40%;
flex-direction:${(props)=>props.reverse?'row-reverse':'row'};
border:0px solid;
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
    var color=c.ThemeColor[this.props.gender].top;
    if(this.props.gender=='general'){
      return(
      <TopBar color={color} gender={this.props.gender}>
          <c.Link white to="/YourAccount">RETAILER ACCOUNT</c.Link>
          <c.Link white to="/cart">SHOPPING LIST ({this.props.store.cartSize})</c.Link>
          <c.Link white to="/">LANGUAGE</c.Link>
      </TopBar>
      );
    }else{
      return(
        <TopBar color={color} gender={this.props.gender}>
            <c.Link  to="/YourAccount">RETAILER ACCOUNT</c.Link>
            <c.Link  to="/cart">SHOPPING LIST ({this.props.store.cartSize})</c.Link>
            <c.Link  to="/">LANGUAGE</c.Link>
        </TopBar>
        );

    }
  }
  renderNavBar(){
  return(

  <MainBar>
  <MenuGroup>
  <c.Link to="/">HOME</c.Link>
  <c.Link to="/productList/g">FOR HER</c.Link>
  <c.Link to="/productList/m">FOR HIM</c.Link>
  <c.Link to="/allComment">COMMENTS</c.Link>
  </MenuGroup>

  <Logo><img src={LogoImg}/></Logo>

  <MenuGroup reverse>
  <c.Link to="/aboutUs">ABOUT US</c.Link>
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
