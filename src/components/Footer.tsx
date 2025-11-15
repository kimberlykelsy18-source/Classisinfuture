import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Thanks for subscribing!', {
        description: 'You\'ll receive updates about the conference.',
      });
      setEmail('');
    } else {
      toast.error('Please enter your email address');
    }
  };

  return (
    <div className="bg-black text-white px-4 md:px-8 lg:px-[56px] py-8 md:py-12 lg:py-[64px]">
      <div className="max-w-[1616px] mx-auto">
        {/* Newsletter Section */}
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-[64px] w-full">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-[232px] w-full">
            <div className="flex flex-col gap-2 flex-1">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#e9eaeb] text-[18px] md:text-[20px]">Join our newsletter</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[#d5d7da] text-[14px] md:text-[16px]">Don't miss anything! We'll send you cool letters containing information about the conference.</p>
            </div>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="flex flex-col flex-1 sm:flex-initial sm:w-[280px]">
                <div className="bg-white rounded-lg w-full">
                  <div className="flex items-center overflow-hidden rounded-inherit h-[44px]">
                    <div className="flex gap-2 items-center px-3 md:px-[14px] py-2 md:py-[10px] w-full">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="flex-1 font-['Inter:Regular',sans-serif] font-normal text-[#717680] text-[14px] md:text-[16px] outline-none w-full"
                      />
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                </div>
              </div>
              
              <button 
                type="submit"
                className="bg-[#7f56d9] rounded-lg hover:bg-[#8f66e9] transition-colors h-[44px] px-6"
              >
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] md:text-[16px] text-white whitespace-nowrap">Subscribe</p>
              </button>
            </form>
          </div>
          
          <div className="bg-[#e9eaeb] h-px w-full" />
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-6 lg:gap-8 mt-8 lg:mt-[32px] w-full">
          {/* About Column */}
          <div className="flex flex-col gap-4">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#d5d7da] text-[14px]">About</p>
            <div className="flex flex-col gap-3">
              <button onClick={() => onNavigate('about')} className="font-['Inter:Medium',sans-serif] font-medium text-[#a4a7ae] text-[14px] md:text-[16px] hover:text-white transition-colors text-left">Overview</button>
              <button onClick={() => onNavigate('event-schedule')} className="font-['Inter:Medium',sans-serif] font-medium text-[#a4a7ae] text-[14px] md:text-[16px] hover:text-white transition-colors text-left">Event Schedule</button>
              <button onClick={() => onNavigate('get-booth')} className="font-['Inter:Medium',sans-serif] font-medium text-[#a4a7ae] text-[14px] md:text-[16px] hover:text-white transition-colors text-left">Get a Booth</button>
              <button onClick={() => onNavigate('online-experience')} className="font-['Inter:Medium',sans-serif] font-medium text-[#a4a7ae] text-[14px] md:text-[16px] hover:text-white transition-colors text-left">Online Experience</button>
              <button onClick={() => onNavigate('hotels-flights')} className="font-['Inter:Medium',sans-serif] font-medium text-[#a4a7ae] text-[14px] md:text-[16px] hover:text-white transition-colors text-left">Hotels & Flights</button>
            </div>
          </div>

          {/* For You Column */}
          <div className="flex flex-col gap-4">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#d5d7da] text-[14px]">For You</p>
            <div className="flex flex-col gap-3">
              <button className="font-['Inter:Medium',sans-serif] font-medium text-[#a4a7ae] text-[14px] md:text-[16px] hover:text-white transition-colors text-left">Startups</button>
              <button className="font-['Inter:Medium',sans-serif] font-medium text-[#a4a7ae] text-[14px] md:text-[16px] hover:text-white transition-colors text-left">Investors</button>
              <button className="font-['Inter:Medium',sans-serif] font-medium text-[#a4a7ae] text-[14px] md:text-[16px] hover:text-white transition-colors text-left">Hackathon</button>
              <button className="font-['Inter:Medium',sans-serif] font-medium text-[#a4a7ae] text-[14px] md:text-[16px] hover:text-white transition-colors text-left">Volunteers</button>
            </div>
          </div>

          {/* Partners & Media Column */}
          <div className="flex flex-col gap-4">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#d5d7da] text-[14px]">Partners & Media</p>
            <div className="flex flex-col gap-3">
              <button className="font-['Inter:Medium',sans-serif] font-medium text-[#a4a7ae] text-[14px] md:text-[16px] hover:text-white transition-colors text-left">Partners</button>
              <button className="font-['Inter:Medium',sans-serif] font-medium text-[#a4a7ae] text-[14px] md:text-[16px] hover:text-white transition-colors text-left">Media</button>
              <button className="font-['Inter:Medium',sans-serif] font-medium text-[#a4a7ae] text-[14px] md:text-[16px] hover:text-white transition-colors text-left">Events</button>
            </div>
          </div>

          {/* Support Column */}
          <div className="flex flex-col gap-4">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#d5d7da] text-[14px]">Support</p>
            <div className="flex flex-col gap-3">
              <button className="font-['Inter:Medium',sans-serif] font-medium text-[#a4a7ae] text-[14px] md:text-[16px] hover:text-white transition-colors text-left">FAQs</button>
              <button className="font-['Inter:Medium',sans-serif] font-medium text-[#a4a7ae] text-[14px] md:text-[16px] hover:text-white transition-colors text-left">Contact</button>
              <button className="font-['Inter:Medium',sans-serif] font-medium text-[#a4a7ae] text-[14px] md:text-[16px] hover:text-white transition-colors text-left">Privacy Policy</button>
              <button className="font-['Inter:Medium',sans-serif] font-medium text-[#a4a7ae] text-[14px] md:text-[16px] hover:text-white transition-colors text-left">Accessibility</button>
              <button className="font-['Inter:Medium',sans-serif] font-medium text-[#a4a7ae] text-[14px] md:text-[16px] hover:text-white transition-colors text-left">Terms</button>
            </div>
          </div>

          {/* Social Column */}
          <div className="flex flex-col gap-4">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#d5d7da] text-[14px]">Social</p>
            <div className="flex flex-col gap-3">
              <button className="font-['Inter:Medium',sans-serif] font-medium text-[#a4a7ae] text-[14px] md:text-[16px] hover:text-white transition-colors text-left">X</button>
              <button className="font-['Inter:Medium',sans-serif] font-medium text-[#a4a7ae] text-[14px] md:text-[16px] hover:text-white transition-colors text-left">LinkedIn</button>
              <button className="font-['Inter:Medium',sans-serif] font-medium text-[#a4a7ae] text-[14px] md:text-[16px] hover:text-white transition-colors text-left">Facebook</button>
              <button className="font-['Inter:Medium',sans-serif] font-medium text-[#a4a7ae] text-[14px] md:text-[16px] hover:text-white transition-colors text-left">TikTok</button>
              <button className="font-['Inter:Medium',sans-serif] font-medium text-[#a4a7ae] text-[14px] md:text-[16px] hover:text-white transition-colors text-left">Instagram</button>
              <button className="font-['Inter:Medium',sans-serif] font-medium text-[#a4a7ae] text-[14px] md:text-[16px] hover:text-white transition-colors text-left">YouTube</button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 lg:mt-[48px] pt-6 lg:pt-[32px] border-t border-[#e9eaeb]/20">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="font-['Inter:Regular',sans-serif] text-[#a4a7ae] text-[12px] md:text-[14px]">
              © 2025 Class is in Future by Tutlee. All rights reserved.
            </p>
            <p className="font-['Inter:Regular',sans-serif] text-[#a4a7ae] text-[12px] md:text-[14px]">
              Privacy policy • Terms & Conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}