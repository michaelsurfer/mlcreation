import React, { Component } from 'react';
import './assets/styles/for_her.css';
import './assets/styles/for_him.css';
import './assets/styles/global.css';
import './assets/styles/home.css';


class NavBar extends Component{

    constructor(props){
        super(props)
    }
    render(){
        return(
        <div>
        <nav>
            <div id="Topbar" class="table">
                <div class="table-tr">
                    <div class="table-td">
                        <img id="CompanyLogoIMG" src="assets/images/Company_logo_home.png" alt="Company Logo"/>
                    </div>
                    <div class="table-td">
                        <div id="TopbarNavigation">
                            <a href="/yourAccount">RETAILER ACCOUNT</a>
                            <a href="#">SHOPPING LIST</a>
                            <a href="#">LANGUAGE</a>                            
                        </div>
                    </div>
                </div>
            </div>  
            <div id="Logobar" class="table">
                <div class="table-tr">
                    <div class="table-td">
                        <div id="LogobarLeftNavigation">
                            <a href="home.html">HOME</a>
                            <a href="for_her.html">FOR HER</a>  
                            <a href="for_him.html">FOR HIM</a>  
                            <a href="#">COMMENTS</a>  
                        </div>
                    </div>
                    <div class="table-td">
                        <img id="BrandLogoIMG" src="assets/images/MLCreation_logo.png" alt="ML Creattion Logo"/>
                    </div>
                    <div class="table-td">
                        <div id="LogobarRightNavigation">
                            <a href="#">ABOUT US</a>
                            <a href="#">CONTACT US</a>                            
                        </div>
                    </div>
                </div>               
            </div>            
        </nav>
        </div>
        )
    }

}    

export default NavBar