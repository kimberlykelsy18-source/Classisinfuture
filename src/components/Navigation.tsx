import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface NavigationProps {
  currentPage?: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage = 'home', onNavigate }: NavigationProps) {
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  return (
    <div className="absolute bg-black h-[120px] left-0 overflow-visible top-0 w-full z-50">
      <div className="absolute content-stretch flex items-center justify-between left-1/2 top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[1616px]">
        {/* Logo */}
        <button 
          onClick={() => onNavigate('home')}
          className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 text-[0px] text-white w-[296px] cursor-pointer hover:opacity-80 transition-opacity"
        >
          <p className="font-['Anta:Regular',sans-serif] leading-[normal] relative shrink-0 text-[32px] w-full">
            <span>Class is in </span>
            <span className="text-[#56aa3e]">Future</span>
          </p>
          <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 w-full">
            <span className="leading-[30px] not-italic text-[20px]">by</span>
            <span className="leading-[32px] text-[24px]"> </span>
            <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] not-italic text-[20px] text-white">Tutlee</span>
          </p>
        </button>

        {/* Navigation Links */}
        <div className="content-stretch flex gap-[57px] items-center relative shrink-0">
          {/* About Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <button className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
              <p className="font-['Afacad:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[28px] text-nowrap text-white whitespace-pre">About</p>
              <ChevronDown className="size-6 text-white" />
            </button>
            
            {aboutDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-black border border-white/20 rounded-lg p-2 min-w-[200px]">
                <button 
                  onClick={() => onNavigate('about')}
                  className="w-full text-left px-4 py-2 text-white hover:bg-white/10 rounded font-['Afacad:Medium',sans-serif] text-[20px]"
                >
                  Overview
                </button>
                <button 
                  onClick={() => onNavigate('event-schedule')}
                  className="w-full text-left px-4 py-2 text-white hover:bg-white/10 rounded font-['Afacad:Medium',sans-serif] text-[20px]"
                >
                  Event Schedule
                </button>
                <button 
                  onClick={() => onNavigate('get-booth')}
                  className="w-full text-left px-4 py-2 text-white hover:bg-white/10 rounded font-['Afacad:Medium',sans-serif] text-[20px]"
                >
                  Get a Booth
                </button>
                <button 
                  onClick={() => onNavigate('online-experience')}
                  className="w-full text-left px-4 py-2 text-white hover:bg-white/10 rounded font-['Afacad:Medium',sans-serif] text-[20px]"
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
            className="font-['Afacad:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[28px] text-nowrap text-white whitespace-pre cursor-pointer hover:opacity-80 transition-opacity"
          >
            Speakers
          </button>

          <button className="font-['Afacad:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[28px] text-nowrap text-white whitespace-pre cursor-pointer hover:opacity-80 transition-opacity">
            Startups & Investors
          </button>

          <button className="font-['Afacad:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[28px] text-nowrap text-white whitespace-pre cursor-pointer hover:opacity-80 transition-opacity">
            Partners
          </button>

          <button className="font-['Afacad:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[28px] text-nowrap text-white whitespace-pre cursor-pointer hover:opacity-80 transition-opacity">
            Hackathon
          </button>

          {/* Get Tickets Button */}
          <button 
            onClick={() => onNavigate('tickets')}
            className="bg-[#6923d2] h-[56px] rounded-[8px] shrink-0 w-[160px] hover:bg-[#7c3ee6] transition-colors"
          >
            <div className="box-border content-stretch flex gap-[8px] h-[56px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit] w-[160px]">
              <p className="font-['Afacad:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[24px] text-nowrap text-white whitespace-pre">Get Tickets</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}