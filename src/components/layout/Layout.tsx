import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { DemoModal } from './DemoModal';
import { getStoredTheme, applyTheme } from '../../theme';

export const Layout = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    // Apply initial theme
    const theme = getStoredTheme();
    applyTheme(theme);
  }, []);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, []);

  const handleDemoClick = () => {
    setIsDemoModalOpen(true);
  };

  const handleDemoClose = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <div className="min-vh-100 d-flex flex-column">
      <Header onDemoClick={handleDemoClick} />
      
      <main className="flex-grow-1">
        <Outlet />
      </main>
      
      <Footer />
      
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={handleDemoClose} 
      />
    </div>
  );
};