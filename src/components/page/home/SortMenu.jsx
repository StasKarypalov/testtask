import React from 'react';
import "./burger.css"
const SortMenu = ({ handleSort, menuOpen }) => {
    return (
    <div className={`burger-icon ${menuOpen ? 'change' : ''}`} onClick={handleSort}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        {menuOpen && (
                <div className="sort-options">
                    <ul>
                        <li onClick={() => handleSort('title')}>title</li>
                        <li onClick={() => handleSort('option2')}>Option 2</li>
                        <li onClick={() => handleSort('option3')}>Option 3</li>
                        
                    </ul>
                </div>
            )}
    </div>
    );
};

export default SortMenu;