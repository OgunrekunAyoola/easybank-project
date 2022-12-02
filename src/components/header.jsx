import React, { Component } from 'react'
import Logo from "../assets/images/logo.svg"

function Header () {

    
    const showNav = () => {

        const menuBtn = document.querySelector('.menu-btn');
        const navbar = document.querySelector('nav');
        const body = document.body;

        menuBtn.addEventListener('click', () => {
            navbar.classList.toggle('open')
            menuBtn.classList.toggle('active')
            body.classList.toggle('overflow-hidden')
        })
    }

return(
    <div>
       <header className='header'>
           <div className='logo'>
            <img src={Logo} alt="Loopstudios" />
           </div>
           <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Careers</li>
            </ul>
             <button className='header-btn'>Request Invite</button>
           </nav>
           <div className="menu-btn" onClick={() => showNav()}></div>
       </header>
    </div>   
)

}
export default Header