import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import MainGallery from './pages/main-gallery/main-gallery';
import ArtDetail from './pages/art-detail/art-detail';
import About from './pages/about/about';
import './App.scss';

const App = () => {
  return (
    <>
      <Navbar /> 
      <div className="content">
        <Routes>
          <Route path="/" element={<MainGallery />} />
          <Route path="/art/:id" element={<ArtDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;