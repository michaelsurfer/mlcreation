import React, { Component } from 'react';
import './assets/styles/for_her.css';
import './assets/styles/for_him.css';
import './assets/styles/global.css';
import './assets/styles/home.css';


class Footer extends Component{

    constructor(props){
        super(props)
    }
    render(){
        return(
        <div>
         <footer>
            <div id="Sitemap" class="table">
                <div class="table-tr">
                    <div class="table-td">
                        <div>
                            <h6>QUICK LINKS</h6>
                            <a href="home.html">Home</a>
                            <a href="for_her.html">For Her</a>  
                            <a href="for_him.html">For Him</a>  
                            <a href="#">Comments</a>
                            <a href="#">Shopping List</a> 
                        </div>
                    </div>
                    <div class="table-td">
                        <div>
                            <h5>Follow us on</h5>
                            <a href="#" target="_blank">
                                <img src="assets/images/icon_twitter.png" alt=""/>
                            </a>
                            <a href="#" target="_blank">
                                <img src="assets/images/icon_facebook.png" alt=""/>
                            </a>
                            <a href="#" target="_blank">
                                <img src="assets/images/icon_in.png" alt=""/>
                            </a>
                            <a href="#" target="_blank">
                                <img src="assets/images/icon_gplus.png" alt=""/>
                            </a>                            
                        </div>
                    </div>
                    <div class="table-td">
                        <div>
                            <a href="home.html">About Us</a>
                            <a href="for_her.html">Shipping and Return</a>
                            <a href="for_him.html">Language</a>
                            <a href="#">Contact Us</a>                  
                        </div>
                    </div>
                </div>
            </div> 
            <div id='Copyright' class='table'>
                <div class="table-tr">
                    <div class='table-td'>
                        <img src="assets/images/footer_copyright_with_logo.png" alt="Copyright Logo"/>
                    </div>
                </div>
            </div>
        </footer>
        </div>
        )
    }

}    

export default Footer