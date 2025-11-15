import AboutOnlineExperiencePage from '../../imports/AboutOnlineExperiencePage';

interface AboutOnlineExperiencePageWrapperProps {
  onNavigate: (page: string) => void;
}

export function AboutOnlineExperiencePageWrapper({ onNavigate }: AboutOnlineExperiencePageWrapperProps) {
  return (
    <div className="w-full bg-white overflow-x-hidden">
      <AboutOnlineExperiencePage />
    </div>
  );
}
