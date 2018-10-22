import React, { Component } from 'react';
import './assets/styles/for_her.css';
import './assets/styles/for_him.css';
import './assets/styles/global.css';
import './assets/styles/home.css';


class Home extends Component{

    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
 

        <div id="HomeBanner" class="table">
            <div class="table-tr">
                <div class="table-td">
                    <img id="TestBanner" src="assets/images/home_banner_1.png" alt="Home Banner 1"/>
                </div>
            </div>
        </div>         
        
        <main>           
            <div id="HomeSpotlight" class="table">
                <div id="ForHerSpotlightDesc" class="table-tr">
                    <div class="table-td">
                        <section class="spotlight-desc">
                            <h3>For Her</h3>
                            <p>
                                Woman is beauty...<br/>
                                Find your pleasure with the understated elegance of sophisticated design.
                            </p>
                            <img src="assets/images/logo_left_side.png" alt=""/>                            
                        </section>
                    </div>
                    <div class="table-td">
                        <img src="assets/images/herSubImg.13d7dc0b.png" alt="For Her Spotlight Image"/>
                    </div>
                </div>
                <div id="ForHimSpotlightDesc" class="table-tr">
                    <div class="table-td">
                        <img src="assets/images/himSubImg.aaf288f1.png" alt="For Him Soptlight Image"/>
                    </div>
                    <div class="table-td">
                        <section class="spotlight-desc">
                            <h3>For Him</h3>
                            <p>
                                Man is power...<br/>
                                Discover the power of adding character with the quality products.
                            </p>
                            <img src="assets/images/logo_right_side.png" alt=""/>                            
                        </section>
                    </div>
                </div>
            </div>
            <div id="Slogan" class="table">
                <div class="table-tr">
                    <div class="table-td">
                        <h3>
                            ML CREATION
                        </h3>
                        <h4>
                            COOL <span>...</span> THAT'S WHY HOT <span>...</span>
                        </h4>
                    </div>
                </div>
            </div> 
        </main>

        <div id="LastBanner" class="table">
            <div class="table-tr">
                <div class="table-td">
                    <img src="assets/images/allPackages.2c27495d.png" alt="All Package Banner"/>
                </div>
            </div>
        </div> 

        
            
    </div>
        )
    }

}

export default Home