import React from 'react';
import Logo from "../assets/images/footerlogo.svg"
import Facebook from "../assets/images/icon-facebook.svg"
import youtube from"../assets/images/icon-youtube.svg"
import twitter from "../assets/images/icon-twitter.svg"
import instagram from "../assets/images/icon-instagram.svg"
import pinterest from "../assets/images/icon-pinterest.svg"


const Footer = () => {
    return (
        <footer className='footer'>
            <div>
                <div className='logo'>
                    <img src={Logo} alt="" />
                </div>
                 <ul className='social'>
                    <li><img src={Facebook} alt="" /></li>
                     <li><img src={youtube} alt="" /></li>
                     <li><img src={twitter} alt="" /></li>
                      <li><img src={pinterest} alt="" /></li>
                       <li><img src={instagram} alt="" /></li>
                </ul>
                <ul>
                    <li>About</li>
                    <li>contact</li>
                    <li>Blog</li>
                    <li>Careers</li>
                    <li>Support</li>
                    <li>Privacy Policy</li>

                </ul>
                <button>Request Invite</button>
            </div>
                <div className='copy-right'>
                   © Easybank.. All Right Reserved.
                </div>
        </footer>
    )
}

export default Footer
