import AboutHotelsFlightsPage from '../../imports/AboutHotelsFlightsPage';

interface AboutHotelsFlightsPageWrapperProps {
  onNavigate: (page: string) => void;
}

export function AboutHotelsFlightsPageWrapper({ onNavigate }: AboutHotelsFlightsPageWrapperProps) {
  return (
    <div style={{ 
      width: '100%', 
      minHeight: '100vh',
      display: 'block',
      visibility: 'visible',
      opacity: 1,
      background: 'white',
      position: 'relative'
    }}>
      <AboutHotelsFlightsPage />
    </div>
  );
}
