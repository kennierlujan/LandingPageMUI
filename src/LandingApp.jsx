import React from 'react';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import { LandingPage } from './pages/LandingPage';
import { AppTheme } from './theme/AppTheme';

export const LandingApp = () => {
  return (
    <AppTheme>
      <NavBar />
      <LandingPage />
      <Footer />
    </AppTheme>

  );
};