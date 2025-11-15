import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage?: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage = 'home', onNavigate }: NavigationProps) {
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation Bar - Highest z-index */}
      <nav className="fixed top-0 left-0 right-0 bg-black w-full" style={{ zIndex: 9999 }}>
        <div className="w-full max-w-[100vw] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20 lg:h-24">
            {/* Logo */}
            <button 
              onClick={() => {
                onNavigate('home');
                setMobileMenuOpen(false);
              }}
              className="flex flex-col items-start text-white hover:opacity-80 transition-opacity z-50 flex-shrink-0"
            >
              <p className="font-['Anta:Regular',sans-serif] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-tight whitespace-nowrap">
                <span>Class is in </span>
                <span className="text-[#56aa3e]">Future</span>
              </p>
              <p className="font-['Inter:Regular',sans-serif] text-xs sm:text-sm md:text-base lg:text-lg leading-tight whitespace-nowrap">
                <span>by </span>
                <span className="font-semibold text-white">Tutlee</span>
              </p>
            </button>

            {/* Desktop Navigation (hidden on mobile/tablet) */}
            <div className="hidden xl:flex items-center gap-4 2xl:gap-8">
              {/* About Dropdown - Hoverable with clickable items */}
              <div 
                className="relative"
                style={{ zIndex: 10001 }}
                onMouseEnter={() => setAboutDropdownOpen(true)}
                onMouseLeave={() => setAboutDropdownOpen(false)}
              >
                <button 
                  onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                  className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity py-2 px-3 rounded"
                >
                  <span className="font-['Afacad:Medium',sans-serif] font-medium text-lg lg:text-xl 2xl:text-2xl whitespace-nowrap">
                    About
                  </span>
                  <ChevronDown 
                    className={`w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-200 ${
                      aboutDropdownOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {/* Dropdown Menu */}
                {aboutDropdownOpen && (
                  <div 
                    className="absolute left-0 bg-black border border-white/20 rounded-lg shadow-2xl"
                    style={{ 
                      top: '100%',
                      marginTop: '0.5rem',
                      minWidth: '240px',
                      zIndex: 10002
                    }}
                    onMouseEnter={() => setAboutDropdownOpen(true)}
                    onMouseLeave={() => setAboutDropdownOpen(false)}
                  >
                    <div className="py-2 px-2">
                      <button 
                        onClick={() => { 
                          onNavigate('about'); 
                          setAboutDropdownOpen(false); 
                        }}
                        className="w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded font-['Afacad:Medium',sans-serif] text-base transition-colors"
                      >
                        Overview
                      </button>
                      <button 
                        onClick={() => { 
                          onNavigate('event-schedule'); 
                          setAboutDropdownOpen(false); 
                        }}
                        className="w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded font-['Afacad:Medium',sans-serif] text-base transition-colors"
                      >
                        Event Schedule
                      </button>
                      <button 
                        onClick={() => { 
                          onNavigate('get-booth'); 
                          setAboutDropdownOpen(false); 
                        }}
                        className="w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded font-['Afacad:Medium',sans-serif] text-base transition-colors"
                      >
                        Get a Booth
                      </button>
                      <button 
                        onClick={() => { 
                          onNavigate('online-experience'); 
                          setAboutDropdownOpen(false); 
                        }}
                        className="w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded font-['Afacad:Medium',sans-serif] text-base transition-colors"
                      >
                        Online Experience
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button 
                onClick={() => {
                  const element = document.getElementById('speakers');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    onNavigate('home');
                    setTimeout(() => {
                      const el = document.getElementById('speakers');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }
                }}
                className="font-['Afacad:Medium',sans-serif] font-medium text-lg lg:text-xl 2xl:text-2xl text-white hover:opacity-80 transition-opacity whitespace-nowrap"
              >
                Speakers
              </button>

              <button className="font-['Afacad:Medium',sans-serif] font-medium text-lg lg:text-xl 2xl:text-2xl text-white hover:opacity-80 transition-opacity whitespace-nowrap">
                Partners
              </button>

              <button 
                onClick={() => onNavigate('tickets')}
                className="bg-[#6923d2] hover:bg-[#7c3ee6] text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-['Afacad:Medium',sans-serif] font-medium text-lg lg:text-xl transition-colors whitespace-nowrap"
              >
                Get Tickets
              </button>
            </div>

            {/* Mobile Menu Button (visible on mobile/tablet) */}
            <button 
              className="xl:hidden text-white p-2 z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div 
            className="xl:hidden fixed inset-0 bg-black overflow-y-auto"
            style={{ 
              top: '64px',
              zIndex: 9998 
            }}
          >
            <div className="flex flex-col p-4 space-y-2">
              {/* About Section */}
              <div className="border-b border-white/20 pb-4 mb-2">
                <p className="text-white/60 text-sm font-semibold mb-2 px-4">ABOUT</p>
                <button 
                  onClick={() => { 
                    onNavigate('about'); 
                    setMobileMenuOpen(false); 
                  }}
                  className="w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded font-['Afacad:Medium',sans-serif] text-base transition-colors"
                >
                  Overview
                </button>
                <button 
                  onClick={() => { 
                    onNavigate('event-schedule'); 
                    setMobileMenuOpen(false); 
                  }}
                  className="w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded font-['Afacad:Medium',sans-serif] text-base transition-colors"
                >
                  Event Schedule
                </button>
                <button 
                  onClick={() => { 
                    onNavigate('get-booth'); 
                    setMobileMenuOpen(false); 
                  }}
                  className="w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded font-['Afacad:Medium',sans-serif] text-base transition-colors"
                >
                  Get a Booth
                </button>
                <button 
                  onClick={() => { 
                    onNavigate('online-experience'); 
                    setMobileMenuOpen(false); 
                  }}
                  className="w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded font-['Afacad:Medium',sans-serif] text-base transition-colors"
                >
                  Online Experience
                </button>
              </div>
              
              <button 
                onClick={() => {
                  const element = document.getElementById('speakers');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    onNavigate('home');
                    setTimeout(() => {
                      const el = document.getElementById('speakers');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded font-['Afacad:Medium',sans-serif] text-base transition-colors"
              >
                Speakers
              </button>

              <button className="w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded font-['Afacad:Medium',sans-serif] text-base transition-colors">
                Partners
              </button>

              <button 
                onClick={() => { 
                  onNavigate('tickets'); 
                  setMobileMenuOpen(false); 
                }}
                className="bg-[#6923d2] hover:bg-[#7c3ee6] text-white px-4 py-3 rounded-lg font-['Afacad:Medium',sans-serif] text-base font-medium transition-colors mt-4"
              >
                Get Tickets
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
