import '../styles/navbar.css';
import sitelogo from '../assets/sitelogo.png';
import menulogo from '../assets/menulogo.png';
import accountlogo from '../assets/accountlogo.png'
import cartlogo from '../assets/cartlogo.png';
import { useState } from 'react';
import {Link} from 'react-router-dom';

export default function NavBar() {

    const [visible, setIsVisible] = useState(0);

    function showLeftMenu() {
        setIsVisible(!visible);
    }

    return (
        <>
        <nav className="navbar">
            <ul className="nav">

                {/* AggieMart logo */}
                <li>
                    <img id="menulogo" src={menulogo} alt="site logo" onClick={showLeftMenu}/>
                </li>

                <li>
                    <img id="sitelogo" src={sitelogo} alt="site logo"/>
                </li>

                <li className="empty">

                </li>

                {/* center searcch bar */}
                <li id="searchbar">
                    <input type="text" placeholder="Search"/>
                </li>

                <li className="empty">

                </li>

                <li className="account">
                    {/* Account picker drop down menu
                        ask for log in or log out */}
                    <img id="accountlogo" src={accountlogo} alt="account logo"/>
                </li>

                <li>
                    <img id="cartlogo" src={cartlogo} alt="car logo"/>
                </li>

            </ul>
        </nav>

        {/* Left Menu slides open */}
        <div className={`leftmenu ${visible ? 'open' : ''}`}>
           <LeftMenu/>
        </div>

        {/* This turns the rest of the page gray when left menu is active */}
        <div className={`graycover ${visible ? 'active' : ''}`} onClick={showLeftMenu}>

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


