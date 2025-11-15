import LandingPage from '../imports/LandingPage';

export function ResponsiveLandingPage() {
  return (
    <div className="w-full max-w-[100vw] overflow-hidden">
      {/* Wrapper that scales the entire landing page */}
      <div className="w-full" style={{
        // Scale the landing page content
        transform: 'scale(1)',
        transformOrigin: 'top center',
        maxWidth: '100vw',
        overflow: 'hidden'
      }}>
        {/* Inner container with responsive scaling */}
        <div 
          className="mx-auto"
          style={{
            width: 'min(1728px, 100vw)',
            // Scale down on smaller screens
            transform: window.innerWidth < 1728 
              ? `scale(${window.innerWidth / 1728})` 
              : 'scale(1)',
            transformOrigin: 'top center'
          }}
        >
          <LandingPage />
        </div>
      </div>
    </div>
  );
}
