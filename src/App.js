import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './components/page/home/HomePage';
import FavoritePage from './components/page/favorite/FavoritePage';
import Footer from './components/Footer/Footer';
import { useState } from 'react';

function App() {

  const [favorites, setFavorite] = useState([]);
  const addToFavorite = (artwork) => {
    setFavorite( (prev) => [...prev, artwork]);
    console.log(favorites)
  };
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage addToFavorite={addToFavorite}/>} />
          <Route path="/favorites" element={<FavoritePage  favorites={favorites}/>} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;