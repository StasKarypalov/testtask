import React from 'react';
import "./favorite.css"
import fav from "./Vector.png"
const FavoritePage = ({ favorites }) => {
    return (
        <>
            <h1 className='hay'>Here Are Your <br/><img src={fav} alt="Favorites" className="favorites-image" /> <span className="orange-text">Favorites</span></h1>

            <div className='list'>
                <h4>Saved by you</h4>
                <h2>Your favorites list</h2>
            </div>

            <div className="favorites-container">
                {favorites.map((favorite) => (
                    <div key={favorite.id} className="favorite-artwork">
                        <img src={favorite.image_id ? `https://www.artic.edu/iiif/2/${favorite.image_id}/full/843,/0/default.jpg` : 'placeholder.jpg'} alt={favorite.title} />
                        <h3>{favorite.title}</h3>
                        <p>{favorite.artist_title}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default FavoritePage;