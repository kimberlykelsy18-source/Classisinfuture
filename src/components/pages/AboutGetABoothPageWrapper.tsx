import AboutGetABoothPage from '../../imports/AboutGetABoothPage';
import { ResponsivePageContainer } from '../ResponsivePageContainer';

interface AboutGetABoothPageWrapperProps {
  onNavigate: (page: string) => void;
}

export function AboutGetABoothPageWrapper({ onNavigate }: AboutGetABoothPageWrapperProps) {
  return (
    <ResponsivePageContainer>
      <AboutGetABoothPage />
    </ResponsivePageContainer>
  );
}
