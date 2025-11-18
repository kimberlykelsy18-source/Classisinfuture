import { ReactNode } from 'react';

interface ResponsivePageContainerProps {
  children: ReactNode;
  designWidth?: number;
}

export function ResponsivePageContainer({ children, designWidth = 1728 }: ResponsivePageContainerProps) {
  return (
    <div className="w-full bg-white">
      {/* 
        Responsive wrapper for Figma designs
        - On large screens (>1728px): Centers the design at its original width
        - On smaller screens: Scales down proportionally using CSS zoom
      */}
      <style>{`
        .figma-design-wrapper {
          width: 100%;
          max-width: ${designWidth}px;
          margin: 0 auto;
        }
        
        @media (max-width: ${designWidth}px) {
          .figma-design-scaler {
            width: ${designWidth}px;
            zoom: calc(100vw / ${designWidth});
          }
        }
        
        @media (min-width: ${designWidth + 1}px) {
          .figma-design-scaler {
            width: ${designWidth}px;
          }
        }
      `}</style>
      <div className="figma-design-wrapper">
        <div className="figma-design-scaler">
          {children}
        </div>
      </div>
    </div>
  );
}
