import React, { useState, useEffect } from 'react';
import { useBakery } from '../context/BakeryContext';
import { BAKERY_ITEMS, BAKERY_SEAL_STAMP } from '../data/mockData';

interface HomeViewProps {
  onOpenCustomCakeModal: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onOpenCustomCakeModal }) => {
  const { setCurrentPage, setSelectedProductId, addToCart, toggleWishlist, isWishlisted, showToast } =
    useBakery();

  // Countdown timer state for promo banner
  const [timeLeft, setTimeLeft] = useState({ hours: 14, mins: 38, secs: 42 });
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        if (prev.mins > 0) return { ...prev, mins: prev.mins - 1, secs: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, mins: 59, secs: 59 };
        return { hours: 14, mins: 38, secs: 42 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText('SWEETWEEKEND');
    setCopiedCode(true);
    showToast('🎉 Copied promo code: SWEETWEEKEND');
    setTimeout(() => setCopiedCode(false), 2500);
  };

  // Filter 6 featured bestsellers
  const bestsellers = BAKERY_ITEMS.slice(0, 6);

  return (
    <div className="flex flex-col w-full">
      {/* Top Ambient Glow Layers */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#f8a5c2]/25 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute top-48 right-10 w-80 h-80 bg-[#ffdea8]/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-16 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Text Column */}
            <div className="lg:col-span-7 flex flex-col items-start gap-6">
              <div className="inline-flex items-center gap-2 bg-[#ffe3d3] px-4 py-2 rounded-full shadow-sm">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#b12500] text-white text-xs">
                  <span
                    className="material-symbols-outlined text-[15px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    cake
                  </span>
                </span>
                <span className="font-bold text-[13px] text-[#b12500] uppercase tracking-wider">
                  100% Fresh Daily
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#d6c1c6]"></span>
                <span className="text-[14px] text-[#524347]">Baked with Love, Served with Happiness</span>
              </div>

              <h1 className="font-headline text-[38px] sm:text-[46px] lg:text-[54px] font-bold text-[#301401] leading-[1.12] tracking-tight">
                Delicious Handcrafted Cakes & Artisan Pastries{' '}
                <span className="text-[#8c4963] relative inline-block">
                  Fresh Out
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-[#f8a5c2] -z-10"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 20"
                  >
                    <path
                      d="M0 15 Q 50 0, 100 15"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="8"
                    />
                  </svg>
                </span>{' '}
                of the Oven
              </h1>

              <p className="text-[17px] text-[#524347] max-w-xl leading-relaxed">
                Indulge in our melt-in-mouth cupcakes, sourdough breads, custom celebration cakes, and
                velvety fruit pastries made from organic farm butter and pure vanilla beans.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setCurrentPage('menu')}
                  className="group relative inline-flex items-center gap-3 bg-[#8c4963] hover:bg-[#f8a5c2] text-white hover:text-[#763750] font-bold text-[16px] px-8 py-4 rounded-full shadow-lg shadow-[#8c4963]/25 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0.5"
                >
                  <span>Explore Menu 🍰</span>
                  <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </button>
                <button
                  onClick={() => setCurrentPage('cart')}
                  className="inline-flex items-center gap-2 bg-[#4a2810] hover:bg-[#301401] text-[#fff8f5] font-bold text-[16px] px-7 py-4 rounded-full shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0.5"
                >
                  <span>Order Now 🍓</span>
                  <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 w-full">
                <div className="flex items-center gap-3 bg-[#fff1ea] px-4 py-3 rounded-2xl shadow-sm border border-[#ffeadf]">
                  <div className="w-10 h-10 rounded-full bg-[#ffdea8] flex items-center justify-center text-[#271900] shrink-0">
                    <span
                      className="material-symbols-outlined text-[22px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-[14px] text-[#301401]">4.9 / 5.0 Star</p>
                    <p className="text-[12px] text-[#524347]">4,500+ Happy Foodies</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#fff1ea] px-4 py-3 rounded-2xl shadow-sm border border-[#ffeadf]">
                  <div className="w-10 h-10 rounded-full bg-[#ffdad2] flex items-center justify-center text-[#b12500] shrink-0">
                    <span className="material-symbols-outlined text-[22px]">two_wheeler</span>
                  </div>
                  <div>
                    <p className="font-bold text-[14px] text-[#301401]">45-Min Express</p>
                    <p className="text-[12px] text-[#524347]">Local Doorstep Delivery</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#fff1ea] px-4 py-3 rounded-2xl shadow-sm border border-[#ffeadf]">
                  <div className="w-10 h-10 rounded-full bg-[#ffd9e4] flex items-center justify-center text-[#8c4963] shrink-0">
                    <span
                      className="material-symbols-outlined text-[22px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      favorite
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-[14px] text-[#301401]">Custom Piping</p>
                    <p className="text-[12px] text-[#524347]">Personalized Messages</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Visual Showcase */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-[3rem] bg-gradient-to-tr from-[#ffdbc7] via-[#fff1ea] to-[#f8a5c2]/40 p-8 shadow-2xl shadow-[#8c4963]/10 flex items-center justify-center">
                {/* Floating Stickers */}
                <div
                  className="absolute -top-4 -left-4 bg-white text-[#301401] shadow-md px-4 py-2.5 rounded-full flex items-center gap-2 animate-bounce"
                  style={{ animationDuration: '4s' }}
                >
                  <span className="text-xl">🍓</span>
                  <span className="font-bold text-[12px] text-[#b12500]">Pure Butter Glaze</span>
                </div>

                <div className="absolute -bottom-4 -right-2 bg-white text-[#301401] shadow-md px-4 py-2.5 rounded-full flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-[#b12500] text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    local_fire_department
                  </span>
                  <span className="font-bold text-[12px]">Warm at 7:00 AM</span>
                </div>

                <div className="absolute top-1/2 -right-6 bg-white text-[#301401] shadow-lg px-3.5 py-2.5 rounded-2xl flex flex-col items-center gap-0.5">
                  <span className="text-xl">⭐</span>
                  <span className="font-bold text-[10px] text-[#765a23] uppercase">Chef pick</span>
                </div>

                {/* Central Rotating Emblem */}
                <div className="relative z-10 w-full h-full rounded-full bg-white p-4 shadow-inner flex items-center justify-center overflow-hidden">
                  <img
                    alt="Sarthak Bakery Emblem"
                    className="w-full h-full object-contain rounded-full transform hover:rotate-3 hover:scale-105 transition-all duration-500 cursor-pointer"
                    onClick={() => {
                      setSelectedProductId('cherry-blossom-cake');
                      setCurrentPage('product-detail');
                    }}
                    src={BAKERY_SEAL_STAMP}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* POPULAR BAKERY CATEGORIES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="font-bold text-[13px] text-[#8c4963] uppercase tracking-widest flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">dinner_dining</span> Fresh Morning Counter
            </span>
            <h2 className="font-headline text-[32px] font-bold text-[#301401] mt-1">
              Explore Popular Categories
            </h2>
          </div>
          <button
            onClick={() => setCurrentPage('menu')}
            className="group inline-flex items-center gap-2 font-bold text-[15px] text-[#b12500] hover:text-[#da370d] transition-colors"
          >
            <span>View Complete Counter</span>
            <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </button>
        </div>

        {/* Bento-Style Category Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {[
            {
              icon: '🎂',
              title: 'Celebration Cakes',
              subtitle: '120+ Custom Designs',
              bg: 'bg-[#ffd9e4]',
              color: 'text-[#8c4963]',
            },
            {
              icon: '🥐',
              title: 'Pastries & Danishes',
              subtitle: '45+ Flaky Varieties',
              bg: 'bg-[#ffdad2]',
              color: 'text-[#b12500]',
            },
            {
              icon: '🥖',
              title: 'Artisan Breads',
              subtitle: 'Fresh Daily 7 AM',
              bg: 'bg-[#ffdea8]',
              color: 'text-[#765a23]',
            },
            {
              icon: '🧁',
              title: 'Cookies & Macarons',
              subtitle: 'Curated Gift Boxes',
              bg: 'bg-[#f8a5c2]/40',
              color: 'text-[#8c4963]',
            },
            {
              icon: '☕',
              title: 'Hot Cocoa & Brews',
              subtitle: 'Specialty Blends',
              bg: 'bg-[#ffdbc7]',
              color: 'text-[#765a23]',
            },
          ].map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage('menu')}
              className={`group bg-[#fff1ea] hover:bg-[#ffeadf] rounded-3xl p-5 flex flex-col items-center text-center transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md ${
                idx === 4 ? 'col-span-2 md:col-span-1' : ''
              }`}
            >
              <div
                className={`w-16 h-16 rounded-2xl ${cat.bg} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}
              >
                {cat.icon}
              </div>
              <h3 className="font-headline text-[16px] font-bold text-[#301401] group-hover:text-[#8c4963] transition-colors leading-snug">
                {cat.title}
              </h3>
              <p className="text-[12px] text-[#524347] mt-1">{cat.subtitle}</p>
              <span className="mt-4 text-[12px] font-bold text-[#8c4963] inline-flex items-center gap-1 group-hover:underline">
                Explore →
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* SPECIAL PROMO DEAL BANNER */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-6 w-full">
        <div className="relative overflow-hidden bg-gradient-to-r from-[#ffeadf] via-[#ffe3d3] to-[#f8a5c2]/60 rounded-3xl p-8 lg:p-10 shadow-lg shadow-[#8c4963]/5">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-3 max-w-xl">
              <div className="inline-flex items-center gap-2 bg-[#b12500] text-white px-3.5 py-1 rounded-full font-bold text-[12px]">
                <span className="material-symbols-outlined text-[16px]">redeem</span>
                <span>WEEKEND SWEET TOOTH SPECIAL</span>
              </div>
              <h3 className="font-headline text-[28px] lg:text-[32px] font-bold text-[#301401] leading-tight">
                Buy Any 2 Signature Cupcakes, Get 1 Strawberry Macaron{' '}
                <span className="text-[#b12500]">FREE!</span>
              </h3>
              <p className="text-[15px] text-[#524347]">
                Valid in store and online this Saturday & Sunday. Freshly baked in small batches until morning batch ends.
              </p>
            </div>

            {/* Countdown & Promo Code Box */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center gap-4 bg-white/85 backdrop-blur-md p-5 rounded-2xl shadow-sm border border-[#ffd1b5]">
              {/* Countdown Clock */}
              <div className="flex items-center gap-2">
                <div className="flex flex-col items-center bg-[#ffeadf] px-3 py-2 rounded-xl min-w-[54px]">
                  <span className="font-headline text-[20px] font-bold text-[#301401]">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] text-[#524347] uppercase font-bold">Hours</span>
                </div>
                <span className="font-headline text-[#8c4963] font-bold text-xl">:</span>
                <div className="flex flex-col items-center bg-[#ffeadf] px-3 py-2 rounded-xl min-w-[54px]">
                  <span className="font-headline text-[20px] font-bold text-[#301401]">
                    {String(timeLeft.mins).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] text-[#524347] uppercase font-bold">Mins</span>
                </div>
                <span className="font-headline text-[#8c4963] font-bold text-xl">:</span>
                <div className="flex flex-col items-center bg-[#ffeadf] px-3 py-2 rounded-xl min-w-[54px]">
                  <span className="font-headline text-[20px] font-bold text-[#b12500]">
                    {String(timeLeft.secs).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] text-[#524347] uppercase font-bold">Secs</span>
                </div>
              </div>

              {/* Code Box with Copy */}
              <div className="flex items-center gap-2 bg-[#ffe3d3] px-4 py-2 rounded-xl">
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-[#524347] uppercase font-bold">Use Code</span>
                  <span className="font-bold text-[15px] text-[#8c4963] tracking-wider">
                    SWEETWEEKEND
                  </span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="bg-[#8c4963] hover:bg-[#763750] text-white p-2 rounded-lg transition-all flex items-center gap-1 text-[12px] font-bold"
                  title="Copy coupon code"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {copiedCode ? 'check' : 'content_copy'}
                  </span>
                  {copiedCode && <span>Copied</span>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BESTSELLING CONFECTIONS GRID */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-14 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="font-bold text-[13px] text-[#b12500] uppercase tracking-widest flex items-center gap-2">
              <span
                className="material-symbols-outlined text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                favorite
              </span>{' '}
              Oven-Fresh Sensations
            </span>
            <h2 className="font-headline text-[32px] font-bold text-[#301401] mt-1">
              Our Bestselling Confections
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[14px] text-[#524347]">Made fresh every 3 hours</span>
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#b12500] animate-ping"></span>
          </div>
        </div>

        {/* 6 Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {bestsellers.map((product) => {
            const isFav = isWishlisted(product.id);
            return (
              <div
                key={product.id}
                className="group bg-white rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-[#ffeadf]"
              >
                <div>
                  <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-[#fff1ea] mb-4">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      onClick={() => {
                        setSelectedProductId(product.id);
                        setCurrentPage('product-detail');
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                    />
                    {product.badge && (
                      <div className="absolute top-3 left-3 bg-[#b12500] text-white px-3 py-1 rounded-full font-bold text-[11px] shadow-sm flex items-center gap-1">
                        <span
                          className="material-symbols-outlined text-[14px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                        <span>{product.badge}</span>
                      </div>
                    )}
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      aria-label="Wishlist toggle"
                      className={`absolute top-3 right-3 w-9 h-9 rounded-full backdrop-blur-sm flex items-center justify-center transition-all shadow-sm ${
                        isFav
                          ? 'bg-[#8c4963] text-white'
                          : 'bg-white/90 text-[#8c4963] hover:bg-[#8c4963] hover:text-white'
                      }`}
                    >
                      <span
                        className="material-symbols-outlined text-[18px]"
                        style={{ fontVariationSettings: isFav ? "'FILL' 1" : "'FILL' 0" }}
                      >
                        favorite
                      </span>
                    </button>
                  </div>

                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-[11px] text-[#765a23] bg-[#ffdea8]/40 px-2.5 py-0.5 rounded-md">
                      {product.categoryLabel}
                    </span>
                    <div className="flex items-center gap-1 text-[#765a23]">
                      <span
                        className="material-symbols-outlined text-[16px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                      <span className="font-bold text-[13px] text-[#301401]">
                        {product.rating}
                      </span>
                      <span className="text-[12px] text-[#524347]">
                        ({product.reviewCount})
                      </span>
                    </div>
                  </div>

                  <h3
                    onClick={() => {
                      setSelectedProductId(product.id);
                      setCurrentPage('product-detail');
                    }}
                    className="font-headline text-[18px] font-bold text-[#301401] group-hover:text-[#8c4963] transition-colors mt-1 cursor-pointer line-clamp-1"
                  >
                    {product.name}
                  </h3>
                  <p className="text-[14px] text-[#524347] mt-2 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-5 mt-4 border-t border-[#ffeadf]">
                  <div className="flex flex-col">
                    <span className="text-[11px] text-[#524347] font-semibold">
                      {product.portionLabel || 'Fresh portion'}
                    </span>
                    <span className="font-headline text-[22px] text-[#b12500] font-bold">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setSelectedProductId(product.id);
                        setCurrentPage('product-detail');
                      }}
                      className="text-[12px] font-bold text-[#8c4963] hover:underline px-2 py-1"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => {
                        addToCart({
                          productId: product.id,
                          name: product.name,
                          imageUrl: product.imageUrl,
                          basePrice: product.price,
                          unitPrice: product.price,
                          quantity: 1,
                          portionSubtitle: product.portionLabel,
                        });
                      }}
                      className="inline-flex items-center gap-1.5 bg-[#b12500] hover:bg-[#da370d] text-white px-4 py-2.5 rounded-full font-bold text-[13px] shadow-sm transition-transform active:scale-95"
                    >
                      <span>Add to Box</span>
                      <span className="material-symbols-outlined text-[18px]">
                        add_shopping_cart
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* BESPOKE CUSTOM CAKE ATELIER BANNER */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-10 w-full">
        <div className="relative rounded-3xl bg-[#ffe3d3] overflow-hidden shadow-xl border border-[#ffd1b5]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Visual side */}
            <div className="lg:col-span-5 h-80 lg:h-full relative min-h-[340px]">
              <img
                alt="Custom Cake Atelier"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjdjM5r_RubAUu0hgweuk6aPgOtzoRtsf7wXB_u0oUii7e_IwX3Wgy9VHp6hNNuMG5qPQD_W0kLzqVNFs5CPB1-387kNVomzhaRjpfgGv-AQRF2EEWS-PZ1pnPhb3aqwAYa5tjg_PCRTkoL8Ae9FN6lRvg22MZUiojlXeQ6BGF8fSA2omQshRBG4c1vnYh1VZJnoAPzuGhz2v_6H3ePTm1BpiQ5CbPYYFyHV4FBLnSnt_wAmNeUVzQ"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-[#ffe3d3]/40 to-[#ffe3d3]"></div>
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-md border border-[#ffd1b5]">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">✨</span>
                  <div>
                    <p className="font-bold text-[14px] text-[#301401]">
                      1,200+ Custom Celebrations
                    </p>
                    <p className="text-[12px] text-[#524347]">
                      Weddings, Birthdays & Anniversaries
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content side */}
            <div className="lg:col-span-7 p-8 lg:p-14 flex flex-col items-start gap-5">
              <div className="inline-flex items-center gap-2 bg-[#f8a5c2] text-[#763750] px-4 py-1.5 rounded-full font-bold text-[12px]">
                <span className="material-symbols-outlined text-[16px]">draw</span>
                <span>BESPOKE CONFECTIONERY ATELIER</span>
              </div>
              <h2 className="font-headline text-[32px] lg:text-[40px] font-bold text-[#301401] leading-tight">
                Dreaming of a Custom Cake for Your Big Day?
              </h2>
              <p className="text-[16px] text-[#524347] leading-relaxed">
                We craft wedding, birthday, and milestone centerpieces that taste just as unforgettable
                as they look. Choose your favorite sponge, velvet filling, color palette, and bespoke
                custom lettering.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenCustomCakeModal}
                  className="inline-flex items-center gap-3 bg-[#b12500] hover:bg-[#da370d] text-white font-bold text-[16px] px-8 py-4 rounded-full shadow-lg shadow-[#b12500]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0.5"
                >
                  <span>Design Your Cake 🎂</span>
                  <span className="material-symbols-outlined text-[20px]">brush</span>
                </button>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="inline-flex items-center gap-2 bg-white hover:bg-[#fff8f5] text-[#301401] font-bold text-[15px] px-7 py-4 rounded-full shadow-sm transition-all border border-[#ffd1b5]"
                >
                  <span>Book Tasting Consultation</span>
                  <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                </button>
              </div>

              {/* Feature Checkmarks */}
              <div className="flex flex-wrap gap-4 pt-4 text-[#524347] font-bold text-[13px]">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#b12500] text-[18px]">
                    check_circle
                  </span>{' '}
                  48-Hour Rush Available
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#b12500] text-[18px]">
                    check_circle
                  </span>{' '}
                  100% Free Tasting Box for Weddings
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#b12500] text-[18px]">
                    check_circle
                  </span>{' '}
                  Chilled Van Delivery
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER LOVE TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-14 w-full">
        <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 bg-[#ffd9e4] text-[#70324b] px-3.5 py-1 rounded-full font-bold text-[12px]">
            <span
              className="material-symbols-outlined text-[16px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              favorite
            </span>
            <span>TESTIMONIALS OF HAPPINESS</span>
          </div>
          <h2 className="font-headline text-[32px] font-bold text-[#301401]">
            Sweet Words from Our Cake Lovers
          </h2>
          <p className="text-[15px] text-[#524347]">
            Every order leaves our kitchen with sincere warmth. Here is what makes our community smile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              author: 'Ananya Sharma',
              order: 'Custom Unicorn 2-Tier Cake',
              text: '“Sarthak Bakery made my daughter’s 5th birthday cherry wonderland cake and it stole the entire party! Tender sponge, not overly sugary, and the piping was pure art. Everyone asked for the bakery card.”',
              avatar: 'A',
              bg: 'bg-[#f8a5c2]',
            },
            {
              author: 'Rohan Patel',
              order: 'Weekly Subscriber',
              text: '“Their signature cherry cupcakes are something I crave every single weekend. The parcel arrives warmly wrapped with handwritten notes and cute pink ribbon bows. Best artisan bakery in town!”',
              avatar: 'R',
              bg: 'bg-[#ffdea8]',
            },
            {
              author: 'Meera Sen',
              order: 'Verified Foodie Review',
              text: '“As someone who needs eggless pastries, finding fluffy, decadent tarts was near impossible until Sarthak Bakery. The Belgian ganache melt-in-mouth texture is truly top-tier confectionery craft.”',
              avatar: 'M',
              bg: 'bg-[#ffdad2]',
            },
          ].map((rev, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative border border-[#ffeadf]"
            >
              <span className="material-symbols-outlined absolute top-6 right-6 text-[#f8a5c2]/50 text-5xl select-none pointer-events-none">
                format_quote
              </span>
              <div>
                <div className="flex items-center gap-1 text-[#765a23] mb-4">
                  {[...Array(5)].map((_, s) => (
                    <span
                      key={s}
                      className="material-symbols-outlined text-[20px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="text-[15px] text-[#301401] leading-relaxed italic">{rev.text}</p>
              </div>
              <div className="flex items-center gap-3 pt-6 mt-4 border-t border-[#ffeadf]">
                <div
                  className={`w-11 h-11 rounded-full ${rev.bg} flex items-center justify-center font-headline text-[16px] text-[#301401] font-bold`}
                >
                  {rev.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-[14px] text-[#301401]">{rev.author}</h4>
                  <span className="text-[12px] text-[#524347]">{rev.order}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STORE LOCATOR CALLOUT */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-6 mb-10 w-full">
        <div className="bg-[#fff1ea] rounded-3xl p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#ffdbc7]">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-[#8c4963] flex items-center justify-center text-white shrink-0 shadow-md">
              <span className="material-symbols-outlined text-[32px]">storefront</span>
            </div>
            <div>
              <h3 className="font-headline text-[24px] font-bold text-[#301401]">
                Drop by 124 Sweet Blossom Lane
              </h3>
              <p className="text-[15px] text-[#524347] mt-1">
                Experience the aroma of roasted coffee and fresh sourdough bread. Doors open daily at 7:00 AM.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setCurrentPage('contact')}
              className="inline-flex items-center gap-2 bg-[#ffdbc7] hover:bg-[#ffe3d3] text-[#301401] font-bold text-[14px] px-6 py-3.5 rounded-full transition-all"
            >
              <span>Get Directions</span>
              <span className="material-symbols-outlined text-[18px]">near_me</span>
            </button>
            <a
              href="tel:+15558253728"
              className="inline-flex items-center gap-2 bg-[#b12500] text-white hover:bg-[#da370d] font-bold text-[14px] px-6 py-3.5 rounded-full transition-all shadow-md active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              <span>Call the Oven</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
