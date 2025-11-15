import { ReactNode, useEffect } from 'react';

interface MobileWrapperProps {
  children: ReactNode;
}

export function MobileWrapper({ children }: MobileWrapperProps) {
  useEffect(() => {
    // Force mobile visibility on mount
    const forceVisibility = () => {
      // Find all Figma imported pages
      const pages = document.querySelectorAll('[data-name*="Landing"], [data-name*="About"]');
      
      pages.forEach((page) => {
        const el = page as HTMLElement;
        el.style.display = 'block';
        el.style.visibility = 'visible';
        el.style.opacity = '1';
        el.style.width = '100%';
        el.style.maxWidth = '100vw';
        el.style.overflowX = 'hidden';
      });

      // Also force on direct children
      const children = document.querySelectorAll('[data-name*="Landing"] > *, [data-name*="About"] > *');
      children.forEach((child) => {
        const el = child as HTMLElement;
        el.style.display = 'block';
        el.style.visibility = 'visible';
        el.style.opacity = '1';
      });
    };

    // Run immediately
    forceVisibility();

    // Run again after a short delay to catch dynamically loaded content
    setTimeout(forceVisibility, 100);
    setTimeout(forceVisibility, 500);

    // Add resize listener
    const handleResize = () => {
      forceVisibility();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className="mobile-wrapper"
      style={{
        width: '100%',
        maxWidth: '100vw',
        overflowX: 'hidden',
        display: 'block',
        visibility: 'visible',
        position: 'relative',
        minHeight: '100vh'
      }}
    >
      {children}
    </div>
  );
}
