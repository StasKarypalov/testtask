import React from 'react';
import "./favorite.css";
import favIcon from "./Vector copy.png";

const FavoritePage = () => {
    const favorites = JSON.parse(sessionStorage.getItem('favorites')) || [];

    const handleRemoveFavorite = (id) => {
        const updatedFavorites = favorites.filter(favorite => favorite.id !== id);
        sessionStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        window.location.reload(); 
    };

    return (
        <>
            <h1 className='hay'>Here Are Your <br/><img src={favIcon} alt="Favorites" className="favorites-image" /> <span className="orange-text">Favorites</span></h1>

            <div className='list'>
                <h4 className='sby'>Saved by you</h4>
                <h2 className='yfl'>Your favorites list</h2>
            </div>

            <div className="favorites-container">
                {favorites.map((favorite) => (
                    <div key={favorite.id} className="second-artwork">
                        <img src={favorite.image_id ? `https://www.artic.edu/iiif/2/${favorite.image_id}/full/843,/0/default.jpg` : 'placeholder.jpg'} alt={favorite.title} />
                        <div className="second-artwork-content">
                            <h3>{favorite.title}</h3>
                            <p>{favorite.artist_title}</p>
                        </div>
                        <div className="favorite-icon" onClick={() => handleRemoveFavorite(favorite.id)}>
                            <img src={favIcon} alt="Remove from Favorites" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default FavoritePage;