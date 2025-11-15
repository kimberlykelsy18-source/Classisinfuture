// AGGRESSIVE MOBILE FIX - Runs immediately on page load
(function() {
  'use strict';
  
  console.log('🔧 Mobile fix script loaded');
  
  // Function to force visibility
  function forceMobileVisibility() {
    // Find all Figma imported pages
    const selectors = [
      '[data-name*="Landing"]',
      '[data-name*="About"]',
      '[data-name="Landing page"]',
      '[data-name*="page"]'
    ];
    
    selectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        el.style.display = 'block';
        el.style.visibility = 'visible';
        el.style.opacity = '1';
        el.style.width = '100%';
        el.style.maxWidth = '100vw';
        el.style.overflowX = 'hidden';
        el.style.position = 'relative';
        
        console.log('✅ Fixed element:', selector);
      });
    });
    
    // Force body and html
    document.documentElement.style.overflowX = 'hidden';
    document.documentElement.style.width = '100%';
    document.body.style.overflowX = 'hidden';
    document.body.style.width = '100%';
    
    // Force root
    const root = document.getElementById('root');
    if (root) {
      root.style.overflowX = 'hidden';
      root.style.width = '100%';
      root.style.display = 'block';
      root.style.visibility = 'visible';
    }
    
    // Force main
    const main = document.querySelector('main');
    if (main) {
      main.style.overflowX = 'hidden';
      main.style.width = '100%';
      main.style.display = 'block';
      main.style.visibility = 'visible';
    }
    
    console.log('✅ Mobile visibility forced');
  }
  
  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', forceMobileVisibility);
  } else {
    forceMobileVisibility();
  }
  
  // Run multiple times to catch dynamic content
  setTimeout(forceMobileVisibility, 100);
  setTimeout(forceMobileVisibility, 300);
  setTimeout(forceMobileVisibility, 500);
  setTimeout(forceMobileVisibility, 1000);
  setTimeout(forceMobileVisibility, 2000);
  
  // Run on window load
  window.addEventListener('load', forceMobileVisibility);
  
  // Run on resize
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(forceMobileVisibility, 100);
  });
  
  // Mutation observer to catch any new elements
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.addedNodes.length) {
        setTimeout(forceMobileVisibility, 50);
      }
    });
  });
  
  // Start observing
  if (document.body) {
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  } else {
    document.addEventListener('DOMContentLoaded', function() {
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    });
  }
  
  console.log('🚀 Mobile fix active and watching');
})();
