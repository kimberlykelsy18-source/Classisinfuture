import AboutHotelsFlightsPageResponsive from './AboutHotelsFlightsPageResponsive';

interface AboutHotelsFlightsPageProps {
  onNavigate?: (page: string) => void;
}

export default function AboutHotelsFlightsPage({ onNavigate }: AboutHotelsFlightsPageProps) {
  return <AboutHotelsFlightsPageResponsive onNavigate={onNavigate} />;
}
