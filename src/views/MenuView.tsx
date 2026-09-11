import React, { useState, useMemo } from 'react';
import { useBakery } from '../context/BakeryContext';
import { BAKERY_ITEMS } from '../data/mockData';
import { BakeryCategory } from '../types';

export const MenuView: React.FC = () => {
  const { setSelectedProductId, setCurrentPage, addToCart, toggleWishlist, isWishlisted } =
    useBakery();

  const [activeCategory, setActiveCategory] = useState<BakeryCategory | 'all'>('all');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'eggless' | 'gluten-free' | 'vegan'>('all');
  const [sortBy, setSortBy] = useState<'popular' | 'price-asc' | 'price-desc' | 'rating'>('popular');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: BakeryCategory | 'all'; label: string; icon: string }[] = [
    { id: 'all', label: 'All Confections', icon: 'bakery_dining' },
    { id: 'cakes', label: 'Celebration Cakes', icon: 'cake' },
    { id: 'cupcakes', label: 'Cupcakes & Treats', icon: 'cookie' },
    { id: 'pastries', label: 'Pastries & Tarts', icon: 'nutrition' },
    { id: 'breads', label: 'Artisan Breads', icon: 'breakfast_dining' },
    { id: 'cookies', label: 'Cookies & Macarons', icon: 'star' },
  ];

  const filteredItems = useMemo(() => {
    return BAKERY_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesDietary =
        dietaryFilter === 'all' ||
        (dietaryFilter === 'eggless' && item.dietaryTags.includes('eggless')) ||
        (dietaryFilter === 'gluten-free' && item.dietaryTags.includes('gluten-free')) ||
        (dietaryFilter === 'vegan' && item.dietaryTags.includes('vegan'));
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesDietary && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.badge ? 1 : 0) - (a.badge ? 1 : 0);
    });
  }, [activeCategory, dietaryFilter, sortBy, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-20 w-full">
      {/* Page Title & Breadcrumb */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-[13px] text-[#524347] mb-2 font-semibold">
          <button onClick={() => setCurrentPage('home')} className="hover:underline">
            Home
          </button>
          <span>/</span>
          <span className="text-[#8c4963]">Daily Bakehouse Menu</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="font-headline text-[36px] sm:text-[44px] font-bold text-[#301401] leading-tight">
              Our Oven-Fresh Menu
            </h1>
            <p className="text-[16px] text-[#524347] max-w-xl mt-1">
              Baked daily in small batches with unbleached grain flour, creamy farm dairy, and real fruit purées.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px] md:w-80">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8c4963] text-[20px]">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search cakes, tarts, sourdough..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-[#ffd1b5] text-[14px] text-[#301401] placeholder:text-[#524347]/60 outline-none focus:ring-2 focus:ring-[#8c4963] shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#524347] hover:text-[#301401]"
              >
                <span className="material-symbols-outlined text-[18px]">cancel</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-[14px] transition-all whitespace-nowrap shadow-xs ${
                isActive
                  ? 'bg-[#8c4963] text-white shadow-md'
                  : 'bg-[#fff1ea] text-[#301401] hover:bg-[#ffe3d3]'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Secondary Dietary Pills & Sorting Bar */}
      <div className="bg-[#fff1ea] p-4 rounded-2xl mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border border-[#ffeadf]">
        {/* Dietary toggles */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[13px] font-bold text-[#524347] mr-1">Dietary:</span>
          {[
            { id: 'all', label: 'All Items' },
            { id: 'eggless', label: '100% Eggless 🌿' },
            { id: 'gluten-free', label: 'Gluten-Free 🌾' },
            { id: 'vegan', label: 'Dairy-Free / Vegan 🌱' },
          ].map((d) => (
            <button
              key={d.id}
              onClick={() => setDietaryFilter(d.id as any)}
              className={`text-[12px] font-bold px-3 py-1.5 rounded-full transition-all ${
                dietaryFilter === d.id
                  ? 'bg-[#b12500] text-white shadow-xs'
                  : 'bg-white text-[#524347] hover:bg-[#fff8f5] border border-[#ffd1b5]'
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>

        {/* Sort selector */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[13px] font-bold text-[#524347]">Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-white border border-[#ffd1b5] text-[#301401] font-semibold text-[13px] px-3 py-1.5 rounded-full outline-none focus:ring-1 focus:ring-[#8c4963]"
          >
            <option value="popular">Bestseller & Chef Picks</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Rated ★</option>
          </select>
        </div>
      </div>

      {/* Product Results Counter */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-[14px] text-[#524347] font-semibold">
          Showing <strong className="text-[#301401]">{filteredItems.length}</strong> fresh confections
        </span>
        {activeCategory !== 'all' || dietaryFilter !== 'all' || searchQuery ? (
          <button
            onClick={() => {
              setActiveCategory('all');
              setDietaryFilter('all');
              setSearchQuery('');
            }}
            className="text-[12px] font-bold text-[#b12500] hover:underline flex items-center gap-1"
          >
            <span>Reset filters</span>
            <span className="material-symbols-outlined text-[14px]">refresh</span>
          </button>
        ) : null}
      </div>

      {/* Products Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-[#ffd1b5] p-8">
          <span className="material-symbols-outlined text-[#f8a5c2] text-[64px] mb-2">
            bakery_dining
          </span>
          <h3 className="font-headline text-[22px] font-bold text-[#301401]">
            No delicious bakes match your search
          </h3>
          <p className="text-[14px] text-[#524347] mt-1 mb-4">
            Try adjusting your dietary filter or search for "chocolate", "tart", or "croissant".
          </p>
          <button
            onClick={() => {
              setActiveCategory('all');
              setDietaryFilter('all');
              setSearchQuery('');
            }}
            className="bg-[#8c4963] text-white px-6 py-2 rounded-full font-bold text-[14px]"
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((product) => {
            const isFav = isWishlisted(product.id);
            return (
              <div
                key={product.id}
                className="group bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-[#ffeadf]"
              >
                <div>
                  <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-[#fff1ea] mb-3">
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
                      <div className="absolute top-2.5 left-2.5 bg-[#b12500] text-white px-2.5 py-0.5 rounded-full font-bold text-[10px] shadow-sm flex items-center gap-1">
                        <span
                          className="material-symbols-outlined text-[12px]"
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
                      className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full backdrop-blur-sm flex items-center justify-center transition-all shadow-sm ${
                        isFav
                          ? 'bg-[#8c4963] text-white'
                          : 'bg-white/90 text-[#8c4963] hover:bg-[#8c4963] hover:text-white'
                      }`}
                    >
                      <span
                        className="material-symbols-outlined text-[16px]"
                        style={{ fontVariationSettings: isFav ? "'FILL' 1" : "'FILL' 0" }}
                      >
                        favorite
                      </span>
                    </button>
                  </div>

                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-[11px] text-[#765a23] bg-[#ffdea8]/40 px-2 py-0.5 rounded">
                      {product.categoryLabel}
                    </span>
                    <div className="flex items-center gap-1 text-[#765a23]">
                      <span
                        className="material-symbols-outlined text-[14px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                      <span className="font-bold text-[12px] text-[#301401]">
                        {product.rating}
                      </span>
                    </div>
                  </div>

                  <h3
                    onClick={() => {
                      setSelectedProductId(product.id);
                      setCurrentPage('product-detail');
                    }}
                    className="font-headline text-[16px] font-bold text-[#301401] group-hover:text-[#8c4963] transition-colors cursor-pointer line-clamp-1 mt-1"
                  >
                    {product.name}
                  </h3>
                  <p className="text-[13px] text-[#524347] mt-1 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-[#ffeadf] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#524347] block font-semibold">
                      {product.portionLabel || 'Fresh batch'}
                    </span>
                    <span className="font-headline text-[19px] text-[#b12500] font-bold">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>

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
                    className="inline-flex items-center gap-1 bg-[#b12500] hover:bg-[#da370d] text-white px-3.5 py-2 rounded-full font-bold text-[12px] shadow-sm transition-transform active:scale-95"
                  >
                    <span>Add</span>
                    <span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
