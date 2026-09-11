import React, { useState } from 'react';
import { useBakery } from '../context/BakeryContext';

interface CustomCakeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomCakeModal: React.FC<CustomCakeModalProps> = ({ isOpen, onClose }) => {
  const { addToCart, showToast, setCurrentPage } = useBakery();

  const [tiers, setTiers] = useState<'1-tier' | '2-tier' | '3-tier'>('1-tier');
  const [flavor, setFlavor] = useState('Belgian Dark Chocolate Velvet');
  const [filling, setFilling] = useState('Wild Cherry Coulis & Swiss Buttercream');
  const [frostingTone, setFrostingTone] = useState('Pastel Rose Blush');
  const [dietary, setDietary] = useState<'classic' | 'eggless'>('eggless');
  const [inscription, setInscription] = useState('Happy Celebration! ❤️');
  const [themeDecor, setThemeDecor] = useState<string[]>([
    'Fresh Glazed Cherries',
    'Edible Gold Leaf Shimmer',
  ]);

  if (!isOpen) return null;

  const basePriceByTier = {
    '1-tier': 48.0,
    '2-tier': 92.0,
    '3-tier': 175.0,
  };

  const currentPrice = basePriceByTier[tiers] + themeDecor.length * 4.5;

  const handleToggleDecor = (decorName: string) => {
    setThemeDecor((prev) =>
      prev.includes(decorName) ? prev.filter((d) => d !== decorName) : [...prev, decorName]
    );
  };

  const handleAddCustomCake = () => {
    addToCart({
      productId: 'custom-cake-' + Date.now(),
      name: `Custom ${tiers.toUpperCase()} Celebration Cake`,
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDjdjM5r_RubAUu0hgweuk6aPgOtzoRtsf7wXB_u0oUii7e_IwX3Wgy9VHp6hNNuMG5qPQD_W0kLzqVNFs5CPB1-387kNVomzhaRjpfgGv-AQRF2EEWS-PZ1pnPhb3aqwAYa5tjg_PCRTkoL8Ae9FN6lRvg22MZUiojlXeQ6BGF8fSA2omQshRBG4c1vnYh1VZJnoAPzuGhz2v_6H3ePTm1BpiQ5CbPYYFyHV4FBLnSnt_wAmNeUVzQ',
      basePrice: currentPrice,
      unitPrice: currentPrice,
      quantity: 1,
      size: tiers,
      dietary,
      inscription: `“${inscription}”`,
      dietaryBadge: dietary === 'eggless' ? '100% Eggless' : 'Classic Recipe',
      portionSubtitle: `${flavor} • ${frostingTone} • ${filling}`,
    });
    showToast('🎂 Custom Celebration Cake added to your basket!');
    onClose();
    setCurrentPage('cart');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">
      <div className="bg-[#fff8f5] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#ffdbc7] relative my-8 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#524347] hover:bg-[#ffe3d3] transition-colors"
          aria-label="Close"
        >
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#ffd9e4] text-[#8c4963] flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-[26px]">draw</span>
          </div>
          <div>
            <span className="font-bold text-[12px] text-[#8c4963] uppercase tracking-wider">
              Bespoke Patisserie Atelier
            </span>
            <h2 className="font-headline text-[24px] font-bold text-[#301401]">
              Design Your Celebration Cake
            </h2>
          </div>
        </div>

        <div className="space-y-6 max-h-[65vh] overflow-y-auto pr-1 no-scrollbar">
          {/* Tiers */}
          <div>
            <label className="font-headline text-[16px] font-bold text-[#301401] block mb-2">
              1. Cake Architecture & Tier Height
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: '1-tier', label: '1-Tier (6")', serves: 'Serves 6–8', price: '$48' },
                { id: '2-tier', label: '2-Tier (8" + 6")', serves: 'Serves 16–22', price: '$92' },
                { id: '3-tier', label: '3-Tier Royal', serves: 'Serves 35–45', price: '$175' },
              ].map((tier) => (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => setTiers(tier.id as any)}
                  className={`p-3.5 rounded-2xl text-left border transition-all ${
                    tiers === tier.id
                      ? 'bg-[#ffeadf] border-[#8c4963] shadow-sm'
                      : 'bg-white border-[#ffd1b5] hover:bg-[#fff1ea]'
                  }`}
                >
                  <div className="font-bold text-[15px] text-[#301401]">{tier.label}</div>
                  <div className="text-[12px] text-[#524347] mt-0.5">{tier.serves}</div>
                  <div className="font-bold text-[14px] text-[#b12500] mt-1">{tier.price}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Sponge Flavor & Dietary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-headline text-[15px] font-bold text-[#301401] block mb-1.5">
                2. Sponge Cake Base
              </label>
              <select
                value={flavor}
                onChange={(e) => setFlavor(e.target.value)}
                className="w-full bg-white p-3 rounded-xl border border-[#ffd1b5] text-[#301401] font-semibold text-[14px] outline-none focus:ring-2 focus:ring-[#8c4963]"
              >
                <option value="Belgian Dark Chocolate Velvet">Belgian Dark Chocolate Velvet</option>
                <option value="Madagascar Vanilla Chiffon">Madagascar Vanilla Chiffon</option>
                <option value="Sicilian Pistachio Almond">Sicilian Pistachio Almond</option>
                <option value="Blush Strawberry Rose">Blush Strawberry Rose</option>
                <option value="Classic Red Velvet Cream Cheese">Classic Red Velvet Cream Cheese</option>
              </select>
            </div>

            <div>
              <label className="font-headline text-[15px] font-bold text-[#301401] block mb-1.5">
                3. Dietary Standard
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setDietary('eggless')}
                  className={`py-2.5 px-3 rounded-xl font-bold text-[13px] border transition-all ${
                    dietary === 'eggless'
                      ? 'bg-[#8c4963] text-white border-[#8c4963]'
                      : 'bg-white text-[#301401] border-[#ffd1b5]'
                  }`}
                >
                  100% Eggless 🌿
                </button>
                <button
                  type="button"
                  onClick={() => setDietary('classic')}
                  className={`py-2.5 px-3 rounded-xl font-bold text-[13px] border transition-all ${
                    dietary === 'classic'
                      ? 'bg-[#8c4963] text-white border-[#8c4963]'
                      : 'bg-white text-[#301401] border-[#ffd1b5]'
                  }`}
                >
                  Classic Butter 🥚
                </button>
              </div>
            </div>
          </div>

          {/* Frosting Color & Filling */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-headline text-[15px] font-bold text-[#301401] block mb-1.5">
                4. Handcrafted Frosting Palette
              </label>
              <select
                value={frostingTone}
                onChange={(e) => setFrostingTone(e.target.value)}
                className="w-full bg-white p-3 rounded-xl border border-[#ffd1b5] text-[#301401] font-semibold text-[14px] outline-none focus:ring-2 focus:ring-[#8c4963]"
              >
                <option value="Pastel Rose Blush">Pastel Rose Blush (Bakery Signature)</option>
                <option value="Classic Ivory Vanilla">Classic Ivory Vanilla</option>
                <option value="Wild Lavender & Cream">Wild Lavender & Cream</option>
                <option value="Warm Butter Glaze">Warm Butter Glaze</option>
                <option value="Dark Cocoa Mirror Glaze">Dark Cocoa Mirror Glaze</option>
              </select>
            </div>

            <div>
              <label className="font-headline text-[15px] font-bold text-[#301401] block mb-1.5">
                5. Center Layer Filling
              </label>
              <select
                value={filling}
                onChange={(e) => setFilling(e.target.value)}
                className="w-full bg-white p-3 rounded-xl border border-[#ffd1b5] text-[#301401] font-semibold text-[14px] outline-none focus:ring-2 focus:ring-[#8c4963]"
              >
                <option value="Wild Cherry Coulis & Swiss Buttercream">Wild Cherry Coulis & Swiss Buttercream</option>
                <option value="Hazelnut Praline Crunch">Hazelnut Praline Crunch</option>
                <option value="Fresh Raspberry Jam & White Ganache">Fresh Raspberry Jam & White Ganache</option>
                <option value="Salted Butter Caramel Truffle">Salted Butter Caramel Truffle</option>
              </select>
            </div>
          </div>

          {/* Inscription */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="font-headline text-[15px] font-bold text-[#301401]">
                6. Custom Calligraphy Plaque
              </label>
              <span className="text-[12px] text-[#8c4963] font-bold">
                {inscription.length} / 35 chars
              </span>
            </div>
            <input
              type="text"
              maxLength={35}
              value={inscription}
              onChange={(e) => setInscription(e.target.value)}
              placeholder="e.g. Happy 21st Anniversary Priya!"
              className="w-full bg-white p-3 rounded-xl border border-[#ffd1b5] text-[#301401] font-semibold text-[14px] outline-none focus:ring-2 focus:ring-[#8c4963]"
            />
          </div>

          {/* Theme Topping Decorations */}
          <div>
            <label className="font-headline text-[15px] font-bold text-[#301401] block mb-2">
              7. Artisan Hand-Piped Accents (+ $4.50 each)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                'Fresh Glazed Cherries',
                'Edible Gold Leaf Shimmer',
                'Buttercream Rosettes',
                'Pressed Flower Petals',
              ].map((decor) => {
                const isChecked = themeDecor.includes(decor);
                return (
                  <button
                    key={decor}
                    type="button"
                    onClick={() => handleToggleDecor(decor)}
                    className={`p-2.5 rounded-xl text-center text-[12px] font-bold border transition-all ${
                      isChecked
                        ? 'bg-[#ffd9e4] border-[#8c4963] text-[#70324b] shadow-xs'
                        : 'bg-white border-[#ffd1b5] text-[#524347] hover:bg-[#fff1ea]'
                    }`}
                  >
                    <span>{decor}</span>
                    {isChecked && <span className="ml-1 text-[#b12500]">✓</span>}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal Footer / Action Bar */}
        <div className="mt-8 pt-4 border-t border-[#ffd1b5] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-[12px] text-[#524347]">Estimated Total:</span>
            <span className="font-headline text-[24px] font-bold text-[#b12500]">
              ${currentPrice.toFixed(2)}
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-full border border-[#d6c1c6] text-[#524347] font-bold text-[14px] hover:bg-[#fff1ea] transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleAddCustomCake}
              className="flex-1 sm:flex-none bg-[#b12500] hover:bg-[#da370d] text-white px-7 py-3 rounded-full font-bold text-[15px] shadow-lg shadow-[#b12500]/25 transition-all transform active:scale-95 flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">cake</span>
              <span>Bake My Custom Order</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
