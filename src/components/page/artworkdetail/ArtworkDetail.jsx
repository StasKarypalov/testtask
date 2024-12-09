import React from 'react';
import './artwork.css';

const ArtworkDetailPage = ({ artwork }) => {
    return (
        <div className="artwork-detail-page">
            <img
                className="artwork-image"
                src={artwork.image_id ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg` : 'placeholder.jpg'}
                alt={artwork.title}
            />
            <div className="artwork-info">
                <h2 className="artwork-title">{artwork.title}</h2>
                <div className="all-without-title">
                    <p className="artist-title">{artwork.artist_title}</p>
                    <p className="artist-lifetime">{artwork.lifetime}</p>
                    <div className="artwork-details">
                        <p>Artist Nationality: {artwork.artist_nationality}</p>
                        <p>Dimensions: {artwork.dimensions}</p>
                        <p>Credit Line: {artwork.credit_line}</p>
                        <p>Repository: {artwork.repository}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtworkDetailPage;