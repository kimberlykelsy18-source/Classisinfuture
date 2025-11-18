/* RESPONSIVE GET A BOOTH PAGE - Centered Layout with Proper Spacing */
import React from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface AboutGetABoothPageResponsiveProps {
  onNavigate?: (page: string) => void;
}

export default function AboutGetABoothPageResponsive({ onNavigate }: AboutGetABoothPageResponsiveProps) {
  const boothTypes = [
    {
      title: "Startup Booth",
      image: "https://images.unsplash.com/photo-1559077450-67c4f2c59cfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwYm9vdGglMjBkZW1vfGVufDF8fHx8MTc2MzQ3MjY5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "#ff5c93",
      features: [
        "Designed for early-stage startups launching or demoing their first product or big idea.",
        "Gain visibility with educators, investors, and potential partners.",
        "Includes a full-sized booth space, access to networking lounges, and visibility in the startup showcase section of the event site.",
        "Comes with 1 exhibitor pass and inclusion in the digital exhibitor directory.",
      ],
    },
    {
      title: "Growth Booth",
      image: "https://images.unsplash.com/photo-1560439514-4e9645039924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkZSUyMHNob3clMjBib290aHxlbnwxfHx8fDE3NjM0NzAzNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "#9d7ce8",
      features: [
        "Ideal for growing tech companies, accelerators, and mid-stage ventures ready to reach new markets.",
        "Enjoy a full-sized booth space in the exhibition hall with priority placement, inclusion in press materials, and one sponsored social feature pre-event.",
        "Includes 2 exhibitor passes and participation in the product walkthrough with investors.",
      ],
    },
    {
      title: "Premium Booth",
      image: "https://images.unsplash.com/photo-1743119638006-a01d4625745d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZXhoaWJpdGlvbiUyMHNwYWNlfGVufDF8fHx8MTc2MzQ3MjY5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "#3769e6",
      features: [
        "Perfect for established brands, major sponsors, and industry leaders who want maximum visibility and impact.",
        "Features include a double-sized booth with custom branding, premium positioning near main stages, featured mentions in keynotes and press releases.",
        "Includes 4 exhibitor passes, a speaking slot in a workshop or panel, and VIP access to all exclusive networking events.",
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section with Background */}
      <section className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1630287536358-bee2bfcd69a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY29uZmVyZW5jZSUyMGJvb3RofGVufDF8fHx8MTc2MzQ3Mjg5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Conference booth exhibition" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 text-center">
          <h1 className="font-['Afacad'] text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight">
            Get a Booth
          </h1>
        </div>
      </section>

      {/* Why You Should Exhibit Section */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="w-full space-y-8 sm:space-y-10 lg:space-y-12">
            {/* Section Header */}
            <div className="w-full text-center space-y-4 sm:space-y-6">
              <h2 className="font-['Afacad'] text-3xl sm:text-4xl md:text-5xl text-black tracking-tight">
                Why You Should Exhibit
              </h2>
              <p className="font-['Afacad'] text-lg sm:text-xl lg:text-2xl text-[#252b37] leading-relaxed max-w-4xl mx-auto">
                At Class is in Future, exhibitors aren't background noise, you're part of the conversation. Booths sit at the heart of the venue, alongside networking hubs and career fairs, ensuring a steady flow of engaged visitors. From startups unveiling their first product to global leaders in EdTech, every booth tells a story worth experiencing. We believe that your booth is more than a stand, it's your stage. You're at the center of it all and all eyes are on you.
              </p>
            </div>

            {/* CTA Button */}
            <div className="w-full flex justify-center pt-4 sm:pt-6">
              <button 
                onClick={() => onNavigate?.('tickets')}
                className="bg-[#6923d2] text-white px-12 py-4 sm:px-16 sm:py-5 lg:px-20 lg:py-6 rounded-lg font-['Afacad'] text-lg sm:text-xl lg:text-2xl hover:bg-[#5a1db8] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Reserve a Booth
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Wavy Divider */}
      <div className="w-full bg-white relative" style={{ height: '60px' }}>
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,0 L1440,0 L1440,60 Q1080,40 720,60 T0,60 Z" fill="#ffffff" stroke="none"></path>
          <path d="M0,30 Q360,50 720,30 T1440,30 L1440,60 L0,60 Z" fill="#000000" stroke="none"></path>
        </svg>
      </div>

      {/* Before You Apply Section */}
      <section className="w-full bg-black py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="w-full space-y-10 sm:space-y-12 lg:space-y-16">
            {/* Section Title */}
            <div className="w-full text-center space-y-4">
              <h2 className="font-['Afacad'] text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
                Before You Apply
              </h2>
              <p className="font-['Afacad'] text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Here's everything you need to know before booking your spot as a booth exhibitor:
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              {[
                {
                  title: "Location & Dates",
                  description: "All booths will be hosted at Kultuurikatel, Tallinn, Estonia, during the Class is in Future Conference taking place from August 2–9, 2025. Booth setup opens August 1 (10:00 AM – 6:00 PM) and tear-down begins August 9 (after 4:00 PM).",
                  borderColor: "#3769e6"
                },
                {
                  title: "What's Included",
                  description: "Each booth (regardless of type) includes: a modular 3m x 3m space with back wall, name signage, a TV, 2 power outlets, high-speed internet access, a high table, and 2 side chairs, including cleaning and security during exhibition hours.",
                  borderColor: "#ff5c93"
                },
                {
                  title: "Eligibility & Application",
                  description: "Startups, Growth exhibitors, and Partners must be focused on technology or innovation in education. Applications are reviewed on a rolling basis; early applicants receive priority placement and media exposure.",
                  borderColor: "#9d7ce8"
                },
                {
                  title: "Setup & Support",
                  description: "Our onsite team will assist with booth setup and logistics. International exhibitors can ship product and demo materials in advance; more details will be shared after the booth purchase has been confirmed.",
                  borderColor: "#a8d55c"
                },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="border-2 rounded-full px-8 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14 text-center transition-all duration-300"
                  style={{ 
                    borderColor: item.borderColor,
                    boxShadow: `0 0 20px ${item.borderColor}30`
                  }}
                >
                  <h3 className="font-['Afacad'] text-2xl sm:text-3xl text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="font-['Afacad'] text-base sm:text-lg text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>


          </div>
        </div>
      </section>

      {/* Booth Types Section */}
      <section className="w-full bg-neutral-50 py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="w-full space-y-10 sm:space-y-12 lg:space-y-16">
            {/* Section Title */}
            <div className="w-full text-center">
              <h2 className="font-['Afacad'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black tracking-tight mb-4">
                Choose Your Booth
              </h2>
              <p className="font-['Afacad'] text-xl sm:text-2xl text-[#252b37] max-w-3xl mx-auto">
                Select the booth type that matches your goals and stage
              </p>
            </div>

            {/* Booth Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6">
              {boothTypes.map((booth, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-200 hover:border-[#6923d2] transition-all duration-300 hover:shadow-2xl flex flex-col"
                >
                  {/* Color Bar */}
                  <div 
                    className="w-full h-2"
                    style={{ backgroundColor: booth.color }}
                  />

                  {/* Booth Image */}
                  <div className="w-full aspect-[16/9] overflow-hidden">
                    <img 
                      src={booth.image} 
                      alt={booth.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Booth Content */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col">
                    <h3 className="font-['Afacad'] text-2xl sm:text-3xl lg:text-4xl text-black mb-4 sm:mb-6">
                      {booth.title}
                    </h3>

                    {/* Features List */}
                    <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-1">
                      {booth.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg 
                            className="w-6 h-6 flex-shrink-0 mt-1" 
                            style={{ color: booth.color }}
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path 
                              fillRule="evenodd" 
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                              clipRule="evenodd" 
                            />
                          </svg>
                          <span className="font-['Afacad'] text-base sm:text-lg text-[#252b37] leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Purchase Button */}
                    <button 
                      onClick={() => onNavigate?.('tickets')}
                      className="w-full bg-[#6923d2] text-white px-6 py-3 sm:py-4 rounded-lg font-['Afacad'] text-lg sm:text-xl hover:bg-[#5a1db8] transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Purchase Booth
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
