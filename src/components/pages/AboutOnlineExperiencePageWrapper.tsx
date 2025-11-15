import AboutOnlineExperiencePage from '../../imports/AboutOnlineExperiencePage';

interface AboutOnlineExperiencePageWrapperProps {
  onNavigate: (page: string) => void;
}

export function AboutOnlineExperiencePageWrapper({ onNavigate }: AboutOnlineExperiencePageWrapperProps) {
  return <AboutOnlineExperiencePage />;
}
