import React from 'react';
import { Link } from 'react-router-dom';
import logo from './museum-logo 2.svg';
import favoriteImage from './Favorites.png';
import homeImage from "./home.png"
import './header.css'; 

export default function Header() {
    return (
        <header className='mainhead'>
            <div className="header-wrapper">
            <img src={logo} alt="Logo" className='logo' />
            <div className='photo-phon'>
                <Link to="/" className='image-button1'>
                    <img src={homeImage} alt="home" className='home-image' />
                </Link>
                <Link to="/favorites" className='image-button'>
                    <img src={favoriteImage} alt="favorites" className='favorite-image' />
                </Link>
            </div>
            </div>
        </header>
    );
}