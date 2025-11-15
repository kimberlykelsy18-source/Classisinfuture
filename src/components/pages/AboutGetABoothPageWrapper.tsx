import { useEffect } from 'react';
import AboutGetABoothPage from '../../imports/AboutGetABoothPage';
import { toast } from 'sonner@2.0.3';

interface AboutGetABoothPageWrapperProps {
  onNavigate: (page: string) => void;
}

export function AboutGetABoothPageWrapper({ onNavigate }: AboutGetABoothPageWrapperProps) {
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
      } else if (text?.includes('Request a Booth') || text?.includes('Become a Sponsor')) {
        button.addEventListener('click', (e) => {
          e.stopPropagation();
          toast.success('Booth inquiry submitted!', {
            description: 'Our team will contact you within 24 hours.',
          });
        });
      }
    });

    // Make booth type cards clickable
    const cards = document.querySelectorAll('[data-name*="card"], [data-name*="Card"]');
    cards.forEach((card) => {
      card.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (!target.closest('button')) {
          // Find button in card and trigger it
          const button = card.querySelector('button, div[data-name*="Button"]');
          if (button) {
            button.dispatchEvent(new Event('click', { bubbles: true }));
          }
        }
      });
    });
  }, [onNavigate]);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden flex justify-center bg-white">
      <div className="relative w-full" style={{ minHeight: '8000px' }}>
        <AboutGetABoothPage />
      </div>
    </div>
  );
}