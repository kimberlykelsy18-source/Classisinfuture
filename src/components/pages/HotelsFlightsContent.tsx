import { ImageWithFallback } from '../figma/ImageWithFallback';
import svgPaths from "../../imports/svg-p8eqv6f60c";

export function HotelsFlightsContent() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] md:min-h-[700px] lg:min-h-[997px] bg-black overflow-hidden">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1565444007614-6b38c78224df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMGZsaWdodCUyMHdpbmRvd3xlbnwxfHx8fDE3NjQzMzM0Njh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Hotels and Flights"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 flex items-center justify-center w-full h-full py-12 md:py-24 lg:py-32">
          <h1 className="font-['Afacad:Medium',sans-serif] font-medium text-[#e9eaeb] text-4xl md:text-7xl lg:text-[160px] xl:text-[224px] tracking-tight uppercase px-4 md:px-8 text-center">
            Hotels & Flights
          </h1>
        </div>
      </section>

      {/* Pick Your Hotel Section */}
      <section className="w-full bg-black px-4 md:px-8 lg:px-[120px] py-12 md:py-16 lg:py-24">
        <div className="max-w-[1488px] mx-auto">
          <div className="mb-8 md:mb-12 lg:mb-16">
            <h2 className="font-['Afacad:Medium',sans-serif] font-medium text-white text-3xl md:text-4xl lg:text-[56px] tracking-tight mb-4">
              Plan Your Trip to Tallinn
            </h2>
            <p className="font-['Afacad:Regular',sans-serif] text-[#e9eaeb] text-lg md:text-2xl lg:text-[32px]">
              Your complete travel and stay guide for Class Is in Future 2026.
            </p>
          </div>

          {/* Hotel Selection Button */}
          <div className="relative rounded-lg overflow-hidden shadow-lg mb-12 md:mb-16 lg:mb-20 cursor-pointer hover:opacity-90 transition-opacity">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb218ZW58MXx8fHwxNzY0MjQ4NDk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Pick Your Hotel"
              className="w-full h-16 md:h-20 lg:h-[64px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
              <h3 className="font-['Handlee:Regular',sans-serif] text-white text-xl md:text-2xl lg:text-[32px]">
                Pick Your Hotel
              </h3>
            </div>
          </div>

          {/* Hotels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16 lg:mb-20">
            {/* Hotel Card 1 */}
            <div className="relative rounded-lg overflow-hidden bg-black h-[250px] md:h-[280px] lg:h-[296px]">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1764144855849-4d429e621abd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGJ1aWxkaW5nJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzY0MjgzNzcyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Hotel"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <div className="flex items-center gap-2 mb-2">
                  <Discount className="w-8 h-8" />
                  <span className="font-['Afacad:Regular',sans-serif] text-white text-sm md:text-base">10% off</span>
                </div>
                <h4 className="font-['Afacad:Medium',sans-serif] text-white text-lg md:text-xl mb-1">Nordic Hotel Forum</h4>
                <p className="font-['Afacad:Regular',sans-serif] text-[#d5d7da] text-sm">Modern luxury in the heart of Tallinn</p>
              </div>
            </div>

            {/* Hotel Card 2 */}
            <div className="relative rounded-lg overflow-hidden bg-black h-[250px] md:h-[280px] lg:h-[296px]">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1654355628827-860147b38be3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc2NDI2NDQ4OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Hotel"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h4 className="font-['Afacad:Medium',sans-serif] text-white text-lg md:text-xl mb-1">Radisson Collection</h4>
                <p className="font-['Afacad:Regular',sans-serif] text-[#d5d7da] text-sm">Premium comfort and style</p>
              </div>
            </div>

            {/* Hotel Card 3 */}
            <div className="relative rounded-lg overflow-hidden bg-black h-[250px] md:h-[280px] lg:h-[296px]">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1759178389699-14e2a2e932b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGJvb2tpbmclMjB0cmF2ZWx8ZW58MXx8fHwxNzY0MzMzNDY4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Hotel"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <div className="flex items-center gap-2 mb-2">
                  <CreditCardPos className="w-8 h-8" />
                  <span className="font-['Afacad:Regular',sans-serif] text-white text-sm md:text-base">Easy booking</span>
                </div>
                <h4 className="font-['Afacad:Medium',sans-serif] text-white text-lg md:text-xl mb-1">Swissôtel Tallinn</h4>
                <p className="font-['Afacad:Regular',sans-serif] text-[#d5d7da] text-sm">Elegant rooms with city views</p>
              </div>
            </div>

            {/* Hotel Card 4 */}
            <div className="relative rounded-lg overflow-hidden bg-black h-[250px] md:h-[280px] lg:h-[296px]">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb218ZW58MXx8fHwxNzY0MjQ4NDk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Hotel"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h4 className="font-['Afacad:Medium',sans-serif] text-white text-lg md:text-xl mb-1">Tallink Spa & Conference</h4>
                <p className="font-['Afacad:Regular',sans-serif] text-[#d5d7da] text-sm">Wellness and relaxation</p>
              </div>
            </div>
          </div>

          {/* Explore More Button */}
          <div className="flex justify-center">
            <button className="bg-white text-black font-['Afacad:Medium',sans-serif] px-8 md:px-12 lg:px-16 py-3 md:py-4 rounded-lg text-base md:text-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
              Explore More Hotels
              <ArrowUpRight01Round className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Transportation Section */}
      <section className="w-full bg-black px-4 md:px-8 lg:px-[120px] py-12 md:py-16 lg:py-24">
        <div className="max-w-[1488px] mx-auto">
          <h2 className="font-['Afacad:Medium',sans-serif] font-medium text-white text-3xl md:text-4xl lg:text-[56px] tracking-tight mb-8 md:mb-12 lg:mb-16 text-center">
            Getting Around Tallinn
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 lg:mb-20">
            {/* Public Transport */}
            <div className="bg-[#1a1a1a] rounded-[56px] p-6 md:p-8 lg:p-10 min-h-[180px] md:min-h-[200px]">
              <h3 className="font-['Handlee:Regular',sans-serif] text-white text-2xl md:text-3xl lg:text-[32px] mb-4">
                Public Transport
              </h3>
              <ul className="font-['Afacad:Regular',sans-serif] text-[#d5d7da] text-base md:text-lg lg:text-xl space-y-2">
                <li>• Trams</li>
                <li>• Buses</li>
                <li>• Trolley Buses</li>
              </ul>
            </div>

            {/* Taxis & Rideshare */}
            <div className="bg-[#1a1a1a] rounded-[56px] p-6 md:p-8 lg:p-10 min-h-[180px] md:min-h-[200px]">
              <h3 className="font-['Handlee:Regular',sans-serif] text-white text-2xl md:text-3xl lg:text-[32px] mb-4">
                Taxis & Rideshare
              </h3>
              <ul className="font-['Afacad:Regular',sans-serif] text-[#d5d7da] text-base md:text-lg lg:text-xl space-y-2">
                <li>• Bolt</li>
                <li>• Uber</li>
                <li>• Local Taxis</li>
              </ul>
            </div>

            {/* Car Rentals */}
            <div className="bg-[#1a1a1a] rounded-[56px] p-6 md:p-8 lg:p-10 min-h-[180px] md:min-h-[200px]">
              <h3 className="font-['Handlee:Regular',sans-serif] text-white text-2xl md:text-3xl lg:text-[32px] mb-4">
                Car Rentals
              </h3>
              <ul className="font-['Afacad:Regular',sans-serif] text-[#d5d7da] text-base md:text-lg lg:text-xl space-y-2">
                <li>• Airport pickup</li>
                <li>• City center locations</li>
                <li>• 24/7 availability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full bg-black px-4 md:px-8 lg:px-[120px] py-12 md:py-16 lg:py-24">
        <div className="max-w-[1488px] mx-auto">
          <h2 className="font-['Afacad:Medium',sans-serif] font-medium text-white text-3xl md:text-4xl lg:text-[56px] tracking-tight mb-8 md:mb-12 text-center">
            Venue Location
          </h2>
          
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[640px] rounded-lg overflow-hidden">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1759347171940-d79bc7024948?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbWFwJTIwbG9jYXRpb258ZW58MXx8fHwxNzY0MjM1Mzc3fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Venue Location Map"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex justify-center mt-8 md:mt-12 lg:mt-16">
            <button className="bg-white text-black font-['Afacad:Medium',sans-serif] px-8 md:px-12 lg:px-16 py-3 md:py-4 rounded-lg text-base md:text-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
              View in Google Maps
              <ArrowUpRight01Round className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-black px-4 md:px-8 lg:px-[120px] py-16 md:py-20 lg:py-32">
        <div className="max-w-[1488px] mx-auto text-center">
          <h2 className="font-['Afacad:Medium',sans-serif] font-medium text-white text-3xl md:text-5xl lg:text-[72px] tracking-tight mb-6 md:mb-8">
            Ready to Book Your Stay?
          </h2>
          <p className="font-['Afacad:Regular',sans-serif] text-[#e9eaeb] text-lg md:text-2xl lg:text-[32px] mb-8 md:mb-12 lg:mb-16 max-w-3xl mx-auto">
            Secure your accommodation and travel arrangements for Class Is in Future 2026. Don't miss out on exclusive event discounts!
          </p>
          <button className="bg-white text-black font-['Afacad:Medium',sans-serif] px-12 md:px-16 lg:px-20 py-4 md:py-5 rounded-lg text-lg md:text-xl hover:bg-gray-100 transition-colors">
            Book Now
          </button>
        </div>
      </section>
    </div>
  );
}

function Discount({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 69">
        <g>
          <path d={svgPaths.p2239dd00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
          <path d="M20.8334 20.833H20.8633" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6.66667" />
          <path d="M47.4994 47.5H47.5293" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6.66667" />
          <path d={svgPaths.p4786010} stroke="currentColor" strokeLinecap="round" strokeWidth="5" />
        </g>
      </svg>
    </div>
  );
}

function CreditCardPos({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 72">
        <g>
          <path d={svgPaths.p164c600} fill="currentColor" />
          <path d="M9.16406 69.168H62.4974" stroke="currentColor" strokeLinecap="round" strokeWidth="5" />
        </g>
      </svg>
    </div>
  );
}

function ArrowUpRight01Round({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g>
          <path d="M11.75 1.75013L0.75 12.7501" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
          <path d={svgPaths.p2d234500} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}
