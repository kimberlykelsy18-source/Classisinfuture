import AboutGetABoothPage from '../../imports/AboutGetABoothPage';

interface AboutGetABoothPageWrapperProps {
  onNavigate: (page: string) => void;
}

export function AboutGetABoothPageWrapper({ onNavigate }: AboutGetABoothPageWrapperProps) {
  return <AboutGetABoothPage />;
}
