import AboutEventSchedulePage from '../../imports/AboutEventSchedulePage';

interface AboutEventSchedulePageWrapperProps {
  onNavigate: (page: string) => void;
}

export function AboutEventSchedulePageWrapper({ onNavigate }: AboutEventSchedulePageWrapperProps) {
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
      <AboutEventSchedulePage />
    </div>
  );
}
