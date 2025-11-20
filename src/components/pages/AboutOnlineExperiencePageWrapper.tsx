import AboutOnlineExperiencePageResponsive from '../../imports/AboutOnlineExperiencePageResponsive';

interface AboutOnlineExperiencePageWrapperProps {
  onNavigate: (page: string) => void;
}

export function AboutOnlineExperiencePageWrapper({ onNavigate }: AboutOnlineExperiencePageWrapperProps) {
  return <AboutOnlineExperiencePageResponsive onNavigate={onNavigate} />;
}