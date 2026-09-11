import React, { useState } from 'react';
import { useBakery } from '../context/BakeryContext';

export const ContactView: React.FC = () => {
  const { showToast } = useBakery();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'custom-cake',
    dateNeeded: '',
    guestCount: '20',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('💌 Your inquiry has been sent to Master Baker Sarthak!');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-6 pb-20 w-full">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-[12px] font-bold text-[#8c4963] uppercase tracking-wider">
          Get in Touch & Visit
        </span>
        <h1 className="font-headline text-[36px] sm:text-[44px] font-bold text-[#301401] mt-1">
          We’d Love to Bake for You
        </h1>
        <p className="text-[16px] text-[#524347] mt-2">
          Drop by our warm Indiranagar bakery or book a private cake tasting consultation for your big event.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Contact Cards & Store Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#fff1ea] rounded-3xl p-6 sm:p-8 border border-[#ffd1b5] space-y-6">
            <h2 className="font-headline text-[22px] font-bold text-[#301401]">
              The Bakery Kitchen
            </h2>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-white text-[#8c4963] flex items-center justify-center shadow-xs shrink-0">
                <span className="material-symbols-outlined text-[22px]">storefront</span>
              </div>
              <div>
                <h3 className="font-bold text-[15px] text-[#301401]">Main Bakehouse & Counter</h3>
                <p className="text-[14px] text-[#524347] mt-0.5">
                  124 Sweet Blossom Lane, Confectionery Row, 5th Main, Indiranagar, Bangalore - 560038
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-white text-[#8c4963] flex items-center justify-center shadow-xs shrink-0">
                <span className="material-symbols-outlined text-[22px]">schedule</span>
              </div>
              <div>
                <h3 className="font-bold text-[15px] text-[#301401]">Bakery Operating Hours</h3>
                <p className="text-[14px] text-[#524347] mt-0.5">
                  Monday – Sunday: <strong>7:00 AM – 10:00 PM</strong>
                  <br />
                  <span className="text-[#8c4963] font-semibold text-[13px]">
                    (Morning breads & croissants out at 7:15 AM sharp)
                  </span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-white text-[#8c4963] flex items-center justify-center shadow-xs shrink-0">
                <span className="material-symbols-outlined text-[22px]">call</span>
              </div>
              <div>
                <h3 className="font-bold text-[15px] text-[#301401]">Call the Oven</h3>
                <p className="text-[14px] text-[#524347] mt-0.5">
                  Direct Line:{' '}
                  <a href="tel:+15558253728" className="font-bold text-[#b12500] hover:underline">
                    +1 (555) 825-3728
                  </a>
                  <br />
                  WhatsApp Orders: <strong>+1 (555) 825-CAKE</strong>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-white text-[#8c4963] flex items-center justify-center shadow-xs shrink-0">
                <span className="material-symbols-outlined text-[22px]">mail</span>
              </div>
              <div>
                <h3 className="font-bold text-[15px] text-[#301401]">Email Us</h3>
                <p className="text-[14px] text-[#524347] mt-0.5">
                  hello@sarthakbakery.com • orders@sarthakbakery.com
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Map Mockup Card */}
          <div className="bg-white rounded-3xl p-5 border border-[#ffd1b5] shadow-xs">
            <div className="relative h-48 rounded-2xl overflow-hidden bg-[#ffeadf] flex items-center justify-center text-center p-4">
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#8c4963_1px,transparent_1px)] [background-size:16px_16px]"></div>
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-[#b12500] text-white flex items-center justify-center shadow-md animate-bounce">
                  <span className="material-symbols-outlined text-[24px]">location_on</span>
                </div>
                <span className="font-bold text-[14px] text-[#301401]">
                  Sarthak Bakery Indiranagar
                </span>
                <span className="text-[12px] text-[#524347]">
                  Valet parking available at entrance
                </span>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-[12px] font-semibold text-[#524347]">
                Lat: 12.9784° N, Long: 77.6408° E
              </span>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="text-[13px] font-bold text-[#b12500] hover:underline flex items-center gap-1"
              >
                <span>Open in Maps</span>
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Inquiry & Tasting Consultation Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#ffd1b5] shadow-sm">
          {submitted ? (
            <div className="text-center py-12 flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-[#ffd9e4] text-[#8c4963] flex items-center justify-center text-4xl shadow-sm">
                🎂
              </div>
              <h2 className="font-headline text-[26px] font-bold text-[#301401]">
                Thank You, {form.name || 'Friend'}!
              </h2>
              <p className="text-[15px] text-[#524347] max-w-md">
                Our pastry chef will review your celebration details and reply within 4 hours with a
                custom sketch and complimentary tasting arrangement!
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 bg-[#8c4963] text-white px-6 py-2.5 rounded-full font-bold text-[14px] shadow-sm"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="font-headline text-[24px] font-bold text-[#301401]">
                Book a Tasting or Ask a Question
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-[13px] text-[#301401] block mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Rhea Sharma"
                    className="w-full bg-[#fff8f5] p-3 rounded-xl border border-[#ffd1b5] text-[14px] text-[#301401] outline-none focus:ring-2 focus:ring-[#8c4963]"
                  />
                </div>
                <div>
                  <label className="font-bold text-[13px] text-[#301401] block mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="rhea@example.com"
                    className="w-full bg-[#fff8f5] p-3 rounded-xl border border-[#ffd1b5] text-[14px] text-[#301401] outline-none focus:ring-2 focus:ring-[#8c4963]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-[13px] text-[#301401] block mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-[#fff8f5] p-3 rounded-xl border border-[#ffd1b5] text-[14px] text-[#301401] outline-none focus:ring-2 focus:ring-[#8c4963]"
                  />
                </div>
                <div>
                  <label className="font-bold text-[13px] text-[#301401] block mb-1.5">
                    Inquiry Reason
                  </label>
                  <select
                    value={form.inquiryType}
                    onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}
                    className="w-full bg-[#fff8f5] p-3 rounded-xl border border-[#ffd1b5] text-[14px] text-[#301401] font-semibold outline-none focus:ring-2 focus:ring-[#8c4963]"
                  >
                    <option value="custom-cake">Custom Celebration / Wedding Cake</option>
                    <option value="tasting-box">Wedding Cake Tasting Box Request</option>
                    <option value="catering">Corporate Event & Dessert Table</option>
                    <option value="general">Bakery Question or Feedback</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-[13px] text-[#301401] block mb-1.5">
                    Event Date (if applicable)
                  </label>
                  <input
                    type="date"
                    value={form.dateNeeded}
                    onChange={(e) => setForm({ ...form, dateNeeded: e.target.value })}
                    className="w-full bg-[#fff8f5] p-3 rounded-xl border border-[#ffd1b5] text-[14px] text-[#301401] outline-none focus:ring-2 focus:ring-[#8c4963]"
                  />
                </div>
                <div>
                  <label className="font-bold text-[13px] text-[#301401] block mb-1.5">
                    Expected Number of Guests
                  </label>
                  <input
                    type="text"
                    value={form.guestCount}
                    onChange={(e) => setForm({ ...form, guestCount: e.target.value })}
                    placeholder="e.g. 25 guests"
                    className="w-full bg-[#fff8f5] p-3 rounded-xl border border-[#ffd1b5] text-[14px] text-[#301401] outline-none focus:ring-2 focus:ring-[#8c4963]"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-[13px] text-[#301401] block mb-1.5">
                  Describe Your Dream Cake / Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about flavors, theme, color scheme, or any dietary allergies..."
                  className="w-full bg-[#fff8f5] p-3 rounded-xl border border-[#ffd1b5] text-[14px] text-[#301401] outline-none focus:ring-2 focus:ring-[#8c4963] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#b12500] hover:bg-[#da370d] text-white py-4 rounded-full font-bold text-[15px] shadow-lg shadow-[#b12500]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[20px]">send</span>
                <span>Send Inquiry to Master Baker</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
