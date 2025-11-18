/* RESPONSIVE TICKETS PAGE - Centered Layout with Proper Spacing */
import svgPaths from "./svg-ifti8wemfo";
import React from "react";

const imgFrame274 = "https://images.unsplash.com/photo-1651405023295-a67e7529cf89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWJyYW50JTIwY29sb3JmdWwlMjBncmFkaWVudHxlbnwxfHx8fDE3NjMzODAzMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

interface TicketsPageResponsiveProps {
  onNavigate?: (page: string) => void;
}

export default function TicketsPageResponsive({ onNavigate }: TicketsPageResponsiveProps) {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section with Background */}
      <section className="relative w-full min-h-[600px] sm:min-h-[700px] lg:min-h-[900px] bg-gradient-to-br from-purple-900 via-pink-600 to-orange-500 overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={imgFrame274} 
            alt="" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        {/* Vertical "TICKETS" Text - Left Side (hidden on mobile) */}
        <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2">
          <p className="font-['Afacad'] text-[120px] xl:text-[180px] text-purple-300/40 tracking-[-0.02em] writing-mode-vertical-lr rotate-180">
            TICKETS
          </p>
        </div>

        {/* Vertical "TICKETS" Text - Right Side (hidden on mobile) */}
        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2">
          <p className="font-['Afacad'] text-[120px] xl:text-[180px] text-pink-300/40 tracking-[-0.02em] writing-mode-vertical-rl">
            TICKETS
          </p>
        </div>

        {/* Hero Content - Centered */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
          <div className="text-center space-y-6 sm:space-y-8">
            <h1 className="font-['Afacad'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-tight">
              Your Pass to the Future of EdTech
            </h1>
            
            <p className="font-['Afacad'] text-lg sm:text-xl md:text-2xl lg:text-3xl text-neutral-100 leading-relaxed max-w-4xl mx-auto">
              Pick the ticket that fits your journey. Whether you're here to spark ideas, code through the night, meet investors, or just soak it all in, there's a seat (and a story) waiting for you. No hidden fees. No gate-keeping. Just access to conversations, connections, and opportunities that move education and technology forward.
            </p>
            
            <p className="font-['Afacad'] italic text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#9e77ed] leading-relaxed max-w-4xl mx-auto">
              Tip: Hackathon spots are limited, secure yours when you grab your ticket.
            </p>

            {/* Down Arrow */}
            <div className="pt-8 sm:pt-12">
              <div className="inline-block">
                <svg className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-white animate-bounce" fill="none" viewBox="0 0 54 58">
                  <path d={svgPaths.p31a6100} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
                  <path d={svgPaths.p16b86100} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pick Your Adventure Section */}
      <section className="w-full bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center space-y-4 sm:space-y-6 mb-16 sm:mb-20">
            <h2 className="font-['Afacad'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black tracking-tight">
              Pick Your Adventure
            </h2>
            <p className="font-['Afacad'] text-xl sm:text-2xl md:text-3xl text-[#252b37] leading-relaxed max-w-5xl mx-auto">
              No two journeys are the same. Some come to learn, some to pitch, some to code till sunrise. Whatever brings you here, there's a ticket with your name on it.
            </p>
          </div>

          {/* Ticket Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* General Admission Card */}
            <TicketCard
              title="General Admission"
              price="$200"
              subtitle="For professionals, enthusiasts, and changemakers looking to experience the full conference."
              color="blue"
              features={[
                "Access to all 5 days of keynote panels and breakout sessions across the EdTech industry.",
                "Explore the exhibition hall with startup showcases, EdTech solutions, career fairs, and partner booths.",
                "Join daily networking breaks, cultural showcases, and evening socials.",
                "Eligibility to partake in the Hackathon session (a chance to build in public).",
                "An opportunity to partake in the wind-down day with access to tours, fun activities, and the official afterparty."
              ]}
              discount="STUDENT DISCOUNT: 50% off (just $100 with valid ID)."
              onGetTicket={() => onNavigate && onNavigate("checkout")}
            />

            {/* Startup Pass Card */}
            <TicketCard
              title="Startup Pass"
              price="$300"
              subtitle="For founders, co-founders, and startup teams ready to showcase and grow."
              color="green"
              features={[
                "Access to all the benefits included in the General Admission pass.",
                "Eligibility to partake in the Startup Showcase & Pitch Day and pitch onstage to investors and partners.",
                "Reserve your product and branded booth options (at the booth hall).",
                "Private meet and greet with selected VIP speakers and investors.",
                "Visibility in the Startup Manifesto Brand and 1-1 demo-day during the event."
              ]}
              discount="We're on a mission to coverage responsible and 1-1 sample during the events for all early-stage brands and VCs."
              onGetTicket={() => onNavigate && onNavigate("checkout")}
            />

            {/* Investor Pass Card */}
            <TicketCard
              title="Investor Pass"
              price="$400"
              subtitle="For angel investors, VCs, impact investors, and philanthropists looking to discover what's next."
              color="pink"
              features={[
                "Access to all the benefits included in the General Admission pass.",
                "Priority access to curated innovation showcase 1-1 pitch demo during the conference.",
                "Invites to the private dealflow session and access to curated startup pipeline.",
                "Access to closed-door deal rooms for content review- Startup screening.",
                "Exclusive networking with founders & VR networking lounge during the event."
              ]}
              onGetTicket={() => onNavigate && onNavigate("checkout")}
            />

            {/* VIP Pass Card */}
            <TicketCard
              title="VIP Pass"
              price="$500"
              subtitle="The ultimate access pass. For leaders, speakers, and those going all in on three intense days of learning, connecting, and building."
              color="purple"
              features={[
                "Access to all the benefit's included in the General Admission pass.",
                "Front-row reserved priority seating during panel and keynote sessions.",
                "Access to the exclusive VIP application roundtable and all private events.",
                "Access to the reserved VIP application tool during the event.",
                "VIP badge and swag pack inclusive of exclusive VIP networking lounge access.",
                "Access to the exclusive VIP networking lounge during the event."
              ]}
              onGetTicket={() => onNavigate && onNavigate("checkout")}
            />
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

// Ticket Card Component
interface TicketCardProps {
  title: string;
  price: string;
  subtitle: string;
  color: "blue" | "green" | "pink" | "purple";
  features: string[];
  discount?: string;
  onGetTicket?: () => void;
}

function TicketCard({ title, price, subtitle, color, features, discount, onGetTicket }: TicketCardProps) {
  const colorClasses = {
    blue: {
      bg: "bg-[#dbe4fa]",
      border: "border-[#3769e6]",
      text: "text-[#3769e6]",
      divider: "bg-[#c9d6f8]",
      icon: "#3769E6",
    },
    green: {
      bg: "bg-[#e8f5e1]",
      border: "border-[#4f9d39]",
      text: "text-[#4f9d39]",
      divider: "bg-[#bfe4b4]",
      icon: "#4F9D39",
    },
    pink: {
      bg: "bg-[#ffe5f0]",
      border: "border-[#ff5c93]",
      text: "text-[#ff5c93]",
      divider: "bg-[#ffc9df]",
      icon: "#FF5C93",
    },
    purple: {
      bg: "bg-[#f3eefc]",
      border: "border-[#9059e3]",
      text: "text-[#9059e3]",
      divider: "bg-[#deccf5]",
      icon: "#9059E3",
    },
  };

  const styles = colorClasses[color];

  return (
    <div className={`${styles.bg} border-2 ${styles.border} rounded-3xl p-8 sm:p-10 lg:p-12 transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-6 sm:mb-8">
        <h3 className={`font-['Afacad'] text-3xl sm:text-4xl lg:text-5xl ${styles.text} leading-tight flex-1`}>
          {title}
        </h3>
        <p className={`font-['Afacad'] text-3xl sm:text-4xl lg:text-5xl ${styles.text} ml-4`}>
          {price}
        </p>
      </div>

      {/* Subtitle */}
      <p className={`font-['Afacad'] text-lg sm:text-xl ${styles.text} mb-6 sm:mb-8 leading-relaxed`}>
        {subtitle}
      </p>

      {/* Divider */}
      <div className={`${styles.divider} h-[2px] mb-6 sm:mb-8`} />

      {/* Features List */}
      <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-3 items-start">
            <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" viewBox="0 0 25 25">
              <path d={svgPaths.p3779f080} fill={styles.icon} />
            </svg>
            <p className={`font-['Afacad'] text-base sm:text-lg lg:text-xl ${styles.text} leading-relaxed`}>
              {feature}
            </p>
          </div>
        ))}
      </div>

      {/* Discount Text */}
      {discount && (
        <p className={`font-['Afacad'] text-base sm:text-lg ${styles.text} text-center mb-6 sm:mb-8`}>
          <span className="font-bold">DISCOUNT:</span> {discount}
        </p>
      )}

      {/* CTA Button */}
      <button
        className="w-full bg-[#6923d2] text-white px-8 py-4 rounded-lg font-['Afacad'] text-lg sm:text-xl hover:bg-[#5a1db8] transition-all duration-300 shadow-lg hover:shadow-xl"
        onClick={onGetTicket}
      >
        Get Ticket
      </button>
    </div>
  );
}