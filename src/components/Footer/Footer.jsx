import React from 'react';
import logo from './museum-logo 2 (1).svg';
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