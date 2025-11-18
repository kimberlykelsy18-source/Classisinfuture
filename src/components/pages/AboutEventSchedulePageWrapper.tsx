import AboutEventSchedulePageResponsive from '../../imports/AboutEventSchedulePageResponsive';

interface AboutEventSchedulePageWrapperProps {
  onNavigate: (page: string) => void;
}

export function AboutEventSchedulePageWrapper({ onNavigate }: AboutEventSchedulePageWrapperProps) {
  return <AboutEventSchedulePageResponsive onNavigate={onNavigate} />;
}
