import AboutHotelsFlightsPage from '../../imports/AboutHotelsFlightsPage';

interface AboutHotelsFlightsPageWrapperProps {
  onNavigate: (page: string) => void;
}

export function AboutHotelsFlightsPageWrapper({ onNavigate }: AboutHotelsFlightsPageWrapperProps) {
  return <AboutHotelsFlightsPage onNavigate={onNavigate} />;
}
