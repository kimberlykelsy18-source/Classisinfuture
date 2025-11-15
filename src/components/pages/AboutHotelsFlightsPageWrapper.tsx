import { useEffect } from 'react';
import AboutHotelsFlightsPage from '../../imports/AboutHotelsFlightsPage';
import { toast } from 'sonner@2.0.3';

interface AboutHotelsFlightsPageWrapperProps {
  onNavigate: (page: string) => void;
}

export function AboutHotelsFlightsPageWrapper({ onNavigate }: AboutHotelsFlightsPageWrapperProps) {
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
      } else if (text?.includes('Book Now') || text?.includes('View Details')) {
        button.addEventListener('click', (e) => {
          e.stopPropagation();
          toast.success('Hotel booking', {
            description: 'Redirecting to hotel booking platform...',
          });
        });
      } else if (text?.includes('See Locations') || text?.includes('View All')) {
        button.addEventListener('click', (e) => {
          e.stopPropagation();
          // Scroll to the locations section
          const locationsSection = document.querySelector('[data-name*="Stay Close"]');
          if (locationsSection) {
            locationsSection.scrollIntoView({ behavior: 'smooth' });
          }
        });
      } else if (text?.includes('Get Directions') || text?.includes('See Routes')) {
        button.addEventListener('click', (e) => {
          e.stopPropagation();
          toast.info('Directions', {
            description: 'Opening navigation app...',
          });
        });
      }
    });

    // Make hotel cards clickable
    const cards = document.querySelectorAll('[data-name*="card"], [data-name*="Card"], [data-name*="Frame87"], [data-name*="Frame286"], [data-name*="Frame297"], [data-name*="Frame298"], [data-name*="Frame299"], [data-name*="Frame300"]');
    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        card.classList.add('scale-105', 'transition-transform', 'cursor-pointer');
      });
      card.addEventListener('mouseleave', () => {
        card.classList.remove('scale-105');
      });
      card.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (!target.closest('button')) {
          toast.info('Hotel details', {
            description: 'View more information about this accommodation option',
          });
        }
      });
    });

    // Make transportation type buttons interactive
    const transportButtons = document.querySelectorAll('[data-name*="transport"], [data-name*="Transportation"]');
    transportButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        // Remove active class from all transport buttons
        transportButtons.forEach(b => b.classList.remove('bg-[#6923d2]', 'text-white'));
        // Add active class to clicked button
        button.classList.add('bg-[#6923d2]', 'text-white');
      });
    });
  }, [onNavigate]);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden overflow-y-visible flex justify-center bg-white">
      <AboutHotelsFlightsPage />
    </div>
  );
}