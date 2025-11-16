import { ReactNode } from 'react';

interface MobileWrapperProps {
  children: ReactNode;
}

export function MobileWrapper({ children }: MobileWrapperProps) {
  return (
    <div className="responsive-page-wrapper">
      {children}
    </div>
  );
}
