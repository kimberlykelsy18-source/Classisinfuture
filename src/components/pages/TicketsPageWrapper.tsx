import TicketsPageResponsive from '../../imports/TicketsPageResponsive';

interface TicketsPageWrapperProps {
  onNavigate: (page: string) => void;
}

export function TicketsPageWrapper({ onNavigate }: TicketsPageWrapperProps) {
  return <TicketsPageResponsive onNavigate={onNavigate} />;
}