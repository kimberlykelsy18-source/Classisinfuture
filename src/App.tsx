import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { TicketsPageWrapper } from './components/pages/TicketsPageWrapper';
import { AboutPageWrapper } from './components/pages/AboutPageWrapper';
import { AboutEventSchedulePageWrapper } from './components/pages/AboutEventSchedulePageWrapper';
import { AboutGetABoothPageWrapper } from './components/pages/AboutGetABoothPageWrapper';
import { AboutOnlineExperiencePageWrapper } from './components/pages/AboutOnlineExperiencePageWrapper';
import { AboutHotelsFlightsPageWrapper } from './components/pages/AboutHotelsFlightsPageWrapper';
import { Toaster } from 'sonner@2.0.3';

type Page = 'home' | 'tickets' | 'about' | 'event-schedule' | 'get-booth' | 'online-experience' | 'hotels-flights';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state?.page) {
        setCurrentPage(event.state.page);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update URL when page changes
  useEffect(() => {
    const path = currentPage === 'home' ? '/' : `/${currentPage}`;
    window.history.pushState({ page: currentPage }, '', path);
  }, [currentPage]);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full max-w-[100vw] overflow-x-hidden">
      <Toaster position="top-right" richColors />
      
      {/* Navigation */}
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Page Content with padding for fixed nav */}
      <main className="flex-grow pt-16 md:pt-20 lg:pt-24 w-full max-w-[100vw] overflow-x-hidden">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'tickets' && <TicketsPageWrapper onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPageWrapper onNavigate={handleNavigate} />}
        {currentPage === 'event-schedule' && <AboutEventSchedulePageWrapper onNavigate={handleNavigate} />}
        {currentPage === 'get-booth' && <AboutGetABoothPageWrapper onNavigate={handleNavigate} />}
        {currentPage === 'online-experience' && <AboutOnlineExperiencePageWrapper onNavigate={handleNavigate} />}
        {currentPage === 'hotels-flights' && <AboutHotelsFlightsPageWrapper onNavigate={handleNavigate} />}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
