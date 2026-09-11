import React, { useState } from 'react';
import { useBakery } from '../context/BakeryContext';
import { BAKERY_ITEMS } from '../data/mockData';

export const ProductDetailView: React.FC = () => {
  const {
    selectedProduct,
    setSelectedProductId,
    setCurrentPage,
    addToCart,
    toggleWishlist,
    isWishlisted,
    showToast,
  } = useBakery();

  // State for size / weight selection
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(1); // Default to 1.0 kg if available
  const [selectedDietary, setSelectedDietary] = useState<'eggless' | 'classic'>('eggless');
  const [inscription, setInscription] = useState('Happy 25th Rhea! ❤️');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['candles']);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'tasting' | 'ingredients' | 'storage'>('tasting');

  const addonsList = [
    { id: 'candles', name: 'Gold Sparkler Candles (Pack of 6)', price: 2.5 },
    { id: 'card', name: 'Handwritten Calligraphy Card', price: 3.0 },
    { id: 'ribbon', name: 'Pink Satin Ribbon & Luxe Gift Box', price: 4.0 },
  ];

  const currentSizeOption = selectedProduct.sizes?.[selectedSizeIndex] || {
    weight: selectedProduct.portionLabel || 'Standard Portion',
    serves: 'Serves 4–6',
    price: selectedProduct.price,
  };

  const addonsTotal = selectedAddons.reduce((sum, addId) => {
    const found = addonsList.find((a) => a.id === addId);
    return sum + (found ? found.price : 0);
  }, 0);

  const unitPrice = currentSizeOption.price + addonsTotal;
  const totalPrice = unitPrice * quantity;

  const handleToggleAddon = (addonId: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  const handleAddToCart = () => {
    const chosenAddonObjects = addonsList
      .filter((a) => selectedAddons.includes(a.id))
      .map((a) => ({ name: a.name, price: a.price }));

    addToCart({
      productId: selectedProduct.id,
      name: selectedProduct.name,
      imageUrl: selectedProduct.imageUrl,
      basePrice: currentSizeOption.price,
      unitPrice,
      quantity,
      size: currentSizeOption.weight,
      dietary: selectedDietary,
      inscription: inscription.trim() ? `“${inscription.trim()}”` : undefined,
      dietaryBadge: selectedDietary === 'eggless' ? 'Eggless Special' : 'Classic Recipe',
      portionSubtitle: chosenAddonObjects.length
        ? `+ ${chosenAddonObjects.map((a) => a.name).join(', ')}`
        : currentSizeOption.weight,
      addons: chosenAddonObjects,
    });

    setCurrentPage('cart');
  };

  const isFav = isWishlisted(selectedProduct.id);

  // Recommendations: Other products in the catalog
  const recommendations = BAKERY_ITEMS.filter((item) => item.id !== selectedProduct.id).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-6 pb-20 w-full">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-[13px] text-[#524347] mb-6 font-semibold">
        <button onClick={() => setCurrentPage('home')} className="hover:underline">
          Home
        </button>
        <span>/</span>
        <button onClick={() => setCurrentPage('menu')} className="hover:underline">
          {selectedProduct.categoryLabel}
        </button>
        <span>/</span>
        <span className="text-[#8c4963] truncate">{selectedProduct.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Left Column: Image Gallery & Badges */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <div className="relative w-full aspect-4/3 sm:aspect-square rounded-3xl overflow-hidden bg-[#fff1ea] shadow-md border border-[#ffdbc7]">
            <img
              src={selectedProduct.imageUrl}
              alt={selectedProduct.name}
              className="w-full h-full object-cover"
            />
            {selectedProduct.badge && (
              <div className="absolute top-4 left-4 bg-[#b12500] text-white px-3.5 py-1 rounded-full font-bold text-[12px] shadow-sm flex items-center gap-1.5">
                <span
                  className="material-symbols-outlined text-[16px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span>{selectedProduct.badge}</span>
              </div>
            )}
            <button
              onClick={() => toggleWishlist(selectedProduct.id)}
              aria-label="Wishlist toggle"
              className={`absolute top-4 right-4 w-11 h-11 rounded-full backdrop-blur-md flex items-center justify-center transition-all shadow-md active:scale-90 ${
                isFav
                  ? 'bg-[#8c4963] text-white'
                  : 'bg-white/90 text-[#8c4963] hover:bg-[#8c4963] hover:text-white'
              }`}
            >
              <span
                className="material-symbols-outlined text-[24px]"
                style={{ fontVariationSettings: isFav ? "'FILL' 1" : "'FILL' 0" }}
              >
                favorite
              </span>
            </button>

            {/* Freshly Baked Stamp */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-xl shadow-sm border border-[#ffd1b5] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[12px] font-bold text-[#301401]">
                Freshly frosted this morning
              </span>
            </div>
          </div>

          {/* Quick Assurance Badges */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-[#fff1ea] p-3 rounded-2xl text-center border border-[#ffeadf]">
              <span className="material-symbols-outlined text-[#8c4963] text-[22px] block mb-1">
                verified
              </span>
              <span className="font-bold text-[12px] text-[#301401] block">Real Butter</span>
              <span className="text-[10px] text-[#524347]">Zero Margarine</span>
            </div>
            <div className="bg-[#fff1ea] p-3 rounded-2xl text-center border border-[#ffeadf]">
              <span className="material-symbols-outlined text-[#8c4963] text-[22px] block mb-1">
                schedule
              </span>
              <span className="font-bold text-[12px] text-[#301401] block">Chilled Dispatch</span>
              <span className="text-[10px] text-[#524347]">Cold-Chain Box</span>
            </div>
            <div className="bg-[#fff1ea] p-3 rounded-2xl text-center border border-[#ffeadf]">
              <span className="material-symbols-outlined text-[#8c4963] text-[22px] block mb-1">
                cake
              </span>
              <span className="font-bold text-[12px] text-[#301401] block">Piping Included</span>
              <span className="text-[10px] text-[#524347]">Free Plaque Msg</span>
            </div>
          </div>
        </div>

        {/* Right Column: Customization & Add to Cart Controls */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          {/* Title & Reviews */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-[#ffd9e4] text-[#70324b] px-3 py-0.5 rounded-full font-bold text-[11px] uppercase tracking-wider">
                {selectedProduct.categoryLabel}
              </span>
              <span className="text-[12px] text-[#524347]">•</span>
              <span className="text-[12px] text-emerald-700 font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px]">check_circle</span> In Stock
                Daily
              </span>
            </div>

            <h1 className="font-headline text-[30px] sm:text-[36px] font-bold text-[#301401] leading-tight">
              {selectedProduct.name}
            </h1>

            {/* Ratings & Prep Time */}
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-1 text-[#765a23]">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
                <span className="font-bold text-[14px] text-[#301401] ml-1">
                  {selectedProduct.rating}
                </span>
                <span className="text-[13px] text-[#524347]">
                  ({selectedProduct.reviewCount} reviews)
                </span>
              </div>
              <span className="text-[#524347]">•</span>
              <div className="text-[13px] text-[#524347] flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">alarm</span>
                <span>Ready in {selectedProduct.preparationTime || '45 mins'}</span>
              </div>
            </div>

            {/* Pricing */}
            <div className="flex items-baseline gap-3 mt-4">
              <span className="font-headline text-[34px] font-bold text-[#b12500]">
                ${unitPrice.toFixed(2)}
              </span>
              <span className="text-[14px] text-[#524347] line-through">
                ${(unitPrice * 1.15).toFixed(2)}
              </span>
              <span className="text-[12px] font-bold text-[#763750] bg-[#f8a5c2]/50 px-2 py-0.5 rounded-full">
                15% OFF with code SWEETLOVE
              </span>
            </div>
            <p className="text-[15px] text-[#524347] mt-3 leading-relaxed">
              {selectedProduct.description}
            </p>
          </div>

          {/* 1. Size / Weight Selection */}
          {selectedProduct.sizes && selectedProduct.sizes.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="font-headline text-[15px] font-bold text-[#301401]">
                  Select Weight / Portion
                </label>
                <span className="text-[12px] text-[#8c4963] font-bold">
                  {currentSizeOption.serves}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {selectedProduct.sizes.map((s, idx) => (
                  <button
                    key={s.weight}
                    type="button"
                    onClick={() => setSelectedSizeIndex(idx)}
                    className={`p-3 rounded-2xl text-left border transition-all ${
                      selectedSizeIndex === idx
                        ? 'bg-[#ffeadf] border-[#8c4963] shadow-sm'
                        : 'bg-white border-[#ffd1b5] hover:bg-[#fff1ea]'
                    }`}
                  >
                    <div className="font-bold text-[14px] text-[#301401]">{s.weight}</div>
                    <div className="text-[11px] text-[#524347]">{s.serves}</div>
                    <div className="font-bold text-[13px] text-[#b12500] mt-1">
                      ${s.price.toFixed(2)}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 2. Dietary Choice */}
          <div>
            <label className="font-headline text-[15px] font-bold text-[#301401] block mb-2">
              Dietary Preference
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setSelectedDietary('eggless')}
                className={`py-3 px-4 rounded-2xl font-bold text-[13px] border transition-all flex items-center justify-center gap-2 ${
                  selectedDietary === 'eggless'
                    ? 'bg-[#8c4963] text-white border-[#8c4963] shadow-sm'
                    : 'bg-white text-[#301401] border-[#ffd1b5]'
                }`}
              >
                <span>🌿 100% Eggless Special</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedDietary('classic')}
                className={`py-3 px-4 rounded-2xl font-bold text-[13px] border transition-all flex items-center justify-center gap-2 ${
                  selectedDietary === 'classic'
                    ? 'bg-[#8c4963] text-white border-[#8c4963] shadow-sm'
                    : 'bg-white text-[#301401] border-[#ffd1b5]'
                }`}
              >
                <span>🥚 Classic Pasture Eggs</span>
              </button>
            </div>
          </div>

          {/* 3. Personalized Inscription on Plaque */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="font-headline text-[15px] font-bold text-[#301401]">
                Piped Chocolate Plaque Message
              </label>
              <span className="text-[11px] text-[#8c4963] font-bold">
                {inscription.length} / 32 characters
              </span>
            </div>
            <div className="relative">
              <input
                type="text"
                maxLength={32}
                value={inscription}
                onChange={(e) => setInscription(e.target.value)}
                placeholder="e.g. Happy 25th Birthday Rhea! ❤️"
                className="w-full bg-white px-4 py-3 rounded-xl border border-[#ffd1b5] text-[14px] text-[#301401] outline-none focus:ring-2 focus:ring-[#8c4963] shadow-xs"
              />
              <span className="material-symbols-outlined absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8c4963] text-[20px]">
                draw
              </span>
            </div>
          </div>

          {/* 4. Sweet Celebration Add-ons */}
          <div>
            <label className="font-headline text-[15px] font-bold text-[#301401] block mb-2">
              Celebration Add-ons
            </label>
            <div className="flex flex-col gap-2">
              {addonsList.map((addon) => {
                const isChecked = selectedAddons.includes(addon.id);
                return (
                  <label
                    key={addon.id}
                    onClick={() => handleToggleAddon(addon.id)}
                    className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                      isChecked
                        ? 'bg-[#fff1ea] border-[#8c4963]'
                        : 'bg-white border-[#ffd1b5] hover:bg-[#fff8f5]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        className="w-4 h-4 text-[#8c4963] rounded accent-[#8c4963]"
                      />
                      <span className="text-[13px] font-bold text-[#301401]">{addon.name}</span>
                    </div>
                    <span className="text-[13px] font-bold text-[#b12500]">
                      +${addon.price.toFixed(2)}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* 5. Quantity Stepper & Add To Cart */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
            {/* Stepper */}
            <div className="flex items-center bg-white border border-[#ffd1b5] rounded-full p-1.5 shadow-xs w-full sm:w-auto justify-between sm:justify-start">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-10 h-10 rounded-full flex items-center justify-center text-[#301401] hover:bg-[#fff1ea] transition-colors"
                aria-label="Decrease quantity"
              >
                <span className="material-symbols-outlined text-[20px]">remove</span>
              </button>
              <span className="font-headline text-[18px] font-bold text-[#301401] px-5">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="w-10 h-10 rounded-full flex items-center justify-center text-[#301401] hover:bg-[#fff1ea] transition-colors"
                aria-label="Increase quantity"
              >
                <span className="material-symbols-outlined text-[20px]">add</span>
              </button>
            </div>

            {/* Add to Box Button */}
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex-1 w-full bg-[#b12500] hover:bg-[#da370d] text-white py-4 px-8 rounded-full font-bold text-[16px] shadow-lg shadow-[#b12500]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0.5 flex items-center justify-center gap-3"
            >
              <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
              <span>Add to Sweet Box • ${totalPrice.toFixed(2)}</span>
            </button>
          </div>

          {/* Accordion Tabs */}
          <div className="mt-4 border-t border-[#ffd1b5] pt-6">
            <div className="flex items-center gap-4 border-b border-[#ffeadf] pb-2">
              {[
                { id: 'tasting', label: 'Tasting Notes' },
                { id: 'ingredients', label: 'Ingredients & Nutrition' },
                { id: 'storage', label: 'Storage & Freshness' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`font-bold text-[14px] pb-2 border-b-2 transition-all ${
                    activeTab === tab.id
                      ? 'border-[#8c4963] text-[#8c4963]'
                      : 'border-transparent text-[#524347] hover:text-[#301401]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="pt-4 text-[14px] text-[#524347] leading-relaxed">
              {activeTab === 'tasting' && (
                <div>
                  <p>
                    {selectedProduct.tastingNotes ||
                      'Soft sponge layered with silky fruit reduction, whipped farm cream, and delicate natural floral essences.'}
                  </p>
                  <div className="mt-3 bg-[#fff1ea] p-3.5 rounded-2xl flex items-center gap-3">
                    <span className="text-2xl">🍒</span>
                    <div>
                      <span className="font-bold text-[13px] text-[#301401] block">
                        Chef’s Flavor Profile
                      </span>
                      <span className="text-[12px] text-[#524347]">
                        Light sweetness, floral acidity, velvety finish that melts effortlessly.
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'ingredients' && (
                <div>
                  <p className="font-semibold text-[#301401] mb-1">Pure Ingredients:</p>
                  <p>
                    {selectedProduct.ingredients?.join(', ') ||
                      'Organic unbleached wheat flour, cultured creamery butter, cane sugar, pure vanilla bean paste, fruit purée.'}
                  </p>
                  <p className="mt-2 text-[12px] text-[#765a23]">
                    ⚡ Nutrition approx: {selectedProduct.calories || '380 kcal'} per serving
                  </p>
                </div>
              )}

              {activeTab === 'storage' && (
                <div className="space-y-2">
                  <p>• Keep refrigerated at 2°C – 5°C in its original bakery packaging.</p>
                  <p>• For ideal flavor and velvety softness, bring to room temperature 15 minutes before cutting.</p>
                  <p>• Best consumed within 72 hours of delivery.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* You May Also Crave Section */}
      <section className="mt-20 pt-10 border-t border-[#ffd1b5]">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-[12px] text-[#8c4963] font-bold uppercase tracking-wider">
              Pairing Perfection
            </span>
            <h3 className="font-headline text-[26px] font-bold text-[#301401]">
              You May Also Crave
            </h3>
          </div>
          <button
            onClick={() => setCurrentPage('menu')}
            className="text-[#b12500] font-bold text-[14px] hover:underline"
          >
            Explore all bakes →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md border border-[#ffeadf] flex items-center gap-4 group transition-all"
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-20 h-20 rounded-xl object-cover shrink-0 cursor-pointer group-hover:scale-105 transition-transform"
                onClick={() => {
                  setSelectedProductId(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
              <div className="flex-1 min-w-0">
                <span className="text-[11px] font-bold text-[#765a23]">{item.categoryLabel}</span>
                <h4
                  onClick={() => {
                    setSelectedProductId(item.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="font-bold text-[15px] text-[#301401] truncate group-hover:text-[#8c4963] cursor-pointer"
                >
                  {item.name}
                </h4>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-bold text-[15px] text-[#b12500]">
                    ${item.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => {
                      addToCart({
                        productId: item.id,
                        name: item.name,
                        imageUrl: item.imageUrl,
                        basePrice: item.price,
                        unitPrice: item.price,
                        quantity: 1,
                        portionSubtitle: item.portionLabel,
                      });
                    }}
                    className="bg-[#ffe3d3] hover:bg-[#b12500] hover:text-white text-[#301401] p-1.5 rounded-full transition-colors"
                    title="Add to box"
                  >
                    <span className="material-symbols-outlined text-[18px]">add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
