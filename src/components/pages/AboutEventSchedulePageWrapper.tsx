import AboutEventSchedulePage from '../../imports/AboutEventSchedulePage';
import { ResponsivePageContainer } from '../ResponsivePageContainer';

interface AboutEventSchedulePageWrapperProps {
  onNavigate: (page: string) => void;
}

export function AboutEventSchedulePageWrapper({ onNavigate }: AboutEventSchedulePageWrapperProps) {
  return (
    <ResponsivePageContainer>
      <AboutEventSchedulePage />
    </ResponsivePageContainer>
  );
}
