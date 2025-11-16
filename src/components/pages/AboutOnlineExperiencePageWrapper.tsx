import AboutOnlineExperiencePage from '../../imports/AboutOnlineExperiencePage';

interface AboutOnlineExperiencePageWrapperProps {
  onNavigate: (page: string) => void;
}

export function AboutOnlineExperiencePageWrapper({ onNavigate }: AboutOnlineExperiencePageWrapperProps) {
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
      <AboutOnlineExperiencePage />
    </div>
  );
}
