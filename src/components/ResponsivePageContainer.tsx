import { ReactNode } from 'react';

interface ResponsivePageContainerProps {
  children: ReactNode;
}

export function ResponsivePageContainer({ children }: ResponsivePageContainerProps) {
  return (
    <div className="w-full min-w-[1728px] flex justify-center bg-white">
      {children}
    </div>
  );
}
