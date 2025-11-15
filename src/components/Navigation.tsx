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
    <div className="fixed bg-black h-[80px] md:h-[120px] left-0 top-0 w-full z-50 px-4 md:px-8">
      <div className="h-full max-w-[1616px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => onNavigate('home')}
          className="flex flex-col items-start leading-none text-white cursor-pointer hover:opacity-80 transition-opacity"
        >
          <p className="font-['Anta:Regular',sans-serif] text-[20px] md:text-[28px] lg:text-[32px] leading-tight">
            <span>Class is in </span>
            <span className="text-[#56aa3e]">Future</span>
          </p>
          <p className="font-['Inter:Regular',sans-serif] text-[14px] md:text-[18px] lg:text-[20px] leading-tight">
            <span>by </span>
            <span className="font-semibold text-white">Tutlee</span>
          </p>
        </button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-4 lg:gap-8 xl:gap-[57px] items-center">
          {/* About Dropdown - Now hoverable on entire area */}
          <div 
            className="relative group"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <div className="flex gap-2 items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
              <p className="font-['Afacad:Medium',sans-serif] font-medium text-[20px] lg:text-[24px] xl:text-[28px] text-white whitespace-nowrap">About</p>
              <ChevronDown className="size-4 lg:size-5 xl:size-6 text-white" />
            </div>
            
            {aboutDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-black border border-white/20 rounded-lg p-2 min-w-[200px] shadow-xl">
                <button 
                  onClick={() => {
                    onNavigate('about');
                    setAboutDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-white hover:bg-white/10 rounded font-['Afacad:Medium',sans-serif] text-[16px] lg:text-[18px] xl:text-[20px]"
                >
                  Overview
                </button>
                <button 
                  onClick={() => {
                    onNavigate('event-schedule');
                    setAboutDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-white hover:bg-white/10 rounded font-['Afacad:Medium',sans-serif] text-[16px] lg:text-[18px] xl:text-[20px]"
                >
                  Event Schedule
                </button>
                <button 
                  onClick={() => {
                    onNavigate('get-booth');
                    setAboutDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-white hover:bg-white/10 rounded font-['Afacad:Medium',sans-serif] text-[16px] lg:text-[18px] xl:text-[20px]"
                >
                  Get a Booth
                </button>
                <button 
                  onClick={() => {
                    onNavigate('online-experience');
                    setAboutDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-white hover:bg-white/10 rounded font-['Afacad:Medium',sans-serif] text-[16px] lg:text-[18px] xl:text-[20px]"
                >
                  Online Experience
                </button>
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
            className="font-['Afacad:Medium',sans-serif] font-medium text-[20px] lg:text-[24px] xl:text-[28px] text-white whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity"
          >
            Speakers
          </button>

          <button className="hidden lg:block font-['Afacad:Medium',sans-serif] font-medium text-[20px] lg:text-[24px] xl:text-[28px] text-white whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity">
            Startups & Investors
          </button>

          <button className="hidden xl:block font-['Afacad:Medium',sans-serif] font-medium text-[20px] lg:text-[24px] xl:text-[28px] text-white whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity">
            Partners
          </button>

          <button className="hidden xl:block font-['Afacad:Medium',sans-serif] font-medium text-[20px] lg:text-[24px] xl:text-[28px] text-white whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity">
            Hackathon
          </button>

          {/* Get Tickets Button */}
          <button 
            onClick={() => onNavigate('tickets')}
            className="bg-[#6923d2] h-[40px] md:h-[48px] lg:h-[56px] rounded-lg px-4 lg:px-6 hover:bg-[#7c3ee6] transition-colors"
          >
            <p className="font-['Afacad:Medium',sans-serif] font-medium text-[18px] lg:text-[20px] xl:text-[24px] text-white whitespace-nowrap">Get Tickets</p>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-[80px] left-0 right-0 bg-black border-t border-white/20 shadow-xl">
            <div className="flex flex-col p-4 gap-2">
              <div className="border-b border-white/20 pb-2 mb-2">
                <button 
                  onClick={() => {
                    onNavigate('about');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded font-['Afacad:Medium',sans-serif] text-[18px]"
                >
                  About - Overview
                </button>
                <button 
                  onClick={() => {
                    onNavigate('event-schedule');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded font-['Afacad:Medium',sans-serif] text-[18px]"
                >
                  About - Event Schedule
                </button>
                <button 
                  onClick={() => {
                    onNavigate('get-booth');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded font-['Afacad:Medium',sans-serif] text-[18px]"
                >
                  About - Get a Booth
                </button>
                <button 
                  onClick={() => {
                    onNavigate('online-experience');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded font-['Afacad:Medium',sans-serif] text-[18px]"
                >
                  About - Online Experience
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
                className="w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded font-['Afacad:Medium',sans-serif] text-[18px]"
              >
                Speakers
              </button>

              <button className="w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded font-['Afacad:Medium',sans-serif] text-[18px]">
                Startups & Investors
              </button>

              <button className="w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded font-['Afacad:Medium',sans-serif] text-[18px]">
                Partners
              </button>

              <button className="w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded font-['Afacad:Medium',sans-serif] text-[18px]">
                Hackathon
              </button>

              <button 
                onClick={() => {
                  onNavigate('tickets');
                  setMobileMenuOpen(false);
                }}
                className="bg-[#6923d2] text-white px-4 py-3 rounded-lg font-['Afacad:Medium',sans-serif] text-[18px] hover:bg-[#7c3ee6] transition-colors mt-2"
              >
                Get Tickets
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}