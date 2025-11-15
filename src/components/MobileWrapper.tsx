import { ReactNode } from 'react';

interface MobileWrapperProps {
  children: ReactNode;
}

export function MobileWrapper({ children }: MobileWrapperProps) {
  return (
    <div className="page-container">
      {children}
    </div>
  );
}
