import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Paginate from './Paginate';
import Loader from './Loader';
import useDebounce from './useDebounce'; 
import "./home.css";
import favIcon from "./Vector.png";
import SortMenu from './SortMenu';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ addToFavorite, addToDetails }) => {
    const [artworks, setArtworks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const artworksPerPage = 3;

   
    const debouncedSearchTerm = useDebounce(searchTerm, 300); 

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

    const navigate = useNavigate();

    const handleAddToDetails = (artwork) => {
        addToDetails(artwork);
        navigate(`/artwork/${artwork.id}`);
    }

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleAddToFavorite = (artwork) => () => {
        const favorites = JSON.parse(sessionStorage.getItem('favorites')) || [];
        const isFavorite = favorites.some(fav => fav.id === artwork.id);

        if (!isFavorite) {
            addToFavorite(artwork);
        } else {
            alert('This artwork is already in your favorites.');
        }
    };

    const sortBy = (criteria) => {
        const sortedArtworks = [...artworks];
        if (criteria === 'title') {
            sortedArtworks.sort((a, b) => a.title.localeCompare(b.title));
        } else if (criteria === 'artist_title') {
            sortedArtworks.sort((a, b) => a.artist_title.localeCompare(b.artist_title));
        } else if (criteria === 'date') {
            sortedArtworks.sort((a, b) => new Date(a.date) - new Date(b.date));
        }
        setArtworks(sortedArtworks);
        setMenuOpen(false); 
    };

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const filteredArtworks = artworks.filter(artwork => 
        artwork.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );

    const indexOfLastArtwork = currentPage * artworksPerPage;
    const indexOfFirstArtwork = indexOfLastArtwork - artworksPerPage;
    const currentArtworks = filteredArtworks.slice(indexOfFirstArtwork, indexOfLastArtwork);

    return (
        <>
            <section className="findart">
                <h1 className="findtext">Let's Find Some <span className="orange-text">Art</span> <br /> Here!</h1>
                <div className="search-container">
                    <input className='findline' 
                           type="text" 
                           placeholder="Enter your text here" 
                           value={searchTerm} 
                           onChange={e => setSearchTerm(e.target.value)} />
                    <div className="search-icon"></div>
                    <div className="burger-menu">
                        <SortMenu handleSort={handleToggleMenu} menuOpen={menuOpen} sortBy={sortBy} />
                    </div>
                </div>
            </section>
            <h4 className="tfy">Topics for you</h4>
            <h2 className="osg">Our special gallery</h2>
            {loading ? <Loader /> : (
                <>
                    <div className="artworks-container">
                        {currentArtworks.map((artwork) => (
                            <div key={artwork.id} className="artwork">
                                <img
                                    src={artwork.image_id ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg` : 'placeholder.jpg'}
                                    alt={artwork.title}
                                    onClick={() => handleAddToDetails(artwork)}
                                />
                                <div className="artwork-content">
                                    <div className="text-content">
                                        <h3>{artwork.title}</h3>
                                        <p>{artwork.artist_title}</p>
                                    </div>
                                    <div className="favorite-icon" onClick={handleAddToFavorite(artwork)}>
                                        <img src={favIcon} alt="Favorite" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Paginate currentPage={currentPage} totalPages={Math.ceil(filteredArtworks.length / artworksPerPage)} paginate={paginate} />
                    <h4 className="tfy">Here some more</h4>
                    <h2 className="osg">Other works for you</h2>
                    <div className="second-artworks-container">
                        {filteredArtworks.slice(indexOfLastArtwork, indexOfLastArtwork + 9).map((artwork) => (
                            <div key={artwork.id} className="second-artwork">
                                <img src={artwork.image_id ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg` : 'placeholder.jpg'} alt={artwork.title} />
                                <div className="second-artwork-content">
                                    <h3>{artwork.title}</h3>
                                    <p>{artwork.artist_title}</p>
                                </div>
                                <div className="favorite-icon" onClick={handleAddToFavorite(artwork)}>
                                    <img src={favIcon} alt="Favorite" />
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </>
    );
};

export default HomePage;