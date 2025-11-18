import AboutOverviewPageResponsive from '../../imports/AboutOverviewPageResponsive';

interface AboutPageWrapperProps {
  onNavigate: (page: string) => void;
}

export function AboutPageWrapper({ onNavigate }: AboutPageWrapperProps) {
  return <AboutOverviewPageResponsive onNavigate={onNavigate} />;
}
