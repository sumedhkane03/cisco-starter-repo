import {React, useState, useRef, useEffect} from 'react'

import { Link } from 'react-router-dom';


import '../css/Navbar.css'


const Navbar = () => {  

    const [menu, setMenu] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    return (
        <>
            {menu && (
                <div className='menu-container menu-enter' id='cool-menu'>

                    {/* <Link to='/'><p className='menu-btn'>Home</p></Link> */}
                    {/* <Link to='/events'><p className='menu-btn'>Events</p></Link>
                    <Link to='/team'><p className='menu-btn'>About us</p></Link>
                    <Link to='/gallery'><p className='menu-btn'>Gallery</p></Link>
                    <Link to='/contact'><p className='menu-btn'>Contact us</p></Link> */}
                    {/* <Link to='/shop'><p className='menu-btn'>Shop</p></Link> */}
                    {/* <Link to='/daytime-dager' target="_blank"><p className='menu-btn'>Darty</p></Link> */}

                    {/*<p className='menu-btn menu-highlight' onClick={()=>{
                        menuLeave();
                        
                        setTimeout(()=>{
                            setWaitlist(true);
                        }, 200);
                        
                    }}>Join Waitlist</p>*/}
                </div>
            )}


            
            {/* Drink Deal */}
            {/* {invite && (
                <>
                    <div className='dark-bg dark-bg-enter' onClick={()=>{popUpLeave("inv")}} id='blurry-bg-2'/>
                    <div className='popup-container popup-container-enter' id="cool-popup-2">
                        <div className='popup'>
                            <p className='invite-thanks'>You're Invited!</p>
                            <img src={require("../assets/events/clear-litesout.png")} alt="litesout" className='invite-img'/>
                        </div>
                    </div>
                </>
            )} */}

            
        
        {width > 900 && (
            <div className='nav' id='nav'>
                <div className='top_logo' id='top_logo'>
                
                </div>
                <div className='nav-buttons'>
                    <a>Hello!</a>
                    {/* <Link to='/'><p className='nav-btn'>Home</p></Link>  */}
                    {/* <Link to='/about'><p className='nav-btn'>About us</p></Link>
                    <Link to='/events'><p className='nav-btn'>Events</p></Link>
                    <Link to='/gallery'><p className='nav-btn'>Gallery</p></Link>
                    <Link to='/contact'><p className='nav-btn'>Contact us</p></Link> */}
                    {/*<Link to='/daytime-dager' target="_blank"><p className='nav-btn'>Darty</p></Link>*/}
                    {/* <p className='nav-btn' onClick={comingSoonPop}>Shop</p> */}
                    {/*<p className='nav-highlight' onClick={()=>{setWaitlist(true)}}>Join Waitlist</p>*/}
                </div>
            </div>
        )}
        {width < 900 && (
            <div className='mobile-nav' id='mobile-nav'>
                <div className='top_logo' id='top_logo'>
                
                </div>
                {/* <img src={require("../assets/hsslogo.png")} alt="logo" className='logo'/> */}

            </div>
        )}

        </>
    )
}

export default Navbar