import React from 'react';
import Mockups from "../assets/images/image-mockups.png"



const Intro = () => {
return (
    <>
    <section className='intro-section'>
        <div className='intro-image'>
           <img src={ Mockups } alt="image" />
        </div>
        <h1>
            Next generation digital banking
        </h1>
        <p>
            Take your financial life online. Your Easybank account will be a one-stop-shop 
            for spending, saving, budgeting, investing, and much more.

        </p>
    </section>
    </>
)
}

export default Intro