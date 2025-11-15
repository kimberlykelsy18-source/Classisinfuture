import AboutOverviewPage from '../../imports/AboutOverviewPage';

interface AboutPageWrapperProps {
  onNavigate: (page: string) => void;
}

export function AboutPageWrapper({ onNavigate }: AboutPageWrapperProps) {
  return <AboutOverviewPage />;
}
