import AboutOnlineExperiencePage from '../../imports/AboutOnlineExperiencePage';
import { ResponsivePageContainer } from '../ResponsivePageContainer';

interface AboutOnlineExperiencePageWrapperProps {
  onNavigate: (page: string) => void;
}

export function AboutOnlineExperiencePageWrapper({ onNavigate }: AboutOnlineExperiencePageWrapperProps) {
  return (
    <ResponsivePageContainer>
      <AboutOnlineExperiencePage />
    </ResponsivePageContainer>
  );
}
