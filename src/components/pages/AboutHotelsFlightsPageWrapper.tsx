import AboutHotelsFlightsPage from '../../imports/AboutHotelsFlightsPage';
import { ResponsivePageContainer } from '../ResponsivePageContainer';

interface AboutHotelsFlightsPageWrapperProps {
  onNavigate: (page: string) => void;
}

export function AboutHotelsFlightsPageWrapper({ onNavigate }: AboutHotelsFlightsPageWrapperProps) {
  return (
    <ResponsivePageContainer>
      <AboutHotelsFlightsPage />
    </ResponsivePageContainer>
  );
}
