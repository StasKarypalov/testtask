import React from 'react';
import "./burger.css";

const SortMenu = ({ handleSort, menuOpen, sortBy }) => {
    return (
        <div className={`burger-icon ${menuOpen ? 'change' : ''}`} onClick={handleSort}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            {menuOpen && (
                <div className="sort-options">
                    <ul>
                        <li onClick={() => sortBy('title')}>Title</li>
                        <li onClick={() => sortBy('artist_title')}>Artist</li>
                        <li onClick={() => sortBy('date')}>Date</li> 
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SortMenu;