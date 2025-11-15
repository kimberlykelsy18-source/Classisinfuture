import { useEffect } from 'react';
import LandingPage from '../../imports/LandingPage';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  useEffect(() => {
    // Add click handlers for all buttons
    const handleButtonClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const button = target.closest('[data-name*="Button"]');
      const text = button?.textContent;

      if (text?.includes('Get Tickets') || text?.includes('Get a ticket') || text?.includes('Buy Now')) {
        e.stopPropagation();
        onNavigate('tickets');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    document.addEventListener('click', handleButtonClick);

    return () => {
      document.removeEventListener('click', handleButtonClick);
    };
  }, [onNavigate]);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden flex justify-center bg-white px-4 md:px-8">
      <div className="relative w-full max-w-[1728px]">
        <LandingPage />
      </div>
    </div>
  );
}