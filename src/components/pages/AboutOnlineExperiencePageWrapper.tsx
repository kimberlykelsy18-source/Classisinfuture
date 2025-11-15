import { useEffect } from 'react';
import AboutOnlineExperiencePage from '../../imports/AboutOnlineExperiencePage';
import { toast } from 'sonner@2.0.3';

interface AboutOnlineExperiencePageWrapperProps {
  onNavigate: (page: string) => void;
}

export function AboutOnlineExperiencePageWrapper({ onNavigate }: AboutOnlineExperiencePageWrapperProps) {
  useEffect(() => {
    // Make all "Get Tickets" buttons navigate to tickets page
    const buttons = document.querySelectorAll('button, div[data-name*="Button"]');
    
    buttons.forEach((button) => {
      const text = button.textContent;
      if (text?.includes('Get Tickets') || text?.includes('Get a ticket') || text?.includes('Get your ticket')) {
        button.addEventListener('click', (e) => {
          e.stopPropagation();
          onNavigate('tickets');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      } else if (text?.includes('WATCH A PREVIEW') || text?.includes('Watch')) {
        button.addEventListener('click', (e) => {
          e.stopPropagation();
          toast.info('Video preview', {
            description: 'Virtual experience preview video would play here',
          });
        });
      } else if (text?.includes('ENGAGE')) {
        button.addEventListener('click', (e) => {
          e.stopPropagation();
          toast.info('Virtual engagement', {
            description: 'Interactive virtual engagement would start here',
          });
        });
      }
    });

    // Make feature cards interactive
    const cards = document.querySelectorAll('[data-name*="card"], [data-name*="Card"]');
    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        card.classList.add('scale-105', 'transition-transform');
      });
      card.addEventListener('mouseleave', () => {
        card.classList.remove('scale-105');
      });
    });
  }, [onNavigate]);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden overflow-y-visible flex justify-center bg-white">
      <AboutOnlineExperiencePage />
    </div>
  );
}