import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Home from './pages/Home';
import DogGallery from './pages/DogGallery';
import DogBreedSearch from './pages/DogBreedSearch';

function App() {
  return (
    <Router>  
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doggallery" element={<DogGallery />} />
        <Route path="/dogbreedsearch" element={<DogBreedSearch />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;