import AboutOverviewPage from '../../imports/AboutOverviewPage';

interface AboutPageWrapperProps {
  onNavigate: (page: string) => void;
}

export function AboutPageWrapper({ onNavigate }: AboutPageWrapperProps) {
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
      <AboutOverviewPage />
    </div>
  );
}
