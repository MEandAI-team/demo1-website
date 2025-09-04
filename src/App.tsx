import { useState } from 'react';
import { Header } from './components/Header';
import { PhotoGrid } from './components/PhotoGrid';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('photography');

  const renderPage = () => {
    switch (currentPage) {
      case 'photography':
        return <PhotoGrid />;
      case 'experience':
        return <Experience />;
      case 'contact':
        return <Contact />;
      default:
        return <PhotoGrid />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="transition-all duration-500 ease-in-out">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}