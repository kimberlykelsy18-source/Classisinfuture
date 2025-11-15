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
    <footer className="bg-black text-white w-full max-w-[100vw] overflow-x-hidden">
      <div className="w-full max-w-[1616px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16">
        
        {/* Newsletter Section */}
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-12 w-full">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-16 w-full">
            <div className="flex flex-col gap-2 flex-1">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#e9eaeb] text-base md:text-lg">Join our newsletter</p>
              <p className="font-['Inter:Regular',sans-serif] text-[#d5d7da] text-sm md:text-base">Don't miss anything! We'll send you cool letters containing information about the conference.</p>
            </div>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full lg:w-auto lg:min-w-[400px]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 md:py-3 rounded-lg bg-white text-[#717680] text-sm md:text-base outline-none border border-[#d5d7da]"
              />
              
              <button 
                type="submit"
                className="bg-[#7f56d9] hover:bg-[#8f66e9] text-white px-6 py-2.5 md:py-3 rounded-lg font-['Inter:Semi_Bold',sans-serif] font-semibold text-sm md:text-base transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
          
          <div className="bg-[#e9eaeb] h-px w-full" />
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 mt-6 md:mt-8 w-full">
          {/* About Column */}
          <div className="flex flex-col gap-3 md:gap-4">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#d5d7da] text-xs md:text-sm">About</p>
            <div className="flex flex-col gap-2 md:gap-3">
              <button onClick={() => onNavigate('about')} className="font-['Inter:Medium',sans-serif] text-[#a4a7ae] text-sm md:text-base hover:text-white transition-colors text-left">Overview</button>
              <button onClick={() => onNavigate('event-schedule')} className="font-['Inter:Medium',sans-serif] text-[#a4a7ae] text-sm md:text-base hover:text-white transition-colors text-left">Event Schedule</button>
              <button onClick={() => onNavigate('get-booth')} className="font-['Inter:Medium',sans-serif] text-[#a4a7ae] text-sm md:text-base hover:text-white transition-colors text-left">Get a Booth</button>
              <button onClick={() => onNavigate('online-experience')} className="font-['Inter:Medium',sans-serif] text-[#a4a7ae] text-sm md:text-base hover:text-white transition-colors text-left">Online</button>
              <button onClick={() => onNavigate('hotels-flights')} className="font-['Inter:Medium',sans-serif] text-[#a4a7ae] text-sm md:text-base hover:text-white transition-colors text-left">Hotels</button>
            </div>
          </div>

          {/* For You Column */}
          <div className="flex flex-col gap-3 md:gap-4">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#d5d7da] text-xs md:text-sm">For You</p>
            <div className="flex flex-col gap-2 md:gap-3">
              <button className="font-['Inter:Medium',sans-serif] text-[#a4a7ae] text-sm md:text-base hover:text-white transition-colors text-left">Startups</button>
              <button className="font-['Inter:Medium',sans-serif] text-[#a4a7ae] text-sm md:text-base hover:text-white transition-colors text-left">Investors</button>
              <button className="font-['Inter:Medium',sans-serif] text-[#a4a7ae] text-sm md:text-base hover:text-white transition-colors text-left">Hackathon</button>
              <button className="font-['Inter:Medium',sans-serif] text-[#a4a7ae] text-sm md:text-base hover:text-white transition-colors text-left">Volunteers</button>
            </div>
          </div>

          {/* Partners Column */}
          <div className="flex flex-col gap-3 md:gap-4">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#d5d7da] text-xs md:text-sm">Partners</p>
            <div className="flex flex-col gap-2 md:gap-3">
              <button className="font-['Inter:Medium',sans-serif] text-[#a4a7ae] text-sm md:text-base hover:text-white transition-colors text-left">Partners</button>
              <button className="font-['Inter:Medium',sans-serif] text-[#a4a7ae] text-sm md:text-base hover:text-white transition-colors text-left">Media</button>
              <button className="font-['Inter:Medium',sans-serif] text-[#a4a7ae] text-sm md:text-base hover:text-white transition-colors text-left">Events</button>
            </div>
          </div>

          {/* Support Column */}
          <div className="flex flex-col gap-3 md:gap-4">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#d5d7da] text-xs md:text-sm">Support</p>
            <div className="flex flex-col gap-2 md:gap-3">
              <button className="font-['Inter:Medium',sans-serif] text-[#a4a7ae] text-sm md:text-base hover:text-white transition-colors text-left">FAQs</button>
              <button className="font-['Inter:Medium',sans-serif] text-[#a4a7ae] text-sm md:text-base hover:text-white transition-colors text-left">Contact</button>
              <button className="font-['Inter:Medium',sans-serif] text-[#a4a7ae] text-sm md:text-base hover:text-white transition-colors text-left">Privacy</button>
              <button className="font-['Inter:Medium',sans-serif] text-[#a4a7ae] text-sm md:text-base hover:text-white transition-colors text-left">Terms</button>
            </div>
          </div>

          {/* Social Column */}
          <div className="flex flex-col gap-3 md:gap-4">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#d5d7da] text-xs md:text-sm">Social</p>
            <div className="flex flex-col gap-2 md:gap-3">
              <button className="font-['Inter:Medium',sans-serif] text-[#a4a7ae] text-sm md:text-base hover:text-white transition-colors text-left">X</button>
              <button className="font-['Inter:Medium',sans-serif] text-[#a4a7ae] text-sm md:text-base hover:text-white transition-colors text-left">LinkedIn</button>
              <button className="font-['Inter:Medium',sans-serif] text-[#a4a7ae] text-sm md:text-base hover:text-white transition-colors text-left">Facebook</button>
              <button className="font-['Inter:Medium',sans-serif] text-[#a4a7ae] text-sm md:text-base hover:text-white transition-colors text-left">Instagram</button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 md:mt-8 lg:mt-12 pt-6 md:pt-8 border-t border-[#e9eaeb]/20">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 md:gap-4 text-[#a4a7ae] text-xs md:text-sm">
            <p className="font-['Inter:Regular',sans-serif]">
              © 2025 Class is in Future by Tutlee. All rights reserved.
            </p>
            <p className="font-['Inter:Regular',sans-serif]">
              Privacy • Terms
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
