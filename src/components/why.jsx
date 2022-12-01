import React from 'react';
import online from "../assets/images/icon-online.svg"
import budgeting from "../assets/images/icon-budgeting.svg"
import onboarding from "../assets/images/icon-onboarding.svg"
import Api from "../assets/images/icon-api.svg"




const Why = () => {
    return(
        <div className='why-section'>
            <div className=' why-choose'>
                <h1>
                    Why choose Easybank?
                </h1>
                <p>
                    We leverage Open Banking to turn your bank account into your financial hub. Control 
                    your finances like never before.
                </p>
            </div>
            <div className='reason-choose'>
                <div >
                    <img src={online} alt="" />
                    <h2>
                        Online Banking
                    </h2>
                    <p>
                        Our modern web and mobile applications allow you to keep track of your finances 
                        wherever you are in the world.
                    </p>
                </div>
                 <div>
                    <img src={budgeting} alt="" />
                    <h2>
                       Simple Budgeting
                    </h2>
                   <p> 
                        See exactly where your money goes each month. Receive notifications when you’re 
                        close to hitting your limits.
                    </p>
                </div>
                 <div>
                    <img src={onboarding} alt="" />
                    <h2>
                        Fast Onboarding
                    </h2>
                    <p> 
                        We don’t do branches. Open your account in minutes online and start taking control 
                        of your finances right away.
                    </p>
                </div>
                <div>
                    <img src={Api} alt="" />
                    <h2>
                         Open API
                    </h2>
                    <p>     
                        Manage your savings, investments, pension, and much more from one account. Tracking 
                        your money has never been easier.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Why