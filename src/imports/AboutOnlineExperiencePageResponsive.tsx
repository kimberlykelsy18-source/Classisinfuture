/* RESPONSIVE ONLINE EXPERIENCE PAGE - Maintaining Original Design with Responsive Layout */
import React from "react";
import svgPaths from "./svg-c8bbuoptfk";
import imgPaper16 from "figma:asset/8d68b68076f43fe952040d88e7b094d513b71efb.png";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface AboutOnlineExperiencePageResponsiveProps {
  onNavigate?: (page: string) => void;
}

export default function AboutOnlineExperiencePageResponsive({ onNavigate }: AboutOnlineExperiencePageResponsiveProps) {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section with Bordered Box */}
      <section className="w-full bg-black py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Online Experience Badge */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="bg-[#56aa3e] px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-md">
              <p className="font-['Handlee'] text-white text-2xl sm:text-3xl text-center">Online Experience</p>
            </div>
          </div>

          {/* Hero Box with Border */}
          <div className="relative bg-white border-4 sm:border-5 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.25)] p-8 sm:p-12 lg:p-16">
            {/* Corner decorations */}
            <div className="absolute -left-[7px] -top-[7px] w-[14px] h-[14px] bg-white border-[3px] border-black" />
            <div className="absolute -right-[7px] -top-[7px] w-[14px] h-[14px] bg-white border-[3px] border-black" />
            <div className="absolute -left-[7px] -bottom-[7px] w-[14px] h-[14px] bg-white border-[3px] border-black" />
            <div className="absolute -right-[7px] -bottom-[7px] w-[14px] h-[14px] bg-white border-[3px] border-black" />

            <div className="text-center space-y-4 sm:space-y-6">
              <h1 className="font-['Afacad'] text-black text-3xl sm:text-4xl md:text-5xl tracking-tight">
                Class is in Future; Anywhere You Are.
              </h1>
              <p className="font-['Afacad'] text-[#535862] text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
                Can't make it to Tallinn? Experience the future of classrooms online. Stream the keynotes, join live Q&A sessions, network with global attendees, and be part of the conversation shaping tomorrow's EdTech landscape, all from your screen.
              </p>
            </div>
          </div>

          {/* Decorative Comments (hidden on mobile) */}
          <div className="hidden lg:block relative h-0">
            <div className="absolute top-[-30px] right-[5%]">
              <div className="bg-[#f072cd] border-2 border-[#db4a90] px-4 py-2 rounded-br-3xl rounded-bl-3xl rounded-tr-3xl rounded-tl-sm shadow-lg">
                <p className="font-['Inter'] text-white text-sm">Class is in Future</p>
              </div>
            </div>
            <div className="absolute -top-12 left-[5%]">
              <div className="bg-[#f072cd] border-2 border-[#db4a90] px-4 py-2 rounded-br-3xl rounded-bl-3xl rounded-tr-3xl rounded-tl-sm shadow-lg">
                <p className="font-['Inter'] text-white text-sm">Class is in Future</p>
              </div>
            </div>
          </div>

          {/* Decorative SVG corners (hidden on mobile) */}
          <div className="hidden xl:block relative h-0">
            <div className="absolute -left-12 -top-12 w-[120px] h-[100px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 151 130">
                <path d={svgPaths.p29a107f0} fill="#CBB1F2" />
                <path d={svgPaths.pb302d00} stroke="black" strokeWidth="2" />
              </svg>
            </div>
            <div className="absolute -right-12 -bottom-12 w-[120px] h-[100px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 151 130">
                <path d={svgPaths.pde93800} fill="#A4BBF4" />
                <path d={svgPaths.pdb21530} stroke="black" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get To Enjoy Section */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="font-['Afacad'] text-black text-3xl sm:text-4xl md:text-5xl tracking-tight">
              What You'll Get To Enjoy
            </h2>
            <p className="font-['Afacad'] text-[#252b37] text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Your front-row seat to the future, wherever you are. Experience the same energy, insights, and opportunities as our on-site guests through a seamless digital experience built for connection and discovery.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {/* Card 1 - Live & On-Demand Access */}
            <div className="relative rounded-lg overflow-hidden shadow-lg h-[400px] sm:h-[500px] lg:h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1518724720933-d73c1fea476e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGxhcHRvcCUyMGNvbXB1dGVyJTIwdGFibGV8ZW58MXx8fHwxNzYzNjQwNjMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Live & On-Demand Access" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent pt-24 pb-8 px-6 sm:px-8">
                <div className="backdrop-blur-sm bg-white/30 p-6 sm:p-8 rounded-lg">
                  <h3 className="font-['Inter'] text-white text-xl sm:text-2xl mb-4">
                    Live & On-Demand Access
                  </h3>
                  <div className="space-y-2 text-white">
                    <p className="font-['Inter'] text-sm sm:text-base">No matter where you are.</p>
                    <p className="font-['Inter'] text-sm sm:text-base opacity-90">
                      Tune in to every keynote, fireside chat, and startup pitch as it happens. Missed a session? Rewatch it anytime during the event week, all on your own schedule.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Virtual Networking Lounges */}
            <div className="relative rounded-lg overflow-hidden shadow-lg h-[400px] sm:h-[500px] lg:h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1758526213969-61068ad19a8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0d28lMjB3b21lbiUyMGNvdWNoJTIwdGFsa2luZyUyMHBob25lc3xlbnwxfHx8fDE3NjM2NDA2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Virtual Networking Lounges" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent pt-24 pb-8 px-6 sm:px-8">
                <div className="backdrop-blur-sm bg-white/30 p-6 sm:p-8 rounded-lg">
                  <h3 className="font-['Inter'] text-white text-xl sm:text-2xl mb-4">
                    Virtual Networking Lounges
                  </h3>
                  <div className="space-y-2 text-white">
                    <p className="font-['Inter'] text-sm sm:text-base">Connect with people globally.</p>
                    <p className="font-['Inter'] text-sm sm:text-base opacity-90">
                      Exchange ideas with educators, founders, and investors from across six continents. Join themed chat rooms and video lounges designed to spark real conversations and collaborations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Global Community Access */}
            <div className="relative rounded-lg overflow-hidden shadow-lg h-[400px] sm:h-[500px] lg:h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1621891333266-0e9402242154?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBiZWQlMjBsYXB0b3AlMjBjb21wdXRlcnxlbnwxfHx8fDE3NjM2NDA2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Global Community Access" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent pt-24 pb-8 px-6 sm:px-8">
                <div className="backdrop-blur-sm bg-white/30 p-6 sm:p-8 rounded-lg">
                  <h3 className="font-['Inter'] text-white text-xl sm:text-2xl mb-4">
                    Global Community Access
                  </h3>
                  <div className="space-y-2 text-white">
                    <p className="font-['Inter'] text-sm sm:text-base">Break into the Class is in Future community.</p>
                    <p className="font-['Inter'] text-sm sm:text-base opacity-90">
                      Connect beyond the conference. Gain entry to our online community hub for ongoing discussions, shared resources, and future event updates.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 - Digital Expo Hall */}
            <div className="relative rounded-lg overflow-hidden shadow-lg h-[400px] sm:h-[500px] lg:h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1718030323555-214805b7f884?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXJnZSUyMHJvb20lMjBsaWdodHMlMjBjZWlsaW5nfGVufDF8fHx8MTc2MzY0MDYzNHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Digital Expo Hall" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent pt-24 pb-8 px-6 sm:px-8">
                <div className="backdrop-blur-sm bg-white/30 p-6 sm:p-8 rounded-lg">
                  <h3 className="font-['Inter'] text-white text-xl sm:text-2xl mb-4">
                    Digital Expo Hall
                  </h3>
                  <div className="space-y-2 text-white">
                    <p className="font-['Inter'] text-sm sm:text-base">Check out exhibitions.</p>
                    <p className="font-['Inter'] text-sm sm:text-base opacity-90">
                      Explore an interactive showcase of EdTech startups, institutions, and partners. Chat directly with exhibitors, watch live demos, and discover innovations redefining learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section with Dark Textured Background */}
      <section className="w-full bg-[#3a3a3a] py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        {/* Dark Paper Background Texture - Rotated */}
        <div className="absolute inset-0 opacity-70 rotate-90">
          <img 
            src={imgPaper16} 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="font-['Afacad'] text-white text-3xl sm:text-4xl md:text-5xl tracking-tight">
              How It Works
            </h2>
            <p className="font-['Afacad'] text-white/90 text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Joining the future of learning has never been easier. Whether you're across the street or across the world, here's how to be part of Class Is in Future — Tallinn 2026.
            </p>
          </div>

          {/* Steps with Tilted Cards - Desktop layout */}
          <div className="hidden md:flex items-center justify-center gap-8 lg:gap-12 mb-12 sm:mb-16 min-h-[600px]">
            {/* Step 1 - Black Card (Tilted Left) */}
            <div className="relative" style={{ transform: 'rotate(-4deg)' }}>
              {/* Registration Label */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded shadow-lg">
                <p className="font-['Handlee'] text-[#7f3fdf] text-lg">Registration</p>
              </div>
              
              <div className="bg-black rounded-lg shadow-[6px_6px_24px_rgba(255,230,140,0.13)] w-[320px] lg:w-[380px]">
                <div className="p-8 lg:p-10">
                  <div className="mb-8">
                    <p className="font-['Afacad'] text-[#d6bbfb] text-4xl lg:text-5xl text-center tracking-tight">Step 1.</p>
                  </div>
                  <div className="space-y-4 text-[#d6bbfb]">
                    <h3 className="font-['Inter'] text-2xl lg:text-3xl">
                      Get Your Online Pass
                    </h3>
                    <p className="font-['Inter'] text-base lg:text-lg leading-relaxed">
                      Choose the Online Experience option when you buy your ticket. You'll get a confirmation email with your login and platform access.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 - White Card (Tilted Slightly Right) */}
            <div className="relative" style={{ transform: 'rotate(5.5deg)' }}>
              {/* Activities Label */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-[#7f3fdf] px-4 py-2 rounded shadow-lg">
                <p className="font-['Handlee'] text-white text-lg">Activities</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-[6px_6px_24px_rgba(157,220,255,0.15)] w-[320px] lg:w-[380px]">
                <div className="p-8 lg:p-10">
                  <div className="mb-8">
                    <p className="font-['Afacad'] text-[#7f3fdf] text-4xl lg:text-5xl text-center tracking-tight">Step 2.</p>
                  </div>
                  <div className="space-y-4 text-[#7f3fdf]">
                    <h3 className="font-['Inter'] text-2xl lg:text-3xl">
                      Join the Live Stream
                    </h3>
                    <p className="font-['Inter'] text-base lg:text-lg leading-relaxed">
                      Log in from your laptop, tablet, or phone. Enjoy real-time broadcasts of keynotes, demos, and cultural moments straight from Tallinn's Kultuurikatel.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 - Purple Card (Tilted Left) */}
            <div className="relative" style={{ transform: 'rotate(-5deg)' }}>
              {/* Engagement Label */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-black px-4 py-2 rounded shadow-lg">
                <p className="font-['Handlee'] text-[#d6bbfb] text-lg">Engagement</p>
              </div>
              
              <div className="bg-[#7f3fdf] rounded-lg shadow-[6px_6px_24px_rgba(255,201,240,0.13)] w-[320px] lg:w-[380px]">
                <div className="p-8 lg:p-10">
                  <div className="mb-8">
                    <p className="font-['Afacad'] text-white text-4xl lg:text-5xl text-center tracking-tight">Step 3.</p>
                  </div>
                  <div className="space-y-4 text-white">
                    <h3 className="font-['Inter'] text-2xl lg:text-3xl">
                      Connect & Network
                    </h3>
                    <p className="font-['Inter'] text-base lg:text-lg leading-relaxed">
                      Use the chat and video features to meet speakers, startups, and fellow attendees. Join topic-based groups that match your professional focus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Steps Mobile Version - No rotation */}
          <div className="md:hidden space-y-8 mb-12">
            {/* Step 1 */}
            <div>
              <div className="flex justify-center mb-4">
                <div className="bg-white px-4 py-2 rounded shadow-lg">
                  <p className="font-['Handlee'] text-[#7f3fdf] text-lg">Registration</p>
                </div>
              </div>
              <div className="bg-black rounded-lg shadow-xl p-8">
                <div className="mb-6">
                  <p className="font-['Afacad'] text-[#d6bbfb] text-4xl text-center tracking-tight">Step 1.</p>
                </div>
                <div className="space-y-4 text-[#d6bbfb]">
                  <h3 className="font-['Inter'] text-2xl">Get Your Online Pass</h3>
                  <p className="font-['Inter'] text-base leading-relaxed">
                    Choose the Online Experience option when you buy your ticket. You'll get a confirmation email with your login and platform access.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <div className="flex justify-center mb-4">
                <div className="bg-[#7f3fdf] px-4 py-2 rounded shadow-lg">
                  <p className="font-['Handlee'] text-white text-lg">Activities</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-black">
                <div className="mb-6">
                  <p className="font-['Afacad'] text-[#7f3fdf] text-4xl text-center tracking-tight">Step 2.</p>
                </div>
                <div className="space-y-4 text-[#7f3fdf]">
                  <h3 className="font-['Inter'] text-2xl">Join the Live Stream</h3>
                  <p className="font-['Inter'] text-base leading-relaxed">
                    Log in from your laptop, tablet, or phone. Enjoy real-time broadcasts of keynotes, demos, and cultural moments straight from Tallinn's Kultuurikatel.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <div className="flex justify-center mb-4">
                <div className="bg-black px-4 py-2 rounded shadow-lg">
                  <p className="font-['Handlee'] text-[#d6bbfb] text-lg">Engagement</p>
                </div>
              </div>
              <div className="bg-[#7f3fdf] rounded-lg shadow-xl p-8">
                <div className="mb-6">
                  <p className="font-['Afacad'] text-white text-4xl text-center tracking-tight">Step 3.</p>
                </div>
                <div className="space-y-4 text-white">
                  <h3 className="font-['Inter'] text-2xl">Connect & Network</h3>
                  <p className="font-['Inter'] text-base leading-relaxed">
                    Use the chat and video features to meet speakers, startups, and fellow attendees. Join topic-based groups that match your professional focus.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button 
              onClick={() => onNavigate?.('tickets')}
              className="bg-[#6923d2] hover:bg-[#5a1db8] transition-colors text-white px-12 py-4 sm:px-16 sm:py-5 rounded-lg font-['Afacad'] text-xl sm:text-2xl shadow-lg hover:shadow-xl"
            >
              Get your Online Ticket
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}