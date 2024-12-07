import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Paginate from './Paginate';
import Loader from './Loader';
import "./home.css";

const HomePage = ({addToFavorite}) => {
    const [artworks, setArtworks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const artworksPerPage = 3;

        useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.artic.edu/api/v1/artworks');
                setArtworks(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const indexOfLastArtwork = currentPage * artworksPerPage;
    const indexOfFirstArtwork = indexOfLastArtwork - artworksPerPage;
    const currentArtworks = artworks.slice(indexOfFirstArtwork, indexOfLastArtwork).filter(artwork => artwork.title.toLowerCase().includes(searchTerm.toLowerCase()));

    const handleAddToFavorite = (artwork) =>{
        addToFavorite(artwork)
    }

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSearchChange = event => {
        setSearchTerm(event.target.value);
    };


    return (
        <>
            <section className="findart">
                <h1 className="findtext">Let's Find Some <span className="orange-text">Art</span> <br /> Here!</h1>
                <div className="search-container">
                    <input className='findline' type="text" placeholder="Enter your text here" value={searchTerm} onChange={handleSearchChange} />
                    <div className="search-icon"></div>
                </div>
            </section>
            <h4 className="tfy">Topics for you</h4>
            <h3 className="osg">Our special gallery</h3>
            {loading ? <Loader /> : (
                <>
                    <div className="artworks-container">
                        {currentArtworks.map((artwork) => (
                            <div key={artwork.id} className="artwork">
                                <img src={artwork.image_id ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg` : 'placeholder.jpg'} alt={artwork.title} />
                                <h3>{artwork.title}</h3>
                                <button onClick={handleAddToFavorite}>Add to Fav</button>
                                <p>{artwork.artist_title}</p>
                            </div>
                        ))}
                    </div>
                    <Paginate currentPage={currentPage} totalPages={Math.ceil(artworks.length / artworksPerPage)} paginate={paginate} />
                    <h4 className="tfy">Here some more</h4>
                    <h3 className="osg">Other works for you</h3>
                    <div className="second-artworks-container">
                        {artworks.slice(indexOfLastArtwork, indexOfLastArtwork + 9).map((artwork) => (
                            <div key={artwork.id} className="second-artwork">
                                <img src={artwork.image_id ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg` : 'placeholder.jpg'} alt={artwork.title} />
                                <h3>{artwork.title}</h3>
                                <button >Add to Fav</button>
                                <p>{artwork.artist_title}</p>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </>
    );
};

export default HomePage;