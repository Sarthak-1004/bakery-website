import React, { useState } from 'react';
import { useBakery } from '../context/BakeryContext';
import { BAKERY_LOGO } from '../data/mockData';

export const Footer: React.FC = () => {
  const { setCurrentPage, showToast } = useBakery();
  const [email, setEmail] = useState('');

  const handleJoinClub = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      showToast('💌 Welcome to the Baker’s Club! 15% voucher sent to your inbox!');
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-[#fff1ea] text-[#524347] mt-16 relative">
      {/* Decorative Scalloped Wave Divider */}
      <div className="w-full overflow-hidden leading-none text-[#fff1ea] -translate-y-[99%] absolute top-0 left-0">
        <svg
          className="w-full h-8 block"
          fill="currentColor"
          preserveAspectRatio="none"
          viewBox="0 0 1200 40"
        >
          <path d="M0,20 C150,40 350,0 500,20 C650,40 850,0 1000,20 C1100,32 1160,25 1200,20 L1200,40 L0,40 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand & Mission Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                alt="Sarthak Bakery Logo"
                className="w-11 h-11 rounded-full object-cover shadow-[0_2px_8px_rgba(140,73,99,0.25)]"
                src={BAKERY_LOGO}
              />
              <span className="font-headline text-[20px] font-bold text-[#301401]">
                Sarthak Bakery
              </span>
            </div>
            <p className="text-[14px] text-[#524347] leading-relaxed">
              Handcrafted with real vanilla beans, farm-fresh pasture butter, and warm artisanal love. Every crumb carries our patisserie promise of joy and sweetness.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage('menu');
                }}
                aria-label="Bakehouse News"
                className="w-9 h-9 rounded-full bg-[#ffeadf] flex items-center justify-center text-[#8c4963] hover:bg-[#8c4963] hover:text-white transition-all shadow-sm"
              >
                <span className="material-symbols-outlined text-[20px]">cake</span>
              </a>
              <a
                href="#gallery"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage('home');
                }}
                aria-label="Photo Gallery"
                className="w-9 h-9 rounded-full bg-[#ffeadf] flex items-center justify-center text-[#8c4963] hover:bg-[#8c4963] hover:text-white transition-all shadow-sm"
              >
                <span className="material-symbols-outlined text-[20px]">photo_camera</span>
              </a>
              <a
                href="#notes"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage('about-us');
                }}
                aria-label="Chef Notes"
                className="w-9 h-9 rounded-full bg-[#ffeadf] flex items-center justify-center text-[#8c4963] hover:bg-[#8c4963] hover:text-white transition-all shadow-sm"
              >
                <span className="material-symbols-outlined text-[20px]">menu_book</span>
              </a>
              <a
                href="#kitchen"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage('kitchen-live');
                }}
                aria-label="Live Kitchen"
                className="w-9 h-9 rounded-full bg-[#ffeadf] flex items-center justify-center text-[#8c4963] hover:bg-[#8c4963] hover:text-white transition-all shadow-sm"
                title="Kitchen Live Queue"
              >
                <span className="material-symbols-outlined text-[20px]">soup_kitchen</span>
              </a>
            </div>
          </div>

          {/* Quick Bites Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="font-headline text-[18px] font-bold text-[#301401]">
              Quick Bites
            </h4>
            <ul className="flex flex-col gap-2.5 text-[15px]">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#8c4963] text-[18px]">
                  bakery_dining
                </span>
                <button
                  onClick={() => setCurrentPage('menu')}
                  className="hover:text-[#8c4963] transition-colors text-left"
                >
                  Our Fresh Menu
                </button>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#8c4963] text-[18px]">
                  cake
                </span>
                <button
                  onClick={() => setCurrentPage('custom-cakes')}
                  className="hover:text-[#8c4963] transition-colors text-left"
                >
                  Custom Celebration Cakes
                </button>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#8c4963] text-[18px]">
                  local_shipping
                </span>
                <button
                  onClick={() => setCurrentPage('account')}
                  className="hover:text-[#8c4963] transition-colors text-left"
                >
                  Track Your Warm Box
                </button>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#8c4963] text-[18px]">
                  soup_kitchen
                </span>
                <button
                  onClick={() => setCurrentPage('kitchen-live')}
                  className="hover:text-[#8c4963] transition-colors text-left"
                >
                  Kitchen Live Command Hub
                </button>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#8c4963] text-[18px]">
                  diversity_1
                </span>
                <button
                  onClick={() => setCurrentPage('about-us')}
                  className="hover:text-[#8c4963] transition-colors text-left"
                >
                  Meet The Bakers
                </button>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#8c4963] text-[18px]">
                  chat_bubble
                </span>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="hover:text-[#8c4963] transition-colors text-left"
                >
                  Store Locator & Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Visit Our Kitchen */}
          <div className="flex flex-col gap-4">
            <h4 className="font-headline text-[18px] font-bold text-[#301401]">
              Visit Our Kitchen
            </h4>
            <div className="flex flex-col gap-3 text-[14px]">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#765a23] text-[20px] shrink-0 mt-0.5">
                  store
                </span>
                <span>124 Sweet Blossom Lane, Confectionery Row, Indiranagar</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#765a23] text-[20px] shrink-0">
                  call
                </span>
                <a href="tel:+15558253728" className="hover:underline font-bold text-[#301401]">
                  +1 (555) 825-3728
                </a>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#765a23] text-[20px] shrink-0 mt-0.5">
                  schedule
                </span>
                <span>
                  Mon - Sun: 7:00 AM – 10:00 PM
                  <br />
                  <span className="text-[#8c4963] font-bold">(Ovens warm at dawn)</span>
                </span>
              </div>
            </div>
          </div>

          {/* Baker's Club Newsletter */}
          <div className="flex flex-col gap-4">
            <h4 className="font-headline text-[18px] font-bold text-[#301401]">
              Baker's Club
            </h4>
            <p className="text-[14px] text-[#524347]">
              Subscribe for secret recipe drops, weekend tasting party invites, and 15% discount sweet slips.
            </p>
            <form onSubmit={handleJoinClub} className="flex flex-col gap-2">
              <div className="flex items-center bg-white p-1 rounded-full shadow-[0_2px_8px_rgba(74,40,16,0.06)] border border-[#ffd1b5]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your sweet email address..."
                  required
                  className="bg-transparent border-none outline-none text-[13px] text-[#301401] placeholder:text-[#524347]/60 flex-1 px-3"
                />
                <button
                  type="submit"
                  className="bg-[#b12500] hover:bg-[#da370d] text-white rounded-full px-4 py-1.5 font-bold text-[13px] transition-all flex items-center gap-1 shadow-sm active:scale-95 shrink-0"
                >
                  <span>Join</span>
                  <span className="material-symbols-outlined text-[16px]">send</span>
                </button>
              </div>
              <span className="font-bold text-[11px] text-[#765a23] px-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">volunteer_activism</span>
                No spam, just sprinkles & sugar bakes!
              </span>
            </form>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-6 border-t border-[#d6c1c6] flex flex-col md:flex-row items-center justify-between gap-4 text-[13px]">
          <p className="text-[#524347] text-center md:text-left">
            © 2024 Sarthak Bakery. Oven-baked with supreme love and joy.
          </p>
          <div className="flex items-center gap-4 text-[#524347] flex-wrap justify-center">
            <button
              onClick={() => showToast('Allergen details: 100% genuine butter, eggless marks on request.')}
              className="hover:text-[#8c4963] transition-colors"
            >
              Baking Ingredients & Allergen Guide
            </button>
            <span>•</span>
            <button
              onClick={() => showToast('Your privacy is secured with bakery love.')}
              className="hover:text-[#8c4963] transition-colors"
            >
              Privacy Confection
            </button>
            <span>•</span>
            <button
              onClick={() => showToast('Terms of Sweetness: Freshness guaranteed on every order.')}
              className="hover:text-[#8c4963] transition-colors"
            >
              Terms of Sweetness
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
