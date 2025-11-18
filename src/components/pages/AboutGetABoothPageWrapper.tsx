import AboutGetABoothPageResponsive from '../../imports/AboutGetABoothPageResponsive';

interface AboutGetABoothPageWrapperProps {
  onNavigate: (page: string) => void;
}

export function AboutGetABoothPageWrapper({ onNavigate }: AboutGetABoothPageWrapperProps) {
  return <AboutGetABoothPageResponsive onNavigate={onNavigate} />;
}
