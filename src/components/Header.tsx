import React, { useState } from 'react';
import { useBakery } from '../context/BakeryContext';
import { BAKERY_LOGO, RHEA_SHARMA_AVATAR } from '../data/mockData';
import { PageView } from '../types';

interface HeaderProps {
  onOpenWishlist: () => void;
  onOpenCustomCakesModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenWishlist }) => {
  const { currentPage, setCurrentPage, cartCount, grandTotal, wishlist } = useBakery();
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: PageView; badge?: string }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Menu', page: 'menu' },
    { label: 'Custom Cakes', page: 'custom-cakes' },
    { label: 'About Us', page: 'about-us' },
    { label: 'Track Order', page: 'account' },
    { label: 'Kitchen Live', page: 'kitchen-live', badge: '♨️' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setCurrentPage('menu');
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#fff8f5]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(74,40,16,0.06)] transition-all">
      {/* Top Banner */}
      <div className="bg-[#f8a5c2] text-[#763750] px-4 py-1.5 text-center font-bold text-[13px] flex items-center justify-center gap-2 tracking-wide">
        <span className="material-symbols-outlined text-[16px]">bakery_dining</span>
        <span>
          🧁 Fresh morning bakes out now! Free doorstep delivery on orders above $30 • Use code{' '}
          <strong className="underline decoration-wavy underline-offset-2">SWEETLOVE</strong> for 15% off ✨
        </span>
      </div>

      {/* Main Header Bar */}
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-3 group text-left transition-transform active:scale-98"
          >
            <img
              alt="Sarthak Bakery Logo"
              className="w-11 h-11 rounded-full object-cover shadow-[0_2px_8px_rgba(140,73,99,0.25)] ring-2 ring-[#f8a5c2]/60 group-hover:scale-105 transition-transform"
              src={BAKERY_LOGO}
            />
            <div className="flex flex-col">
              <span className="font-headline text-[20px] font-bold text-[#301401] group-hover:text-[#8c4963] transition-colors leading-tight">
                Sarthak Bakery
              </span>
              <span className="font-bold text-[11px] text-[#8c4963] tracking-wide flex items-center gap-1">
                Baked with Love
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#e84118]"></span>
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation Tabs */}
        <nav className="hidden xl:flex items-center gap-1.5 bg-[#fff1ea] px-3 py-1.5 rounded-full shadow-[0_2px_10px_rgba(74,40,16,0.04)]">
          {navItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => setCurrentPage(item.page)}
                className={`transition-all font-bold text-[14px] px-3.5 py-1.5 rounded-full flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#f8a5c2] text-[#763750] shadow-sm'
                    : 'text-[#524347] hover:text-[#301401] hover:bg-[#ffeadf]'
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="text-xs bg-[#e84118] text-white px-1.5 py-0.2 rounded-full font-extrabold text-[10px]">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Actions & Utilities */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Search */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden md:flex items-center bg-[#fff1ea] px-3.5 py-1.5 rounded-full shadow-[0_2px_8px_rgba(74,40,16,0.03)] focus-within:ring-2 focus-within:ring-[#f8a5c2] transition-all"
          >
            <span className="material-symbols-outlined text-[#8c4963] text-[20px] mr-1.5">search</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search cupcakes, artisan loaves..."
              className="bg-transparent border-none outline-none text-[14px] text-[#301401] placeholder:text-[#524347]/70 w-36 lg:w-48 xl:w-56"
            />
          </form>

          {/* Wishlist Button */}
          <button
            onClick={onOpenWishlist}
            aria-label="Wishlist"
            className="relative p-2 rounded-full text-[#8c4963] hover:bg-[#ffe3d3] transition-colors flex items-center justify-center active:scale-95"
            title="Saved Treats"
          >
            <span className="material-symbols-outlined text-[24px]">favorite</span>
            <span className="absolute top-0 right-0 bg-[#e84118] text-white rounded-full w-4 h-4 flex items-center justify-center font-bold text-[10px] shadow-sm">
              {wishlist.length}
            </span>
          </button>

          {/* Cart Pill */}
          <button
            onClick={() => setCurrentPage('cart')}
            className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full transition-all shadow-[0_2px_8px_rgba(74,40,16,0.05)] active:scale-95 ${
              currentPage === 'cart'
                ? 'bg-[#e84118] text-white'
                : 'bg-[#ffe3d3] hover:bg-[#ffdbc7] text-[#301401]'
            }`}
          >
            <span
              className={`material-symbols-outlined text-[22px] ${
                currentPage === 'cart' ? 'text-white' : 'text-[#e84118]'
              }`}
            >
              shopping_basket
            </span>
            <span className="font-bold text-[13px] whitespace-nowrap">
              {cartCount} {cartCount === 1 ? 'item' : 'items'} • ${grandTotal.toFixed(2)}
            </span>
          </button>

          {/* User Account / Baker Profile */}
          <div className="flex items-center pl-1">
            <button
              onClick={() => setCurrentPage('account')}
              className="flex items-center gap-1.5 p-1 rounded-full hover:bg-[#ffeadf] transition-all ring-2 ring-transparent hover:ring-[#f8a5c2]"
              title="Rhea's Confectionery Account & Tracking"
            >
              <img
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover shadow-sm ring-1 ring-[#8c4963]/30"
                src={RHEA_SHARMA_AVATAR}
              />
              <span className="material-symbols-outlined text-[#765a23] text-[20px] hidden sm:inline-block">
                stars
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-full text-[#301401] hover:bg-[#ffeadf] transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[26px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#fff8f5] border-t border-[#ffdbc7] px-6 py-4 shadow-xl flex flex-col gap-2">
          {/* Mobile Search */}
          <form onSubmit={handleSearchSubmit} className="mb-2">
            <div className="flex items-center bg-[#fff1ea] px-3.5 py-2 rounded-full">
              <span className="material-symbols-outlined text-[#8c4963] text-[20px] mr-2">search</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search bakery treats..."
                className="bg-transparent border-none outline-none text-[14px] text-[#301401] w-full"
              />
            </div>
          </form>

          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => {
                setCurrentPage(item.page);
                setMobileMenuOpen(false);
              }}
              className={`flex items-center justify-between px-4 py-2.5 rounded-2xl font-bold text-left transition-colors ${
                currentPage === item.page
                  ? 'bg-[#f8a5c2] text-[#763750]'
                  : 'text-[#301401] hover:bg-[#fff1ea]'
              }`}
            >
              <span>{item.label}</span>
              {item.badge && (
                <span className="bg-[#e84118] text-white px-2 py-0.5 rounded-full text-[11px]">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
