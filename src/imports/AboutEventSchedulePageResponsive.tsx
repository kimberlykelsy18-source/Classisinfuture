/* RESPONSIVE EVENT SCHEDULE PAGE - Centered Layout with Proper Spacing */
import React from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface AboutEventSchedulePageResponsiveProps {
  onNavigate?: (page: string) => void;
}

export default function AboutEventSchedulePageResponsive({ onNavigate }: AboutEventSchedulePageResponsiveProps) {
  const [activeDay, setActiveDay] = React.useState(1);

  const days = [
    { id: 1, label: "Day 1" },
    { id: 2, label: "Day 2" },
    { id: 3, label: "Day 3" },
    { id: 4, label: "Day 4" },
    { id: 5, label: "Day 5" },
    { id: 6, label: "Day 6" },
    { id: 7, label: "Day 7" },
  ];

  const scheduleData = {
    1: {
      date: "Sunday, August 2",
      location: "Kultuurihunt (Hunt, Tallinn)",
      events: [
        {
          time: "04:00pm to\n06:30pm",
          title: "Arrival & Registration",
          description: "Check in online or on-site and get your conference badge. This window gives you ample time to settle in, meet fellow attendees, and explore the welcome lounge. Light refreshments will be served to keep the conversations flowing as you connect with peers from around the world.",
          color: "#9d7ce8",
          bgColor: "#9d7ce8",
        },
        {
          time: "06:30pm to\n08:00pm",
          title: "Welcome Dinner & Cultural Showcase",
          description: "We officially open Class is in Future 2026 with a dinner inspired by Estonian flavors, paired with a vibrant local performance that blends tradition with innovation. It's the perfect setting to spark connections and set the tone for the week ahead.",
          color: "#9d7ce8",
          bgColor: "#9d7ce8",
        },
        {
          time: "08:00pm to\n09:00pm",
          title: "Networking Mixer",
          description: "An informal space to meet other educators, startups, investors, and tech professionals before the main program begins. Expect relaxed conversations, icebreaker activities, and a shared sense of anticipation for the days to come.",
          color: "#9d7ce8",
          bgColor: "#9d7ce8",
        },
        {
          time: "After\n09:00pm",
          title: "Free Evening",
          description: "Unwind at your own pace, explore Tallinn's nightlife and the vibrant old town, enjoy a quiet evening with new connections, or simply rest up for the start of the conference on Monday morning.",
          color: "#9d7ce8",
          bgColor: "#9d7ce8",
        },
      ],
    },
  };

  const currentSchedule = scheduleData[activeDay as keyof typeof scheduleData] || scheduleData[1];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section with Background */}
      <section className="relative w-full min-h-[600px] sm:min-h-[700px] lg:min-h-[900px] bg-black overflow-hidden flex items-center justify-center">
        {/* Decorative Elements */}
        <div className="absolute left-0 top-0 w-32 sm:w-40 lg:w-48 h-48 sm:h-56 lg:h-64 opacity-40">
          <svg className="w-full h-full" fill="none" viewBox="0 0 205 237">
            <path d="M0 0 L100 100 L50 200 Z" stroke="#A4BBF4" strokeWidth="5" fill="none" />
          </svg>
        </div>
        <div className="absolute right-0 top-0 w-32 sm:w-40 lg:w-48 h-48 sm:h-56 lg:h-64 opacity-40">
          <svg className="w-full h-full" fill="none" viewBox="0 0 253 237">
            <path d="M200 0 L100 100 L150 200 Z" stroke="#EFC8C7" strokeWidth="5" fill="none" />
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
          <div className="text-center space-y-6 sm:space-y-8 lg:space-y-12">
            <h1 className="font-['Afacad'] text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">
              Welcome to Class is in Future
            </h1>
            
            <div className="font-['Afacad'] text-neutral-100 text-lg sm:text-xl md:text-2xl lg:text-3xl space-y-6 sm:space-y-8 leading-relaxed max-w-5xl mx-auto">
              <p>
                The first edition of Class is in Future takes place August 2–9, 2026 in Tallinn, Estonia, a city celebrated for its digital innovation and bold ideas in education. Over the course of one week, we will explore the frontiers of EdTech, bringing together educators, startups, investors, policymakers, and tech professionals from six continents. Our program is designed to be both inspiring and practical, with mornings dedicated to keynotes and panels, afternoons to breakout sessions, workshops, and pitch stages, and evenings filled with networking, cultural showcases, and social events.
              </p>
              <p>
                On <span className="font-['Afacad'] text-[#6941c6]">Day 1</span>; the opening night, you can expect to get settled, meet the community, and enjoy the evening cultural showcase alongside a light welcome dinner. Things get more heated as <span className="font-['Afacad'] text-[#6941c6]">Day 2</span> dives straight into Robotics in Education with keynotes, panels, and breakout sessions. Get ready to engage in networking hubs and career fairs to fuel connections before the day closes with dinner, games, and karaoke.
              </p>
              <p>
                Explore the full Event Schedule below but brace yourself, this is not like anything you have experienced before.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 w-full px-6">
          <p className="font-['Afacad'] text-[#e9eaeb] text-center text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight opacity-30">
            EVENT SCHEDULE
          </p>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="w-full text-center space-y-6 sm:space-y-8 mb-12 sm:mb-16 lg:mb-20">
            <h2 className="font-['Afacad'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black tracking-tight leading-tight">
              Seven days. One city.<br />
              Endless ways to reimagine learning.
            </h2>
          </div>

          {/* Day Selector Tabs */}
          <div className="w-full flex flex-wrap gap-3 sm:gap-4 mb-12 sm:mb-16 justify-center">
            {days.map((day) => (
              <button
                key={day.id}
                onClick={() => setActiveDay(day.id)}
                className={`
                  px-8 sm:px-10 lg:px-12 py-4 sm:py-5 rounded-br-3xl rounded-tl-3xl font-['Afacad'] text-xl sm:text-2xl lg:text-3xl transition-all duration-300
                  ${
                    activeDay === day.id
                      ? "bg-[#f9f6fe] text-[#6923d2] border-2 border-[#6923d2]"
                      : "bg-white text-[#414651] border-[1.5px] border-[#a4a7ae] hover:border-[#6923d2] hover:text-[#6923d2]"
                  }
                `}
              >
                {day.label}
              </button>
            ))}
          </div>

          {/* Schedule Details */}
          <div className="w-full space-y-8 sm:space-y-10 lg:space-y-12">
            {/* Date & Location */}
            <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center text-center">
              <div className="flex items-center justify-center gap-3">
                <svg className="w-6 h-6 text-[#6923d2] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <p className="font-['Afacad'] text-xl sm:text-2xl lg:text-3xl text-black">
                  {currentSchedule.date}
                </p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <svg className="w-6 h-6 text-[#6923d2] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <p className="font-['Afacad'] text-xl sm:text-2xl lg:text-3xl text-black">
                  {currentSchedule.location}
                </p>
              </div>
            </div>

            {/* Event Cards - Timeline Layout */}
            <div className="w-full space-y-8 sm:space-y-10">
              {currentSchedule.events.map((event, index) => (
                <div key={index} className="flex gap-4 sm:gap-6 lg:gap-8">
                  {/* Time Column with Connector */}
                  <div className="flex flex-col items-end min-w-[120px] sm:min-w-[140px] pt-2">
                    <p className="font-['Afacad'] text-lg sm:text-xl lg:text-2xl text-[#252b37] text-right whitespace-pre-line leading-tight">
                      {event.time}
                    </p>
                    {index < currentSchedule.events.length - 1 && (
                      <div className="w-0.5 h-full min-h-[80px] bg-gray-300 mt-4 ml-auto" style={{ marginRight: '2.5rem' }} />
                    )}
                  </div>

                  {/* Event Card */}
                  <div
                    className="flex-1 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:shadow-xl"
                    style={{
                      backgroundColor: event.bgColor,
                    }}
                  >
                    <h3 className="font-['Afacad'] text-white text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4">
                      {event.title}
                    </h3>
                    <p className="font-['Afacad'] text-white text-base sm:text-lg lg:text-xl leading-relaxed opacity-95">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="w-full flex flex-col items-center justify-center gap-6 sm:gap-8 mt-16 sm:mt-20 lg:mt-24 text-center">
            <p className="font-['Afacad'] text-2xl sm:text-3xl lg:text-4xl text-[#252b37] max-w-4xl mx-auto">
              Each day brings fresh perspectives, deeper connections, and bolder ideas. This is just Day 1 — six more days of innovation await.
            </p>
            <button 
              onClick={() => onNavigate?.('tickets')}
              className="bg-[#6923d2] text-white px-12 py-5 sm:px-16 sm:py-6 rounded-xl font-['Afacad'] text-xl sm:text-2xl lg:text-3xl hover:bg-[#5a1db8] transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
            >
              Get Your Tickets Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer Note Section */}
      <section className="w-full bg-neutral-50 py-16 sm:py-20">
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="w-full text-center space-y-6">
            <h3 className="font-['Afacad'] text-3xl sm:text-4xl lg:text-5xl text-black">
              Stay Updated
            </h3>
            <p className="font-['Afacad'] text-xl sm:text-2xl lg:text-3xl text-[#252b37] leading-relaxed max-w-4xl mx-auto">
              The schedule is subject to updates as we finalize speakers, sessions, and special events. Follow us on social media and check your email for the latest announcements.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
