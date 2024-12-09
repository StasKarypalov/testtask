import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './components/page/home/HomePage';
import FavoritePage from './components/page/favorite/FavoritePage';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import ArtworkDetailPage from './components/page/artworkdetail/ArtworkDetail';

function App() {
  const [favorites, setFavorites] = useState(JSON.parse(sessionStorage.getItem('favorites')) || []);
  const [selectedArtwork, setDetails] = useState(null);


  const addToFavorite = (artwork) => {
      const updatedFavorites = [...favorites, artwork];
      setFavorites(updatedFavorites);
      sessionStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const addToDetails = (artwork) => {
    setDetails(artwork);
};

  return (
      <Router>
          <>
              <Header />
              <Routes>
                  <Route path="/" element={<HomePage addToFavorite={addToFavorite} addToDetails={addToDetails} />} />
                  <Route path="/favorites" element={<FavoritePage favorites={favorites} />} />
                  <Route path="/artwork/:id" element={<ArtworkDetailPage artwork={selectedArtwork} />} />
              </Routes>
              <Footer />
          </>
      </Router>
  );
}

export default App;