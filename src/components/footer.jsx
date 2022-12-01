import React from 'react';
import Logo from "../assets/images/logo.svg"
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
                <ul>
                    <li><button>About</button></li>
                    <li><button>contact</button></li>
                    <li><button>Blog</button></li>
                    <li><button>Careers</button></li>
                    <li><button>Support</button></li>
                    <li><button>Privacy Policy</button></li>

                </ul>
                <button>Reuest Invite</button>
            </div>
            <div>
                <ul className='social'>
                    <li><img src={Facebook} alt="" /></li>
                     <li><img src={youtube} alt="" /></li>
                     <li><img src={twitter} alt="" /></li>
                      <li><img src={pinterest} alt="" /></li>
                       <li><img src={instagram} alt="" /></li>
                </ul>
                <div className='copy-right'>
                    2021 Loopstudios. All right reserved.
                </div>
            </div>

        </footer>
    )
}

export default Footer
