/* RESPONSIVE ABOUT OVERVIEW PAGE - Centered Layout with Proper Spacing */
import imgFrame96 from "figma:asset/9e19db1410ad54c763cde7258cb30e6259592838.png";
import imgDanielLiigus from "figma:asset/6ba846e20f5990c2d56de6ebadf4172a17996da4.png";
import imgFrame98 from "figma:asset/cd9a7169cbc80ef3a7d39d6082769457a3990f0c.png";
import imgFrame99 from "figma:asset/f971fc3dc319970b218220b3b0540c3cb2e9b2f3.png";
import imgFrame100 from "figma:asset/8752076381f930405c2797b2601b872e10ffcc2d.png";
import imgFrame101 from "figma:asset/b02a2578dd40fe6ec9433f582a41cb3474bbea2a.png";
import imgFrame102 from "figma:asset/49e306aa9b91721d8fb778b4c22b1914ea7b0475.png";
import imgFrame103 from "figma:asset/7a75cc4c3315cbb05a841da7e47815dbf56c88d2.png";
import imgFrame197 from "figma:asset/d4b45a1d6708d1b73301ef5cea0dfb20ef63cf87.png";
import imgFrame198 from "figma:asset/a9b39af3278f2b0b96e0bcaf41ba224036dc8645.png";
import imgFrame199 from "figma:asset/ccfb970bb724de7806fb2cc8a9e3e6441fcc12fe.png";
import imgFrame200 from "figma:asset/7f772569eb66c0149573a0dfb67bfd81de028e45.png";
import React from "react";

interface AboutOverviewPageResponsiveProps {
  onNavigate?: (page: string) => void;
}

export default function AboutOverviewPageResponsive({ onNavigate }: AboutOverviewPageResponsiveProps) {
  const teamMembers = [
    {
      name: "Ebube Dike",
      role: "Head, Follow-Up & Partnerships",
      email: "Ebube@tutlee.com",
      image: imgFrame96,
    },
    {
      name: "Daniel Liigus",
      role: "Operations & Logistics",
      email: "Daniel@tutlee.com",
      image: imgDanielLiigus,
    },
    {
      name: "Flourish Ralph",
      role: "Program Content & Distribution",
      email: "Flourish@tutlee.com",
      image: imgFrame98,
    },
    {
      name: "Kimberly Kelsy",
      role: "Operations & Logistics",
      email: "Kimberly@tutlee.com",
      image: imgFrame99,
    },
    {
      name: "Rebecca Davies",
      role: "Lead, Follow-Up & Partnerships",
      email: "Rebecca@tutlee.com",
      image: imgFrame100,
    },
    {
      name: "Victory Nwaka",
      role: "Marketing & Community",
      email: "Victory@tutlee.com",
      image: imgFrame101,
    },
    {
      name: "Eli Ukwaja",
      role: "Lead, Operations & Logistics",
      email: "Eli@tutlee.com",
      image: imgFrame102,
    },
    {
      name: "Aydin Scott",
      role: "Marketing & Community",
      email: "Aydin@tutlee.com",
      image: imgFrame103,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative w-full min-h-[600px] sm:min-h-[700px] lg:min-h-[900px] bg-black overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={imgFrame197} 
            alt="" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        {/* Vertical "CLASS IS" Text - Left Side (hidden on mobile) */}
        <div className="hidden lg:block absolute left-8 xl:left-16 top-1/2 -translate-y-1/2">
          <img 
            src={imgFrame198} 
            alt="Class Is" 
            className="h-[500px] xl:h-[600px] w-auto object-contain"
          />
        </div>

        {/* Vertical "IN FUTURE" Text - Right Side (hidden on mobile) */}
        <div className="hidden lg:block absolute right-8 xl:right-16 top-1/2 -translate-y-1/2">
          <img 
            src={imgFrame199} 
            alt="In Future" 
            className="h-[500px] xl:h-[600px] w-auto object-contain"
          />
        </div>

        {/* Hero Content - Centered */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
          <div className="text-center">
            <img 
              src={imgFrame200} 
              alt="Class is in Future" 
              className="w-full max-w-4xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-black py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 sm:gap-8">
            <div className="text-center">
              <p className="font-['Afacad'] text-2xl sm:text-3xl text-[#ff70a0]">Tallinn, Estonia</p>
            </div>
            <div className="text-center">
              <p className="font-['Afacad'] text-2xl sm:text-3xl text-[#a273e8]">August 2026</p>
            </div>
            <div className="text-center">
              <p className="font-['Afacad'] text-2xl sm:text-3xl text-[#df9290]">1,000+ attendees expected</p>
            </div>
            <div className="text-center">
              <p className="font-['Afacad'] text-2xl sm:text-3xl text-[#72c35b]">6 continents represented</p>
            </div>
            <div className="text-center">
              <p className="font-['Afacad'] text-2xl sm:text-3xl text-[#80a0ef]">50+ speakers</p>
            </div>
            <div className="text-center">
              <p className="font-['Afacad'] text-2xl sm:text-3xl text-[#ff70a0]">30+ startups on display</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-8 sm:space-y-12">
            <h2 className="font-['Afacad'] text-3xl sm:text-4xl md:text-5xl text-black text-center leading-tight">
              Big events drown you in noise, endless slides, and polite applause. Class is in Future is different, leaner, bolder, and unapologetically focused on the people shaping classrooms of tomorrow. No fluff. No filler. Just the visionaries, makers, and risk-takers who actually matter.
            </h2>

            <div className="space-y-6 sm:space-y-8 font-['Afacad'] text-xl sm:text-2xl md:text-3xl text-[#252b37] leading-relaxed">
              <p>
                Class is in Future is more than a conference, it is a global stage where education meets innovation. From Tallinn to the world, we bring together educators, founders, investors, and technologists from six continents to reimagine how learning happens.
              </p>
              <p>
                In an age where AI tutors, immersive reality, and robotics are rewriting the rules of classrooms, this gathering is where vision turns into momentum. It's a place to share bold ideas, spark collaborations, and showcase solutions that will shape how future generations learn.
              </p>
              <p>
                Whether you're building the next big EdTech startup, scaling impact as an investor, trying to learn more about novel education strategies, or reshaping policy in education, Class is in Future is your gateway to the conversations and the community defining Education 2040 and beyond.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center pt-8">
              <button 
                onClick={() => onNavigate?.('tickets')}
                className="bg-[#6923d2] text-white px-12 py-5 rounded-lg font-['Afacad'] text-2xl hover:bg-[#5a1db8] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Tickets
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Eduvex Section */}
      <section className="w-full bg-neutral-50 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center space-y-6 sm:space-y-8 mb-12 sm:mb-16">
            <h2 className="font-['Afacad'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black tracking-tight">
              Why Eduvex? Why Now?
            </h2>
            <p className="font-['Afacad'] text-xl sm:text-2xl md:text-3xl text-[#252b37] leading-relaxed max-w-5xl mx-auto">
              For the culture of Class is in Future, there is no tomorrow without making it happen today. We're focused beyond the original innovation and education tools to propel it. EdTech isn't the perfect target, but rather the global evolution of how we empower, teach, and uplift people. So if anyone asks what they're here for then as a reminder, they're here to make an impact beyond what we expect.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1734886579908-e9355a8b63af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWxsaW5uJTIwZXN0b25pYSUyMG9sZCUyMHRvd258ZW58MXx8fHwxNzYzNDY4MDg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Tallinn Old Town" 
                className="w-full h-64 sm:h-80 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="grid grid-rows-2 gap-6 sm:gap-8">
              <div className="overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1610490687736-967ea0eeed2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMGJ1aWxkaW5nJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MzM3ODk3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Historic Architecture" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1759250452037-5ed617b43ecb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2FzdGFsJTIwY2l0eSUyMHdhdGVyfGVufDF8fHx8MTc2MzQ2ODEyNnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Coastal View" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center space-y-6 sm:space-y-8 mb-16 sm:mb-20">
            <h2 className="font-['Afacad'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black tracking-tight">
              Class is in Future Team
            </h2>
            <div className="font-['Afacad'] text-xl sm:text-2xl md:text-3xl text-[#252b37] leading-relaxed max-w-5xl mx-auto space-y-4">
              <p>
                Class is in Future is powered by a diverse team of educators, designers, technologists, and community builders who believe that the future of learning must be co-created. We believe in questioning how learning works, amplifying voices that spark change, cutting through jargon, and keeping curiosity alive.
              </p>
              <p>
                Together, we call this the <span className="font-['Afacad'] text-[#6941c6]">Future Class Energy</span>.
              </p>
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden mb-6 aspect-square">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Info Card */}
                <div className="bg-black rounded-2xl p-6 border border-[#a4a7ae] transition-all duration-300 group-hover:shadow-xl">
                  <h3 className="font-['Afacad'] text-2xl sm:text-3xl text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="font-['Afacad'] text-lg text-white/80 mb-3">
                    {member.role}
                  </p>
                  <p className="font-['Afacad'] text-base text-white/60">
                    {member.email}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full bg-black py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center justify-between">
            <div className="space-y-2">
              <h3 className="font-['Inter'] text-xl text-[#e9eaeb]">Join our newsletter</h3>
              <p className="font-['Inter'] text-[#d5d7da]">
                Don't miss anything! We'll send you cool letters containing information about the conference.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg border border-[#d5d7da] text-[#717680] w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-[#7f56d9]"
              />
              <button className="bg-[#7f56d9] text-white px-6 py-3 rounded-lg hover:bg-[#6941c6] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
