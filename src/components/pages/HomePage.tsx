import { useEffect } from 'react';
import LandingPage from '../../imports/LandingPage';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  useEffect(() => {
    // Force mobile visibility
    const landingPage = document.querySelector('[data-name="Landing page"]');
    if (landingPage) {
      (landingPage as HTMLElement).style.display = 'block';
      (landingPage as HTMLElement).style.visibility = 'visible';
      (landingPage as HTMLElement).style.opacity = '1';
    }

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
    <div 
      className="w-full min-h-screen bg-white"
      style={{
        display: 'block',
        visibility: 'visible',
        overflow: 'visible',
        position: 'relative',
        width: '100%',
        maxWidth: '100vw',
        overflowX: 'hidden'
      }}
    >
      <div
        style={{
          display: 'block',
          visibility: 'visible',
          opacity: 1,
          width: '100%',
          maxWidth: '100vw',
          overflowX: 'hidden',
          position: 'relative'
        }}
      >
        <LandingPage />
      </div>
    </div>
  );
}
