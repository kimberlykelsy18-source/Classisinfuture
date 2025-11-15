import { useEffect } from 'react';
import AboutOverviewPage from '../../imports/AboutOverviewPage';

interface AboutPageWrapperProps {
  onNavigate: (page: string) => void;
}

export function AboutPageWrapper({ onNavigate }: AboutPageWrapperProps) {
  useEffect(() => {
    // Make all "Get Tickets" buttons navigate to tickets page
    const buttons = document.querySelectorAll('button, div[data-name*="Button"]');
    
    buttons.forEach((button) => {
      const text = button.textContent;
      if (text?.includes('Get Tickets') || text?.includes('Get a ticket')) {
        button.addEventListener('click', (e) => {
          e.stopPropagation();
          onNavigate('tickets');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }
    });
  }, [onNavigate]);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden flex justify-center bg-white">
      <div className="relative w-[1728px] max-w-full">
        <AboutOverviewPage />
      </div>
    </div>
  );
}