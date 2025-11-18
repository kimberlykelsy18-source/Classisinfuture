import { useEffect } from 'react';
import TicketsPageResponsive from '../../imports/TicketsPageResponsive';
import { toast } from 'sonner@2.0.3';

interface TicketsPageWrapperProps {
  onNavigate: (page: string) => void;
}

export function TicketsPageWrapper({ onNavigate }: TicketsPageWrapperProps) {
  useEffect(() => {
    // Make all "Get Ticket" buttons show a toast
    const handleButtonClick = (e: Event) => {
      const button = e.target as HTMLElement;
      const buttonText = button.textContent;
      
      if (buttonText?.includes('Get Ticket')) {
        e.preventDefault();
        e.stopPropagation();
        
        // Find which pass was selected by looking at parent card
        let passType = 'Ticket';
        const card = button.closest('div[class*="border"]');
        if (card) {
          const cardText = card.textContent || '';
          if (cardText.includes('General Admission')) passType = 'General Admission Pass';
          else if (cardText.includes('Startup Pass')) passType = 'Startup Pass';
          else if (cardText.includes('Investor Pass')) passType = 'Investor Pass';
          else if (cardText.includes('VIP Pass')) passType = 'VIP Pass';
        }
        
        toast.success(`${passType} added to cart!`, {
          description: 'Redirecting to checkout...',
        });
        
        setTimeout(() => {
          toast.info('Checkout page would appear here', {
            description: 'This is a prototype - payment integration not included',
          });
        }, 1500);
      }
    };

    // Add event listener to document for delegated event handling
    document.addEventListener('click', handleButtonClick);
    
    return () => {
      document.removeEventListener('click', handleButtonClick);
    };
  }, [onNavigate]);

  return <TicketsPageResponsive />;
}