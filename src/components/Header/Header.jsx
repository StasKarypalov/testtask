import React from 'react';
import './header.css';
import logo from './museum-logo 2.svg';
import favoriteImage from './bookmark.png'
import FavoritePage from '../page/favorite/FavoritePage';

export default function Header() {
    return (
        
        <header className='mainhead'>
            <div className='header-wrapper'>
                <img src={logo} alt="Logo" className='logo' />
               
                <button className='image-button' >
                    <img src={favoriteImage} alt="favorites" className='favorite-image' />
                    <span className='favorite-text'>Your favorites</span>
                </button>
                
            </div>
        </header>
    );
}