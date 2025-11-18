/* UPDATED VERSION - CENTERED LAYOUT WITH PROPER SPACING - v4.0 */
import svgPaths from "./svg-f6jx11ug60";
import React from "react";

// Production-ready image URLs
const imgFrame6 = "https://images.unsplash.com/photo-1563807893646-b6598a2b6fdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwc3RhZ2UlMjBjcm93ZHxlbnwxfHx8fDE3NjM0NTA4NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080";
const imgFrame87 = "https://images.unsplash.com/photo-1570106413982-7f2897b8d0c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG1hcCUyMG5ldHdvcmt8ZW58MXx8fHwxNzYzMzkxNDE5fDA&ixlib=rb-4.1.0&q=80&w=1080";

// Animated character images for speakers
const imgSpeaker1 = "https://images.unsplash.com/photo-1743247299142-8f1c919776c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMGF2YXRhciUyMGNoYXJhY3RlciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjM0NTc1ODd8MA&ixlib=rb-4.1.0&q=80&w=1080";
const imgSpeaker2 = "https://images.unsplash.com/photo-1652795385697-1e5e522c98d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0b29uJTIwYnVzaW5lc3MlMjBjaGFyYWN0ZXIlMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzYzNDU3NTg4fDA&ixlib=rb-4.1.0&q=80&w=1080";
const imgSpeaker3 = "https://images.unsplash.com/photo-1740252117027-4275d3f84385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRlZCUyMHByb2Zlc3Npb25hbCUyMGF2YXRhcnxlbnwxfHx8fDE3NjM0NTc1ODh8MA&ixlib=rb-4.1.0&q=80&w=1080";
const imgSpeaker4 = "https://images.unsplash.com/photo-1634896941598-b6b500a502a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY2hhcmFjdGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzNDU3NTg4fDA&ixlib=rb-4.1.0&q=80&w=1080";

const imgImage = "https://images.unsplash.com/photo-1762278805116-118893051302?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHB1cnBsZSUyMHdhdmV8ZW58MXx8fHwxNzYzNDUwODY4fDA&ixlib=rb-4.1.0&q=80&w=1080";

// Decorative Components
function Component4() {
  return (
    <div className="absolute h-[232px] left-0 top-0 w-[200px] opacity-60" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 232">
        <g id="Component 1">
          <path clipRule="evenodd" d={svgPaths.p28ca1b00} fill="var(--fill-0, #6E92ED)" fillOpacity="0.36" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute h-[232px] right-0 top-0 w-[248px] opacity-60" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 248 232">
        <g id="Component 1">
          <path clipRule="evenodd" d={svgPaths.p33651b00} fill="var(--fill-0, #EFC8C7)" fillOpacity="0.48" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

// Logos
function Dell({ className }: { className?: string }) {
  return (
    <div className={className} data-name="dell">
      <div className="absolute inset-[6.25%_6.26%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77 77">
          <g id="dell">
            <path clipRule="evenodd" d={svgPaths.p3fd4bd00} fill="var(--fill-0, #0083CA)" fillRule="evenodd" />
            <path d={svgPaths.p9e5c200} fill="var(--fill-0, #0083CA)" />
            <path clipRule="evenodd" d={svgPaths.p2aabbaf0} fill="var(--fill-0, #0083CA)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Ibm({ className }: { className?: string }) {
  return (
    <div className={className} data-name="ibm">
      <div className="absolute h-[38.5px] left-0 top-[24.75px] w-[88px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 39">
          <g id="ibm">
            <path d={svgPaths.p22ef3da6} fill="var(--fill-0, #1F70C1)" />
            <path d={svgPaths.p1c638300} fill="var(--fill-0, #1F70C1)" />
            <path d={svgPaths.p2cc97300} fill="var(--fill-0, #1F70C1)" />
            <path d={svgPaths.pc749d00} fill="var(--fill-0, #1F70C1)" />
            <path d={svgPaths.p101ebf0} fill="var(--fill-0, #1F70C1)" />
            <path d={svgPaths.p19e0f600} fill="var(--fill-0, #1F70C1)" />
            <path d={svgPaths.p17c33000} fill="var(--fill-0, #1F70C1)" />
            <path d={svgPaths.p104d5e00} fill="var(--fill-0, #1F70C1)" />
            <path d={svgPaths.p8bbfb70} fill="var(--fill-0, #1F70C1)" />
            <path d={svgPaths.pf69d380} fill="var(--fill-0, #1F70C1)" />
            <path d={svgPaths.p258c6a80} fill="var(--fill-0, #1F70C1)" />
            <path d={svgPaths.p314e3e00} fill="var(--fill-0, #1F70C1)" />
            <path d={svgPaths.p210850b2} fill="var(--fill-0, #1F70C1)" />
            <path d={svgPaths.p2794b800} fill="var(--fill-0, #1F70C1)" />
            <path d={svgPaths.p5805600} fill="var(--fill-0, #1F70C1)" />
            <path d={svgPaths.p35b83f80} fill="var(--fill-0, #1F70C1)" />
            <path d={svgPaths.p12246200} fill="var(--fill-0, #1F70C1)" />
            <path d={svgPaths.p485680} fill="var(--fill-0, #1F70C1)" />
            <path d={svgPaths.p1e752080} fill="var(--fill-0, #1F70C1)" />
            <path d={svgPaths.p1bc43700} fill="var(--fill-0, #1F70C1)" />
            <path d={svgPaths.p27cb6bf0} fill="var(--fill-0, #1F70C1)" />
            <path d={svgPaths.p23f44f00} fill="var(--fill-0, #1F70C1)" />
            <path d={svgPaths.p2b938470} fill="var(--fill-0, #1F70C1)" />
            <path d={svgPaths.p2b736100} fill="var(--fill-0, #1F70C1)" />
            <path d={svgPaths.p2c3f9100} fill="var(--fill-0, #1F70C1)" />
            <path d={svgPaths.p254d1470} fill="var(--fill-0, #1F70C1)" />
            <path d={svgPaths.p3bb11800} fill="var(--fill-0, #1F70C1)" />
            <path d={svgPaths.p12d8df00} fill="var(--fill-0, #1F70C1)" />
            <path d={svgPaths.p2f49d00} fill="var(--fill-0, #1F70C1)" />
            <path d={svgPaths.p27aa2ef0} fill="var(--fill-0, #1F70C1)" />
            <path d={svgPaths.p366f4c00} fill="var(--fill-0, #1F70C1)" />
            <path d={svgPaths.p7de9a40} fill="var(--fill-0, #1F70C1)" />
            <path d={svgPaths.p9d6a9f0} fill="var(--fill-0, #1F70C1)" />
            <path d={svgPaths.peeec480} fill="var(--fill-0, #1F70C1)" />
            <path d={svgPaths.p1313bb00} fill="var(--fill-0, #1F70C1)" />
            <path d={svgPaths.p98e3d00} fill="var(--fill-0, #1F70C1)" />
            <path d={svgPaths.p2d83e080} fill="var(--fill-0, #1F70C1)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LogosMicrosoft() {
  return (
    <div className="h-14 relative w-[261px]" data-name="logos:microsoft">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 261 56">
        <g clipPath="url(#clip0_1_8517)" id="logos:microsoft">
          <path d={svgPaths.p8cab180} fill="var(--fill-0, #706D6E)" />
          <path d={svgPaths.p2106eaf0} fill="var(--fill-0, #F1511B)" />
          <path d={svgPaths.p2535bb00} fill="var(--fill-0, #80CC28)" />
          <path d={svgPaths.p21d7b00} fill="var(--fill-0, #00ADEF)" />
          <path d={svgPaths.p10090e00} fill="var(--fill-0, #FBBC09)" />
        </g>
        <defs>
          <clipPath id="clip0_1_8517">
            <rect fill="white" height="56" width="261" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LogosMeta() {
  return (
    <div className="h-12 relative w-[236px]" data-name="logos:meta">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 236 48">
        <g clipPath="url(#clip0_23_7903)" id="logos:meta">
          <path d={svgPaths.p16e3800} fill="var(--fill-0, #0081FB)" />
          <path d={svgPaths.p3263480} fill="url(#paint0_linear_23_7903)" />
          <path d={svgPaths.p2c5c9f00} fill="url(#paint1_linear_23_7903)" />
          <path d={svgPaths.p2d19a200} fill="var(--fill-0, white)" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_23_7903" x1="915.988" x2="5844.73" y1="2663.04" y2="2911.93">
            <stop stopColor="#0064E1" />
            <stop offset="0.4" stopColor="#0064E1" />
            <stop offset="0.83" stopColor="#0073EE" />
            <stop offset="1" stopColor="#0082FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_23_7903" x1="1121.5" x2="1121.5" y1="3464.85" y2="1645.2">
            <stop stopColor="#0082FB" />
            <stop offset="1" stopColor="#0064E0" />
          </linearGradient>
          <clipPath id="clip0_23_7903">
            <rect fill="white" height="48" width="236" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function LandingPage() {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  React.useEffect(() => {
    const targetDate = new Date('2026-10-28T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

        setTimeLeft({ days, hours, minutes });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section - CENTERED WITH MAX-WIDTH */}
      <section className="relative w-full overflow-hidden bg-white flex justify-center">
        <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-20 sm:py-24 md:py-32 lg:py-40">
          <Component4 />
          <Component5 />
          
          <div className="relative z-10 w-full">
            {/* Hero Text */}
            <div className="text-center space-y-10 mb-32 w-full">
              <h1 className="font-['Afacad'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-black leading-tight w-full px-4">
                Education 2040: What We Build Today,<br />
                They'll Inherit Tomorrow
              </h1>
              
              <p className="font-['Afacad'] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black w-full mx-auto leading-relaxed px-6">
                A future-forward, moonshot-themed gathering where investors and founders debate long-term bets in education innovation.
              </p>
            </div>
            
            {/* CTA Button with MASSIVE spacing */}
            <div className="text-center my-32 w-full">
              <button className="bg-[#6923d2] text-white px-10 py-5 sm:px-12 sm:py-6 lg:px-16 lg:py-7 rounded-xl font-['Afacad'] text-lg sm:text-xl lg:text-2xl hover:bg-[#5a1db8] transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105">
                Get a ticket to Class is in Future 2026
              </button>
            </div>
            
            {/* Hero Image */}
            <div className="w-full rounded-3xl overflow-hidden shadow-2xl mt-32">
              <img 
                src={imgFrame6} 
                alt="Conference Hero" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Should You Attend Section - CENTERED */}
      <section className="w-full bg-white py-20 sm:py-24 md:py-32 lg:py-40 flex justify-center">
        <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          {/* Section Header */}
          <div className="text-center space-y-10 mb-24 w-full">
            <h2 className="font-['Afacad'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-black tracking-tight w-full px-4">
              Why Should You Attend?
            </h2>
            <p className="font-['Afacad'] text-xl sm:text-2xl md:text-3xl text-black w-full mx-auto leading-relaxed px-6">
              Our conference brings together innovators from education and technology across six continents. Whether you're building, investing, teaching, or learning — this is where the future of classrooms takes shape.
            </p>
          </div>

          {/* Our Audience Grid Banner - CENTERED */}
          <div className="bg-black rounded-2xl py-8 px-8 text-center mb-20 overflow-hidden relative w-full mx-auto">
            <h3 className="font-['Afacad'] text-3xl sm:text-4xl text-white relative z-10">Our Audience Grid</h3>
            <div className="absolute left-0 top-0 h-full w-1/4 opacity-50">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 473 497">
                <path clipRule="evenodd" d={svgPaths.p2f210000} fill="url(#paint0_linear_1_8550)" fillOpacity="0.48" fillRule="evenodd" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_8550" x1="10.5045" x2="-462.12" y1="-249.232" y2="-269.152">
                    <stop stopColor="#541F94" />
                    <stop offset="1" stopColor="#C71C4F" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/4 opacity-50">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 473 497">
                <path clipRule="evenodd" d={svgPaths.p2f210000} fill="url(#paint0_linear_1_8551)" fillOpacity="0.48" fillRule="evenodd" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_8551" x1="10.5045" x2="-462.12" y1="-249.232" y2="-269.152">
                    <stop stopColor="#541F94" />
                    <stop offset="1" stopColor="#C71C4F" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Audience Cards Grid - CENTERED */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 w-full">
            {/* Educators Card */}
            <div className="bg-[#ffebf1] border-2 border-[#ff0056] rounded-2xl p-10 sm:p-12 lg:p-14 relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="absolute right-6 top-6 w-32 h-32 opacity-30">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 172 144">
                  <path clipRule="evenodd" d={svgPaths.p2960f300} fill="var(--fill-0, #FF5C93)" fillRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-['Afacad'] text-4xl sm:text-5xl lg:text-6xl text-[#ff5c93] mb-8 leading-tight relative z-10">
                Educators &<br />Researchers
              </h3>
              <p className="font-['Afacad'] text-lg sm:text-xl text-black leading-relaxed relative z-10">
                Gain hands-on exposure to emerging technologies transforming the classroom. From AI-driven tutors to immersive mixed reality labs, explore solutions you can take back to your students today — while contributing your expertise to shape tomorrow.
              </p>
            </div>

            {/* Startups Card */}
            <div className="bg-[#f2faf0] border-2 border-[#356926] rounded-2xl p-10 sm:p-12 lg:p-14 relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="absolute right-6 top-6 w-28 h-32 opacity-30">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 112 144">
                  <path clipRule="evenodd" d={svgPaths.p26865980} fill="var(--fill-0, #4F9D39)" fillRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-['Afacad'] text-4xl sm:text-5xl lg:text-6xl text-[#4f9d39] mb-8 leading-tight relative z-10">
                Startups &<br />Entrepreneurs
              </h3>
              <p className="font-['Afacad'] text-lg sm:text-xl text-[#4f9d39] leading-relaxed relative z-10">
                Showcase your product, meet early adopters, and pitch directly to global investors. Whether you're in stealth mode or scaling, this is the stage to gain traction, partnerships, and feedback from the people redefining learning.
              </p>
            </div>

            {/* Investors Card */}
            <div className="bg-[#f3eefc] border-2 border-[#6d24db] rounded-2xl p-10 sm:p-12 lg:p-14 relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="absolute right-6 top-6 w-28 h-32 opacity-30">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 144">
                  <path clipRule="evenodd" d={svgPaths.p179a7200} fill="var(--fill-0, #9059E3)" fillRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-['Afacad'] text-4xl sm:text-5xl lg:text-6xl text-[#9059e3] mb-8 leading-tight relative z-10">
                Investors &<br />Venture Capitalists
              </h3>
              <p className="font-['Afacad'] text-lg sm:text-xl text-black leading-relaxed relative z-10">
                Discover vetted startups and breakthrough innovations in AI, AR/VR, robotics, and learning platforms. Connect with founders solving real-world education challenges across diverse markets, from emerging regions to established ecosystems.
              </p>
            </div>

            {/* Technology Professionals Card */}
            <div className="bg-[#faefef] border-2 border-[#c63c39] rounded-2xl p-10 sm:p-12 lg:p-14 relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="absolute right-6 top-6 w-32 h-32 opacity-30">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128 144">
                  <path clipRule="evenodd" d={svgPaths.p15282a00} fill="var(--fill-0, #D46B68)" fillRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-['Afacad'] text-4xl sm:text-5xl lg:text-6xl text-[#d46b68] mb-8 leading-tight relative z-10">
                Technology<br />Professionals
              </h3>
              <p className="font-['Afacad'] text-lg sm:text-xl text-black leading-relaxed relative z-10">
                Step into the frontier of applied technology in education. Network with peers across AI, data science, software engineering, robotics, and design — and learn how your skills can power the next generation of classrooms by reimagining the education industry.
              </p>
            </div>
          </div>

          {/* Partners & Policy Makers Card (Full Width) - CENTERED */}
          <div className="bg-[#edf1fd] border-2 border-[#1b51da] rounded-2xl p-10 sm:p-12 lg:p-14 mb-32 relative overflow-hidden max-w-6xl mx-auto transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="absolute right-6 top-6 w-40 h-32 opacity-30">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 144">
                <path clipRule="evenodd" d={svgPaths.p25ce7000} fill="var(--fill-0, #3769E6)" fillRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-['Afacad'] text-4xl sm:text-5xl lg:text-6xl text-[#3769e6] mb-10 leading-tight relative z-10">
              Partners & Policy Makers
            </h3>
            <div className="space-y-8 relative z-10">
              <p className="font-['Afacad'] text-lg sm:text-xl text-[#3769e6] leading-relaxed">
                Forge meaningful collaborations with schools, governments, NGOs, and industry leaders working at the intersection of technology and education. As a partner, you'll gain direct access to pioneering ideas, pilot opportunities, and networks that span six continents. This is more than sponsorship — it's an opportunity to co-create the future of classrooms with innovators, researchers, and thought leaders. Showcase your initiatives, test solutions in real-world contexts, and build visibility as a changemaker in EdTech.
              </p>
              <p className="font-['Afacad'] text-lg sm:text-xl text-[#3769e6] leading-relaxed">
                For policymakers, this is a platform to influence how global education standards evolve, ensuring equitable access, ethical innovation, and long-term impact. Here, you can connect with startups pushing the boundaries of learning, educators on the front lines of adoption, and investors fueling the next wave of transformation. By being part of this global movement, you don't just observe change — you actively shape the systems, frameworks, and partnerships that will define how the next generation learns.
              </p>
            </div>
          </div>

          {/* CTA Button with MASSIVE spacing */}
          <div className="text-center mt-24 mb-40">
            <button className="bg-[#6923d2] text-white px-10 py-5 sm:px-12 sm:py-6 lg:px-16 lg:py-7 rounded-xl font-['Afacad'] text-lg sm:text-xl lg:text-2xl hover:bg-[#5a1db8] transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105">
              Check out the Event Schedule
            </button>
          </div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <section className="w-full bg-black py-20 sm:py-24 flex justify-center">
        <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-16 sm:gap-20 lg:gap-24">
            <Ibm className="overflow-clip relative shrink-0 size-[88px]" />
            <LogosMicrosoft />
            <Dell className="overflow-clip relative shrink-0 size-[88px]" />
            <LogosMeta />
          </div>
        </div>
      </section>

      {/* 6 Continents Section - CENTERED */}
      <section className="w-full bg-white py-20 sm:py-24 md:py-32 lg:py-40 flex justify-center">
        <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="w-full">
            {/* Section Header */}
            <div className="text-center space-y-10 mb-24 w-full">
              <h2 className="font-['Afacad'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-black tracking-tight px-4 w-full">
                6 Continents, 1 Shared Vision
              </h2>
              <p className="font-['Afacad'] text-xl sm:text-2xl md:text-3xl text-black w-full mx-auto leading-relaxed px-6">
                Education is a global challenge and innovation knows no borders. From the classrooms of Europe to the labs of Asia, the startups of Africa, the policy tables of North America, the creative hubs of South America, and the rising talent of Oceania, we are uniting voices from across six continents. Together, we're shaping a future where every learner has access to cutting-edge tools, inclusive opportunities, and a world-class education. One stage. One conversation. One vision for tomorrow's classrooms.
              </p>
            </div>

            {/* World Map */}
            <div className="w-full rounded-3xl overflow-hidden shadow-2xl mb-24">
              <img 
                src={imgFrame87} 
                alt="World Map" 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* CTA Buttons with MASSIVE spacing */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-24 mb-60 w-full">
              <button className="bg-[#6923d2] text-white px-10 py-5 sm:px-12 sm:py-6 lg:px-16 lg:py-7 rounded-xl font-['Afacad'] text-lg sm:text-xl lg:text-2xl hover:bg-[#5a1db8] transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 w-full sm:w-auto">
                Get Tickets
              </button>
              <button className="bg-[#f9f5ff] border-2 border-[#6941c6] text-[#6941c6] px-10 py-5 sm:px-12 sm:py-6 lg:px-16 lg:py-7 rounded-xl font-['Afacad'] text-lg sm:text-xl lg:text-2xl hover:bg-[#f3edff] transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 w-full sm:w-auto">
                Become a Partner
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Speakers Section - CENTERED */}
      <section className="w-full bg-[#9662e5] pt-40 pb-20 sm:pt-48 sm:pb-24 md:pt-56 md:pb-32 lg:pt-64 lg:pb-40 relative overflow-hidden flex justify-center">
        <div className="absolute left-[-130px] bottom-0 h-[312px] w-[274px] opacity-20 pointer-events-none">
          <img src={imgImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute right-[-50px] top-[-55px] h-[312px] w-[274px] opacity-20 pointer-events-none">
          <img src={imgImage} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-['Afacad'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white tracking-tight text-center mb-20">
              Our Speakers
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-32">
              {/* Speaker 1 */}
              <div className="bg-[#f3eefc] border-2 border-[#6d24db] rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <div className="aspect-square w-full overflow-hidden bg-white">
                  <img src={imgSpeaker1} alt="Alar Karis" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-['Afacad'] text-3xl sm:text-4xl text-[#6923d2] leading-tight mb-2">
                    Alar Karis
                  </h3>
                  <p className="font-['Afacad'] text-base sm:text-lg text-[#6923d2]">
                    President ∙ The Republic of Estonia
                  </p>
                </div>
              </div>

              {/* Speaker 2 */}
              <div className="bg-[#f3eefc] border-2 border-[#6d24db] rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <div className="aspect-square w-full overflow-hidden bg-white">
                  <img src={imgSpeaker2} alt="Alex Tsado" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-['Afacad'] text-3xl sm:text-4xl text-[#6923d2] leading-tight mb-2">
                    Alex Tsado
                  </h3>
                  <p className="font-['Afacad'] text-base sm:text-lg text-[#6923d2]">
                    Co-founder ∙ Alliance for Inclusive AI
                  </p>
                </div>
              </div>

              {/* Speaker 3 */}
              <div className="bg-[#f3eefc] border-2 border-[#6d24db] rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <div className="aspect-square w-full overflow-hidden bg-white">
                  <img src={imgSpeaker3} alt="Erkki Leego" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-['Afacad'] text-3xl sm:text-4xl text-[#6923d2] leading-tight mb-2">
                    Erkki Leego
                  </h3>
                  <p className="font-['Afacad'] text-base sm:text-lg text-[#6923d2]">
                    R&D Lead Expert ∙ Enterprise Estonia
                  </p>
                </div>
              </div>

              {/* Speaker 4 */}
              <div className="bg-[#f3eefc] border-2 border-[#6d24db] rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <div className="aspect-square w-full overflow-hidden bg-white">
                  <img src={imgSpeaker4} alt="Kate Kallot" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-['Afacad'] text-3xl sm:text-4xl text-[#6923d2] leading-tight mb-2">
                    Kate Kallot
                  </h3>
                  <p className="font-['Afacad'] text-base sm:text-lg text-[#6923d2]">
                    Founder & CEO ∙ Amini
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-[#6923d2] text-white px-12 py-6 sm:px-14 sm:py-7 lg:px-16 lg:py-8 rounded-xl font-['Afacad'] text-lg sm:text-xl lg:text-2xl hover:bg-[#5a1db8] transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105">
                View All Speakers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer Section - CENTERED */}
      <section className="w-full bg-white py-20 sm:py-24 md:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-['Afacad'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black tracking-tight leading-tight">
                <span>CLASS IS IN </span>
                <span className="text-[#6923d2]">FUTURE</span>
                <span> STARTS IN</span>
              </h2>
            </div>

            <div className="flex justify-center items-center gap-6 sm:gap-10 lg:gap-16">
              <div className="flex flex-col items-center">
                <p className="font-['Space_Mono'] text-7xl sm:text-8xl md:text-9xl text-[#6923d2] tracking-tight leading-none">
                  {timeLeft.days}
                </p>
                <p className="font-['Orbitron'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#6923d2] tracking-tight mt-6">
                  Days
                </p>
              </div>

              <p className="font-['Space_Mono'] text-7xl sm:text-8xl md:text-9xl text-[#6923d2] tracking-tight leading-none">
                :
              </p>

              <div className="flex flex-col items-center">
                <p className="font-['Space_Mono'] text-7xl sm:text-8xl md:text-9xl text-[#6923d2] tracking-tight leading-none">
                  {timeLeft.hours}
                </p>
                <p className="font-['Orbitron'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#6923d2] tracking-tight mt-6">
                  Hours
                </p>
              </div>

              <p className="font-['Space_Mono'] text-7xl sm:text-8xl md:text-9xl text-[#6923d2] tracking-tight leading-none">
                :
              </p>

              <div className="flex flex-col items-center">
                <p className="font-['Space_Mono'] text-7xl sm:text-8xl md:text-9xl text-[#6923d2] tracking-tight leading-none">
                  {timeLeft.minutes}
                </p>
                <p className="font-['Orbitron'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#6923d2] tracking-tight mt-6">
                  Minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}