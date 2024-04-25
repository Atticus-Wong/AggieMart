import '../styles/navbar.css';
import sitelogo from '../assets/sitelogo.png';
import menulogo from '../assets/menulogo.png';
import cartlogo from '../assets/cartlogo.png';
import { useState } from 'react';
import {Link} from 'react-router-dom';

export default function NavBar() {

    const [menuIsVisible, setMenuIsVisible] = useState(false);

    function showLeftMenu() {
        setMenuIsVisible(!menuIsVisible);
    }

    return (
        <>
        <nav className="navbar">
            <ul className="nav">


                <li>
                    <img id="menulogo" src={menulogo} alt="site logo" onClick={showLeftMenu}/>
                </li>

                {/* AggieMart logo */}
                <li>
                    <Link to="../Home" className="site-title">
                        <img id="sitelogo" src={sitelogo} alt="site logo"/>
                    </Link>
                </li>

                <li className="empty">

                </li>

                {/* center searcch bar */}
                <li id="searchbar">
                    <input type="text" placeholder="Search AggieMart"/>
                </li>

                <li className="empty">

                </li>

                <li className="account">
                    {/* Account picker drop down menu
                        ask for log in or log out */}
                    {/* <Link to="../SignIn" className="accountlink">
                        <img id="accountlogo" src={accountlogo} alt="account logo"/>
                    </Link> */}
                    <Link to="../signin">
                        <button className="account-button" type="button">Sign In / Register</button>
                    </Link>
                </li>

                <li>
                    <img id="cartlogo" src={cartlogo} alt="car logo"/>
                </li>

            

            </ul>
        </nav>

        {/* Left Menu slides open */}
        <div className={`leftmenu ${menuIsVisible ? 'open' : ''}`}>
           <LeftMenu/>
        </div>

        {/* This turns the rest of the page gray when left menu is active */}
        <div className={`graycover ${menuIsVisible ? 'active' : ''}`} onClick={showLeftMenu}>

        </div>

        </>
    );
}


export function LeftMenu() {
    return (
        <div className="menuoptions">
            <h1>Categories</h1>
            <ul className="optionslist">
                <li>School</li>
                <li>Apparel</li>
                <li>Electronics</li>
                <li>Cosmetics</li>
                <li>Home</li>
                <li>Misc</li>
            </ul>
        </div>
    );
}




