import "./home.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
    const [artworks, setArtworks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const artworksPerPage = 3;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.artic.edu/api/v1/artworks');
                setArtworks(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const indexOfLastArtwork = currentPage * artworksPerPage;
    const indexOfFirstArtwork = indexOfLastArtwork - artworksPerPage;
    const currentArtworks = artworks.slice(indexOfFirstArtwork, indexOfLastArtwork).filter(artwork => artwork.title.toLowerCase().includes(searchTerm.toLowerCase()));

    const paginate = (pageNumber, event) => {
        event.preventDefault();
        setCurrentPage(pageNumber);
    };

    const handleSearchChange = event => {
        setSearchTerm(event.target.value);
    };

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(currentArtworks.length / artworksPerPage); i++) {
        pageNumbers.push(i);
    }

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
            <div className="artworks-container">
                {currentArtworks.map((artwork) => (
                    <div key={artwork.id} className="artwork">
                        <img src={artwork.image_id ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg` : 'placeholder.jpg'} alt={artwork.title} />
                        <h3>{artwork.title}</h3>
                        <p>{artwork.artist_title}</p>
                    </div>
                ))}
            </div>
            <div className="pagination">
                {pageNumbers.map(number => (
                    <button key={number} onClick={(e) => paginate(number, e)}>
                        {number}
                    </button>
                ))}
            </div>
        </>
    );
};

export default HomePage;