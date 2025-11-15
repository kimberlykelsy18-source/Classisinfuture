import { useEffect } from 'react';
import AboutEventSchedulePage from '../../imports/AboutEventSchedulePage';

interface AboutEventSchedulePageWrapperProps {
  onNavigate: (page: string) => void;
}

export function AboutEventSchedulePageWrapper({ onNavigate }: AboutEventSchedulePageWrapperProps) {
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

    // Make day buttons interactive
    const dayButtons = document.querySelectorAll('[data-name*="Day"], [data-name*="day"]');
    dayButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        // Remove active class from all day buttons
        dayButtons.forEach(b => b.classList.remove('bg-[#6923d2]', 'text-white'));
        // Add active class to clicked button
        button.classList.add('bg-[#6923d2]', 'text-white');
      });
    });
  }, [onNavigate]);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden flex justify-center bg-white">
      <div className="relative w-full" style={{ minHeight: '8000px' }}>
        <AboutEventSchedulePage />
      </div>
    </div>
  );
}