import { ReactNode, useEffect, useState } from 'react';

interface ResponsivePageContainerProps {
  children: ReactNode;
}

export function ResponsivePageContainer({ children }: ResponsivePageContainerProps) {
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const calculateZoom = () => {
      const screenWidth = window.innerWidth;
      const designWidth = 1728; // Figma design width
      
      // Calculate zoom based on screen width
      let newZoom = screenWidth / designWidth;
      
      // Don't zoom beyond 100% on very large screens
      if (newZoom > 1) {
        newZoom = 1;
      }
      
      setZoom(newZoom);
    };

    calculateZoom();
    window.addEventListener('resize', calculateZoom);
    
    return () => window.removeEventListener('resize', calculateZoom);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        background: 'white',
      }}
    >
      <div
        style={{
          width: '1728px',
          zoom: zoom,
        }}
      >
        {children}
      </div>
    </div>
  );
}
