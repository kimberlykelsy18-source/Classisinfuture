import { useEffect, useState } from 'react';
import AboutHotelsFlightsPageOriginal from './AboutHotelsFlightsPage-43-7937';

interface AboutHotelsFlightsPageResponsiveProps {
  onNavigate?: (page: string) => void;
}

export default function AboutHotelsFlightsPageResponsive({ onNavigate }: AboutHotelsFlightsPageResponsiveProps) {
  const [scale, setScale] = useState(1);
  
  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      const designWidth = 1728;
      const newScale = Math.min(viewportWidth / designWidth, 1);
      setScale(newScale);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const designHeight = 5720;
  const scaledHeight = designHeight * scale;
  
  return (
    <div className="w-full bg-white overflow-x-hidden">
      <div 
        className="w-full relative mx-auto"
        style={{
          height: `${scaledHeight}px`,
          maxWidth: '1728px'
        }}
      >
        <div 
          className="absolute top-0 left-1/2 origin-top"
          style={{
            width: '1728px',
            height: `${designHeight}px`,
            transform: `translateX(-50%) scale(${scale})`,
            transformOrigin: 'top center'
          }}
        >
          <AboutHotelsFlightsPageOriginal />
        </div>
      </div>
    </div>
  );
}
