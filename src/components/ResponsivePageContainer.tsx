import { ReactNode, useEffect, useState } from 'react';

interface ResponsivePageContainerProps {
  children: ReactNode;
}

export function ResponsivePageContainer({ children }: ResponsivePageContainerProps) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const calculateScale = () => {
      const screenWidth = window.innerWidth;
      const designWidth = 1728; // Figma design width
      
      // Desktop - show full size
      if (screenWidth >= 1728) {
        setScale(1);
      }
      // Smaller desktop/laptop - scale down slightly
      else if (screenWidth >= 1024) {
        setScale(screenWidth / designWidth);
      }
      // Tablet
      else if (screenWidth >= 768) {
        setScale(screenWidth / designWidth);
      }
      // Mobile
      else {
        setScale(screenWidth / designWidth);
      }
    };

    calculateScale();
    window.addEventListener('resize', calculateScale);
    return () => window.removeEventListener('resize', calculateScale);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'white',
      }}
    >
      <div
        style={{
          width: '1728px',
          transformOrigin: 'top center',
          transform: `scale(${scale})`,
          transition: 'transform 0.3s ease',
        }}
      >
        {children}
      </div>
    </div>
  );
}
