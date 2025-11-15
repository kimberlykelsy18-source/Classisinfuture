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
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden w-full">
      <Toaster position="top-right" richColors />
      
      {/* Fixed Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      </div>

      {/* Page Content with top padding to account for fixed nav - flex-grow pushes footer down */}
      <main className="flex-grow pt-[120px] w-full overflow-x-hidden">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'tickets' && <TicketsPageWrapper onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPageWrapper onNavigate={handleNavigate} />}
        {currentPage === 'event-schedule' && <AboutEventSchedulePageWrapper onNavigate={handleNavigate} />}
        {currentPage === 'get-booth' && <AboutGetABoothPageWrapper onNavigate={handleNavigate} />}
        {currentPage === 'online-experience' && <AboutOnlineExperiencePageWrapper onNavigate={handleNavigate} />}
        {currentPage === 'hotels-flights' && <AboutHotelsFlightsPageWrapper onNavigate={handleNavigate} />}
      </main>

      {/* Footer - will stick to bottom due to flex-grow on main */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}