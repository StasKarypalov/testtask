import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './components/page/home/HomePage';
import FavoritePage from './components/page/favorite/FavoritePage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorite" element={<FavoritePage />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;