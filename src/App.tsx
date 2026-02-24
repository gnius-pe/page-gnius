import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './i18n';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar/Navbar';
import { CodeNavbar } from './components/Navbar/CodeNavbar';
import { PicturesNavbar } from './components/Navbar/PicturesNavbar';
import { Hero } from './components/Hero/Hero';
import { Innovation } from './components/Innovation/Innovation';
import { Philosophy } from './components/Philosophy/Philosophy';
import { Divisions } from './components/Divisions/Divisions';
import { Vision } from './components/Vision/Vision';
import { Culture } from './components/Culture/Culture';
import { FutureExpansion } from './components/FutureExpansion/FutureExpansion';
import { Footer } from './components/Footer/Footer';
import { CodePage } from './pages/CodePage';
import { PicturesPage } from './pages/PicturesPage';
import './styles/globals.css';

function Home() {
  return (
    <div style={{ width: '100%', overflow: 'visible' }}>
      <Hero />
      <Innovation />
      <Philosophy />
      <Divisions />
      <Vision />
      <Culture />
      <FutureExpansion />
    </div>
  );
}

function Navigation() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isCode = location.pathname === '/code';
  const isPictures = location.pathname === '/pictures';

  return (
    <>
      {isHome && <Navbar />}
      {isCode && <CodeNavbar />}
      {isPictures && <PicturesNavbar />}
      <main style={{ width: '100%', overflow: 'visible', maxWidth: '100%' }}>
        <div style={{ width: '100%', overflow: 'visible' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/code" element={<CodePage />} />
            <Route path="/pictures" element={<PicturesPage />} />
          </Routes>
        </div>
      </main>
      {isHome && <Footer />}
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
