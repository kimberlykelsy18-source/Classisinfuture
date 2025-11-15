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
    <div className="bg-black text-white px-[56px] py-[64px]">
      <div className="max-w-[1616px] mx-auto">
        {/* Newsletter Section */}
        <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex gap-[232px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[8px] h-[62px] items-start not-italic relative shrink-0 w-[773px]">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] relative shrink-0 text-[#e9eaeb] text-[20px] w-full">Join our newsletter</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#d5d7da] text-[16px] w-full">Don't miss anything! We'll send you cool letters containing information about the conference.</p>
            </div>
            
            <form onSubmit={handleSubscribe} className="content-stretch flex gap-[16px] items-start relative shrink-0">
              <div className="content-stretch flex flex-col h-[44px] items-start relative shrink-0 w-[280px]">
                <div className="bg-white relative rounded-[8px] shrink-0 w-full">
                  <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                    <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#717680] text-[16px] outline-none w-full"
                      />
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                </div>
              </div>
              
              <button 
                type="submit"
                className="bg-[#7f56d9] relative rounded-[8px] shrink-0 hover:bg-[#8f66e9] transition-colors"
              >
                <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[18px] py-[10px] relative rounded-[inherit]">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Subscribe</p>
                </div>
              </button>
            </form>
          </div>
          
          <div className="bg-[#e9eaeb] h-px shrink-0 w-full" />
        </div>

        {/* Footer Links */}
        <div className="content-stretch flex gap-[32px] items-start mt-[32px] relative shrink-0 w-full">
          {/* About Column */}
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[149px]">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#d5d7da] text-[14px] w-full">About</p>
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              <button onClick={() => onNavigate('about')} className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic text-[#a4a7ae] text-[16px] hover:text-white transition-colors">Overview</button>
              <button onClick={() => onNavigate('event-schedule')} className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic text-[#a4a7ae] text-[16px] hover:text-white transition-colors">Event Schedule</button>
              <button onClick={() => onNavigate('get-booth')} className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic text-[#a4a7ae] text-[16px] hover:text-white transition-colors">Get a Booth</button>
              <button onClick={() => onNavigate('online-experience')} className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic text-[#a4a7ae] text-[16px] hover:text-white transition-colors">Online Experience</button>
              <button onClick={() => onNavigate('hotels-flights')} className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic text-[#a4a7ae] text-[16px] hover:text-white transition-colors">Hotels & Flights</button>
            </div>
          </div>

          {/* For You Column */}
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[149px]">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#d5d7da] text-[14px] w-full">For You</p>
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              <button className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic text-[#a4a7ae] text-[16px] hover:text-white transition-colors">Startups</button>
              <button className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic text-[#a4a7ae] text-[16px] hover:text-white transition-colors">Investors</button>
              <button className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic text-[#a4a7ae] text-[16px] hover:text-white transition-colors">Hackathon</button>
              <button className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic text-[#a4a7ae] text-[16px] hover:text-white transition-colors">Volunteers</button>
            </div>
          </div>

          {/* Partners & Media Column */}
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[150px]">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#d5d7da] text-[14px] w-full">Partners & Media</p>
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              <button className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic text-[#a4a7ae] text-[16px] hover:text-white transition-colors">Partners</button>
              <button className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic text-[#a4a7ae] text-[16px] hover:text-white transition-colors">Media</button>
              <button className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic text-[#a4a7ae] text-[16px] hover:text-white transition-colors">Events</button>
            </div>
          </div>

          {/* Support Column */}
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[149px]">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#d5d7da] text-[14px] w-full">Support</p>
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              <button className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic text-[#a4a7ae] text-[16px] hover:text-white transition-colors">FAQs</button>
              <button className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic text-[#a4a7ae] text-[16px] hover:text-white transition-colors">Contact</button>
              <button className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic text-[#a4a7ae] text-[16px] hover:text-white transition-colors">Privacy Policy</button>
              <button className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic text-[#a4a7ae] text-[16px] hover:text-white transition-colors">Accessibility Policy</button>
              <button className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic text-[#a4a7ae] text-[16px] hover:text-white transition-colors">Terms & Conditions</button>
            </div>
          </div>

          {/* Social Column */}
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[149px]">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#d5d7da] text-[14px] w-full">Login</p>
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              <button className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic text-[#a4a7ae] text-[16px] hover:text-white transition-colors">X</button>
              <button className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic text-[#a4a7ae] text-[16px] hover:text-white transition-colors">LinkedIn</button>
              <button className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic text-[#a4a7ae] text-[16px] hover:text-white transition-colors">Facebook</button>
              <button className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic text-[#a4a7ae] text-[16px] hover:text-white transition-colors">TikTok</button>
              <button className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic text-[#a4a7ae] text-[16px] hover:text-white transition-colors">Instagram</button>
              <button className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic text-[#a4a7ae] text-[16px] hover:text-white transition-colors">YouTube</button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-[48px] pt-[32px] border-t border-[#e9eaeb]/20">
          <div className="flex justify-between items-center">
            <p className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#a4a7ae] text-[14px]">
              © 2025 Class is in Future by Tutlee. All rights reserved.
            </p>
            <p className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#a4a7ae] text-[14px]">
              Privacy policy • Terms & Conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}