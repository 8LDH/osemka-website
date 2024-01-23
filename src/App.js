import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import DruzynaPage from './pages/DruzynaPage';
import CalendarPage from './pages/CalendarPage';
import GalleryPage from './pages/GalleryPage';
import DocumentsPage from './pages/DocumentsPage';
import KphPage from './pages/KphPage';
import LinksPage from './pages/LinksPage';
import ContactPage from './pages/ContactPage';
import NavbarComponent from './components/NavBarComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div className="app-container">
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/glowna-strona" element={<HomePage />} />
        <Route path="/o-nas" element={<AboutUsPage />} />
        <Route path="/druzyna" element={<DruzynaPage />} />
        <Route path="/kalendarz" element={<CalendarPage />} />
        <Route path="/galeria" element={<GalleryPage />} />
        <Route path="/dokumenty" element={<DocumentsPage />} />
        <Route path="/kph" element={<KphPage />} />
        <Route path="/linki" element={<LinksPage />} />
        <Route path="/kontakty" element={<ContactPage />} />
        <Route path="/" element={<Navigate replace to="/glowna-strona" />} />
      </Routes>
      <FooterComponent />
    </Router>
    </div>
  );
}

export default App;
