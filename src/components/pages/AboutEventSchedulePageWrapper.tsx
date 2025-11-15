import AboutEventSchedulePage from '../../imports/AboutEventSchedulePage';

interface AboutEventSchedulePageWrapperProps {
  onNavigate: (page: string) => void;
}

export function AboutEventSchedulePageWrapper({ onNavigate }: AboutEventSchedulePageWrapperProps) {
  return <AboutEventSchedulePage />;
}
