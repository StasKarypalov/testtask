import React from 'react';
import logo from './Frame 4349.png';
import modsen from"./logo modsen-02 2.png"
import './footer.css';

const Footer = () => {
    return (
        <footer className='mainfooter'>
            <div className="footer-wrapper">
                <img src={logo} alt="Logo" className='logo' />
                <img src ={modsen} alt="modsen" className='modsen' />
            </div>
        </footer>
    );
};

export default Footer;