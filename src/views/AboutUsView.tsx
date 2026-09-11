import React from 'react';
import { useBakery } from '../context/BakeryContext';
import { BAKERY_LOGO, RHEA_SHARMA_AVATAR } from '../data/mockData';

export const AboutUsView: React.FC = () => {
  const { setCurrentPage } = useBakery();

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-6 pb-20 w-full">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-[13px] text-[#524347] mb-6 font-semibold">
        <button onClick={() => setCurrentPage('home')} className="hover:underline">
          Home
        </button>
        <span>/</span>
        <span className="text-[#8c4963]">Our Story & Craft</span>
      </div>

      {/* Hero Story Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#ffe3d3] via-[#ffeadf] to-[#f8a5c2]/40 p-8 sm:p-14 border border-[#ffd1b5] mb-14">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-[#ffd9e4] text-[#70324b] px-3.5 py-1 rounded-full font-bold text-[12px] mb-4">
            <span>✨ BAKED WITH LOVE SINCE 2018</span>
          </div>
          <h1 className="font-headline text-[36px] sm:text-[46px] font-bold text-[#301401] leading-tight">
            Flour, Butter, & An Unwavering Love for Confectionery Art
          </h1>
          <p className="text-[16px] text-[#524347] mt-4 leading-relaxed">
            Sarthak Bakery began with a single copper-deck oven and a simple conviction: celebration
            cakes should taste as deeply wholesome and velvety as they look. We never use artificial
            cake mixes, pre-made stabilizers, or synthetic flavorings.
          </p>
        </div>
      </div>

      {/* The 4 Baking Pillars */}
      <section className="mb-16">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="font-headline text-[28px] font-bold text-[#301401]">
            Our Patisserie Philosophy
          </h2>
          <p className="text-[14px] text-[#524347] mt-1">
            Ingredients sourced with reverence, baked every sunrise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: '🌾',
              title: 'Unbleached Grains',
              desc: 'Stone-milled certified flours that preserve the natural wheat germ and nutty sweetness.',
            },
            {
              icon: '🧈',
              title: '100% Pasture Butter',
              desc: 'Zero hydrogenated vegetable oils or margarine. Only grass-fed, slow-churned butter.',
            },
            {
              icon: '🌿',
              title: 'Vanilla Bean Caviar',
              desc: 'Direct-trade whole Bourbon vanilla pods scraped by hand for authentic floral fragrance.',
            },
            {
              icon: '🍓',
              title: 'Handmade Purées',
              desc: 'Wild cherries, strawberries, and pistachios reduced in copper pans without corn syrups.',
            },
          ].map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-[#ffd1b5] shadow-xs hover:shadow-md transition-all text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#fff1ea] flex items-center justify-center text-3xl mb-4">
                {pillar.icon}
              </div>
              <h3 className="font-headline text-[18px] font-bold text-[#301401]">
                {pillar.title}
              </h3>
              <p className="text-[13px] text-[#524347] mt-2 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Head Bakers Card */}
      <section className="bg-[#fff1ea] rounded-3xl p-8 sm:p-12 border border-[#ffd1b5] mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative">
              <img
                src={RHEA_SHARMA_AVATAR}
                alt="Head Baker"
                className="w-52 h-52 rounded-3xl object-cover shadow-xl ring-4 ring-white"
              />
              <div className="absolute -bottom-3 -right-3 bg-white px-3.5 py-1.5 rounded-full shadow-md border border-[#ffd1b5] flex items-center gap-1.5">
                <span className="text-lg">👩‍🍳</span>
                <span className="text-[11px] font-bold text-[#8c4963]">Head Pastry Chef</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-4">
            <span className="text-[12px] font-bold text-[#b12500] uppercase tracking-wider">
              Meet The Founders & Pastry Artists
            </span>
            <h2 className="font-headline text-[30px] font-bold text-[#301401]">
              Sarthak & Rhea’s Daily Baking Ritual
            </h2>
            <p className="text-[15px] text-[#524347] leading-relaxed">
              Every morning at 5:00 AM, the aromas of roasted hazelnuts and fresh sourdough fill our
              Indiranagar kitchen. We personally taste every batch of Swiss buttercream, inspect every
              crisp macaron foot, and hand-pipe every celebration message with delicate calligraphy.
            </p>
            <p className="text-[15px] text-[#524347] leading-relaxed">
              “When someone cuts into a Sarthak Bakery cake, we want them to feel embraced by home,
              warmth, and pure childlike joy.”
            </p>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => setCurrentPage('menu')}
                className="bg-[#b12500] hover:bg-[#da370d] text-white px-6 py-3 rounded-full font-bold text-[14px] shadow-sm transition-all"
              >
                Taste Our Creations 🍰
              </button>
              <button
                onClick={() => setCurrentPage('contact')}
                className="bg-white border border-[#ffd1b5] text-[#301401] px-6 py-3 rounded-full font-bold text-[14px] hover:bg-[#fff8f5] transition-all"
              >
                Visit Our Kitchen
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Packaging Promise */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl p-8 border border-[#ffd1b5] shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#ffd9e4] text-[#8c4963] flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[26px]">eco</span>
            </div>
            <h3 className="font-headline text-[22px] font-bold text-[#301401]">
              100% Recyclable Keepsake Packaging
            </h3>
            <p className="text-[14px] text-[#524347] mt-2 leading-relaxed">
              Our signature pink bakery boxes are made with FSC-certified recycled paperboard, printed
              with soy vegetable inks, and insulated with biodegradable ice packs to protect your
              confectionery in transit.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-[#ffd1b5] shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#ffdea8] text-[#765a23] flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[26px]">favorite</span>
            </div>
            <h3 className="font-headline text-[22px] font-bold text-[#301401]">
              Sweet Surprises For Community
            </h3>
            <p className="text-[14px] text-[#524347] mt-2 leading-relaxed">
              At the close of each day, unsold fresh sourdough loaves and flaky morning pastries are
              partnered with local community shelters, ensuring zero food waste and bringing warm smiles
              across the neighborhood.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
