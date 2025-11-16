import AboutGetABoothPage from '../../imports/AboutGetABoothPage';

interface AboutGetABoothPageWrapperProps {
  onNavigate: (page: string) => void;
}

export function AboutGetABoothPageWrapper({ onNavigate }: AboutGetABoothPageWrapperProps) {
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
      <AboutGetABoothPage />
    </div>
  );
}
