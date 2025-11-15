import AboutHotelsFlightsPage from '../../imports/AboutHotelsFlightsPage';

interface AboutHotelsFlightsPageWrapperProps {
  onNavigate: (page: string) => void;
}

export function AboutHotelsFlightsPageWrapper({ onNavigate }: AboutHotelsFlightsPageWrapperProps) {
  return (
    <div className="w-full bg-white overflow-x-hidden">
      <AboutHotelsFlightsPage />
    </div>
  );
}
