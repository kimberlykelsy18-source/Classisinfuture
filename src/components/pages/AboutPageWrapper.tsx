import AboutOverviewPage from '../../imports/AboutOverviewPage';
import { ResponsivePageContainer } from '../ResponsivePageContainer';

interface AboutPageWrapperProps {
  onNavigate: (page: string) => void;
}

export function AboutPageWrapper({ onNavigate }: AboutPageWrapperProps) {
  return (
    <ResponsivePageContainer>
      <AboutOverviewPage />
    </ResponsivePageContainer>
  );
}
