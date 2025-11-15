import AboutOverviewPage from '../../imports/AboutOverviewPage';

interface AboutPageWrapperProps {
  onNavigate: (page: string) => void;
}

export function AboutPageWrapper({ onNavigate }: AboutPageWrapperProps) {
  return (
    <div className="w-full bg-white overflow-x-hidden">
      <AboutOverviewPage />
    </div>
  );
}
