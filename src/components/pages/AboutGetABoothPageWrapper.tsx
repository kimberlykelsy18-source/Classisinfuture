import AboutGetABoothPage from '../../imports/AboutGetABoothPage';

interface AboutGetABoothPageWrapperProps {
  onNavigate: (page: string) => void;
}

export function AboutGetABoothPageWrapper({ onNavigate }: AboutGetABoothPageWrapperProps) {
  return (
    <div className="w-full bg-white overflow-x-hidden">
      <AboutGetABoothPage />
    </div>
  );
}
