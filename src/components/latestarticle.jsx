import React from 'react';
import currency from "../assets/images/image-currency.jpg"
import restaurant from "../assets/images/image-restaurant.jpg"
import plane from "../assets/images/image-plane.jpg"
import confetti from "../assets/images/image-confetti.jpg"

const Latestarticle = () => {
    return(
        <div className='latest-section'>
            <h1>
                Latest Articles
            </h1>
            <div className='latest-articles'>
                <div className='article-card'>
                    <img src={currency} alt="" />
                    <p className='small'>By Claire Robinson</p>
                    <h3> 
                        Receive money in any currency with no fees
                    </h3>
                    <p className='big'>  
                        The world is getting smaller and we’re becoming more mobile. So why should you be 
                        forced to only receive money in a single …
                    </p>
                </div>
                 <div className='article-card'>
                    <img src={restaurant} alt="" />
                    <p className='small'>By Wilson Hutton</p>
                    <h3> 
                       Treat yourself without worrying about money
                    </h3>
                    <p className='big'>  
                       Our simple budgeting feature allows you to separate out your spending and set 
                       realistic limits each month. That means you …
                    </p>
                </div>
                 <div className='article-card'>
                    <img src={plane} alt="" />
                    <p className='small'>By Wilson Hutton</p>
                    <h3> 
                       Take your Easybank card wherever you go
                    </h3>
                    <p className='big'>  
                        We want you to enjoy your travels.
                         This is why we dont charge any fees on purchases while youre abroad. we'll even show you ...
                    </p>
                </div>
                 <div className='article-card'>
                    <img src={confetti} alt="" />
                    <p className='small'>By Claire Robinson</p>
                    <h3> 
                        Our invite-only Beta accounts are now live!
                    </h3>
                    <p className='big'>  
                        After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
                        It’s easy to request an invite through the site ...
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Latestarticle