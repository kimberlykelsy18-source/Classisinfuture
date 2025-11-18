import { ArrowLeft } from 'lucide-react';

interface CheckoutPageProps {
  onNavigate: (page: string) => void;
  ticketInfo?: {
    title: string;
    price: string;
    subtitle: string;
  };
}

export function CheckoutPage({ onNavigate, ticketInfo }: CheckoutPageProps) {
  // Default to General Admission if no ticket info provided
  const ticket = ticketInfo || {
    title: "General Admission",
    price: "$200",
    subtitle: "For professionals, enthusiasts, and changemakers looking to experience the full conference."
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
        {/* Back Button */}
        <button
          onClick={() => onNavigate('tickets')}
          className="flex items-center gap-2 text-purple-700 hover:text-purple-900 mb-8 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-['Afacad'] text-lg">Back to Tickets</span>
        </button>

        {/* Checkout Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-8">
            <h1 className="font-['Afacad'] text-3xl sm:text-4xl lg:text-5xl">Checkout</h1>
            <p className="font-['Afacad'] text-lg sm:text-xl mt-2 text-purple-100">
              Complete your purchase to secure your spot
            </p>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 lg:p-10 space-y-8">
            {/* Ticket Summary */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
              <h3 className="font-['Afacad'] text-2xl sm:text-3xl text-purple-900 mb-2">{ticket.title}</h3>
              <p className="font-['Afacad'] text-lg text-purple-700 mb-4">{ticket.subtitle}</p>
              <div className="flex items-center justify-between pt-4 border-t-2 border-purple-200">
                <span className="font-['Afacad'] text-xl sm:text-2xl text-purple-900">Total:</span>
                <span className="font-['Afacad'] text-3xl sm:text-4xl text-purple-900">{ticket.price}</span>
              </div>
            </div>

            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="font-['Afacad'] text-2xl text-gray-900">Personal Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-['Inter'] text-sm text-gray-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 font-['Inter']"
                    required
                  />
                </div>
                <div>
                  <label className="block font-['Inter'] text-sm text-gray-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 font-['Inter']"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block font-['Inter'] text-sm text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  placeholder="john.doe@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 font-['Inter']"
                  required
                />
              </div>
              <div>
                <label className="block font-['Inter'] text-sm text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 font-['Inter']"
                />
              </div>
            </div>

            {/* Payment Information */}
            <div className="space-y-4">
              <h3 className="font-['Afacad'] text-2xl text-gray-900">Payment Information</h3>
              <div>
                <label className="block font-['Inter'] text-sm text-gray-700 mb-2">Card Number *</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 font-['Inter']"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-['Inter'] text-sm text-gray-700 mb-2">Expiry Date *</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 font-['Inter']"
                    required
                  />
                </div>
                <div>
                  <label className="block font-['Inter'] text-sm text-gray-700 mb-2">CVV *</label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 font-['Inter']"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3 pt-4">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 w-5 h-5 rounded border-gray-300 text-purple-600 focus:ring-2 focus:ring-purple-500"
                required
              />
              <label htmlFor="terms" className="font-['Inter'] text-sm text-gray-700">
                I agree to the <span className="text-purple-600 underline cursor-pointer">Terms and Conditions</span> and <span className="text-purple-600 underline cursor-pointer">Privacy Policy</span>
              </label>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={() => onNavigate('tickets')}
                className="flex-1 px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-['Afacad'] text-lg sm:text-xl hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                className="flex-1 px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-['Afacad'] text-lg sm:text-xl hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl"
              >
                Complete Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
