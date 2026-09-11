import React from 'react';
import { useBakery } from '../context/BakeryContext';
import { BAKERY_ITEMS } from '../data/mockData';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({ isOpen, onClose }) => {
  const { wishlist, toggleWishlist, addToCart, setSelectedProductId, setCurrentPage } = useBakery();

  if (!isOpen) return null;

  const wishlistedProducts = BAKERY_ITEMS.filter((item) => wishlist.includes(item.id));

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in">
      <div
        className="w-full max-w-md bg-[#fff8f5] h-full shadow-2xl flex flex-col justify-between border-l border-[#ffdbc7] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-6 bg-[#fff1ea] border-b border-[#ffdbc7] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#8c4963] text-[24px]">favorite</span>
            <h3 className="font-headline text-[20px] font-bold text-[#301401]">
              Saved Sweet Treats ({wishlistedProducts.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#524347] hover:bg-[#ffe3d3] transition-colors"
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {wishlistedProducts.length === 0 ? (
            <div className="text-center py-16 flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-[#f8a5c2] text-[64px]">
                heart_broken
              </span>
              <h4 className="font-headline text-[18px] text-[#301401]">No saved bakes yet</h4>
              <p className="text-[14px] text-[#524347] max-w-xs">
                Explore our ovens and click the heart icon on any cake or pastry to save it for later!
              </p>
              <button
                onClick={() => {
                  onClose();
                  setCurrentPage('menu');
                }}
                className="mt-2 bg-[#8c4963] text-white px-6 py-2.5 rounded-full font-bold text-[14px] shadow-sm hover:bg-[#763750] transition-colors"
              >
                Explore Menu
              </button>
            </div>
          ) : (
            wishlistedProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-4 shadow-sm border border-[#ffeadf] flex items-center justify-between gap-3 group hover:shadow-md transition-all"
              >
                <div
                  className="flex items-center gap-3 cursor-pointer min-w-0"
                  onClick={() => {
                    setSelectedProductId(item.id);
                    setCurrentPage('product-detail');
                    onClose();
                  }}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-16 h-16 rounded-xl object-cover shrink-0 shadow-sm"
                  />
                  <div className="min-w-0">
                    <h4 className="font-bold text-[15px] text-[#301401] truncate group-hover:text-[#8c4963] transition-colors">
                      {item.name}
                    </h4>
                    <span className="text-[12px] text-[#765a23] font-bold">
                      {item.categoryLabel}
                    </span>
                    <div className="text-[#e84118] font-bold text-[15px] mt-0.5">
                      ${item.price.toFixed(2)}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 shrink-0">
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
                    className="bg-[#b12500] hover:bg-[#da370d] text-white px-3 py-1.5 rounded-full text-[12px] font-bold shadow-sm transition-transform active:scale-95 flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
                    <span>Add</span>
                  </button>
                  <button
                    onClick={() => toggleWishlist(item.id)}
                    className="text-[#847377] hover:text-[#ba1a1a] text-[11px] font-bold text-center hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {wishlistedProducts.length > 0 && (
          <div className="p-6 bg-[#fff1ea] border-t border-[#ffdbc7] flex flex-col gap-3">
            <button
              onClick={() => {
                wishlistedProducts.forEach((item) => {
                  addToCart({
                    productId: item.id,
                    name: item.name,
                    imageUrl: item.imageUrl,
                    basePrice: item.price,
                    unitPrice: item.price,
                    quantity: 1,
                    portionSubtitle: item.portionLabel,
                  });
                });
                onClose();
              }}
              className="w-full bg-[#8c4963] hover:bg-[#763750] text-white py-3 rounded-full font-bold text-[14px] transition-all shadow-md active:scale-98 flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
              <span>Add All to Sweet Basket</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
