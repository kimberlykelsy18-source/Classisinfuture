import { useEffect } from 'react';
import TicketsPage from '../../imports/TicketsPage';
import { toast } from 'sonner@2.0.3';
import { ResponsivePageContainer } from '../ResponsivePageContainer';

interface TicketsPageWrapperProps {
  onNavigate: (page: string) => void;
}

export function TicketsPageWrapper({ onNavigate }: TicketsPageWrapperProps) {
  useEffect(() => {
    // Make all "BUY NOW" buttons show a toast
    const buttons = document.querySelectorAll('button, div[data-name*="Button"]');
    
    buttons.forEach((button) => {
      const text = button.textContent;
      if (text?.includes('BUY NOW')) {
        button.addEventListener('click', (e) => {
          e.stopPropagation();
          
          // Find which pass was selected
          let passType = 'ticket';
          const parent = button.closest('[data-name*="card"]');
          if (parent) {
            const parentText = parent.textContent;
            if (parentText?.includes('General Admission')) passType = 'General Admission Pass';
            else if (parentText?.includes('Startup Pass')) passType = 'Startup Pass';
            else if (parentText?.includes('Investor Pass')) passType = 'Investor Pass';
            else if (parentText?.includes('VIP Pass')) passType = 'VIP Pass';
          }
          
          toast.success(`${passType} added to cart!`, {
            description: 'Redirecting to checkout...',
          });
          
          setTimeout(() => {
            toast.info('Checkout page would appear here', {
              description: 'This is a prototype - payment integration not included',
            });
          }, 1500);
        });
      }
    });
  }, [onNavigate]);

  return (
    <ResponsivePageContainer>
      <TicketsPage />
    </ResponsivePageContainer>
  );
}
