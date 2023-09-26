import React from "react";
import "./index.css";

function Footer()
{
    return(

        <>
             <footer className="site-footer">
        <div className="container">
            <div className="footer-content">
                <p>&copy; 2023 Your Music Website</p>
                
                

            </div>
            <h6>By Pradyunya Chunchwar</h6>
            <div className="sm">
        
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png" alt="insta" className="sm-icons"></img>
        
           
           <img src=" https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw" alt="linkedin" className="sm-icons"></img>
           <img src=" https://m.economictimes.com/thumb/msid-63994786,width-1200,height-900,resizemode-4,imgsize-35146/gmail-gets-a-makeover-heres-how-you-can-make-the-most-of-its-features.jpg" className="sm-icons" alt="gmail"></img>
    
           
            </div>
        </div>
    </footer>
        </>
    );
}

export default Footer;