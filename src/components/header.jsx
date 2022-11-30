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
                <li><button>Home</button></li>
                <li><button>About</button></li>
                <li><button>Contact</button></li>
                <li><button>Blog</button></li>
                <li><button>Careers</button></li>
            </ul>
           </nav>
           <div className="menu-btn" onClick={() => showNav()}></div>
       </header>
    </div>   
)

}
export default Header