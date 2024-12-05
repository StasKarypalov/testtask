import React from 'react';

const FavoritePage = ({ favorites }) => {
    return (
        <>
            <h2>Избранные картины</h2>
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