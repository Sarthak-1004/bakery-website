/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BakeryProvider, useBakery } from './context/BakeryContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { CustomCakeModal } from './components/CustomCakeModal';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { HomeView } from './views/HomeView';
import { MenuView } from './views/MenuView';
import { ProductDetailView } from './views/ProductDetailView';
import { CartView } from './views/CartView';
import { AccountView } from './views/AccountView';
import { KitchenLiveView } from './views/KitchenLiveView';
import { AboutUsView } from './views/AboutUsView';
import { ContactView } from './views/ContactView';

const BakeryAppContent: React.FC = () => {
  const { currentPage, toastMessage } = useBakery();
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCustomCakeModalOpen, setIsCustomCakeModalOpen] = useState(false);

  // If user navigates directly to 'custom-cakes', open modal
  React.useEffect(() => {
    if (currentPage === 'custom-cakes') {
      setIsCustomCakeModalOpen(true);
    }
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col bg-[#fff8f5] text-[#301401] font-body selection:bg-[#f8a5c2] selection:text-[#763750]">
      {/* Sticky Header */}
      <Header
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenCustomCakesModal={() => setIsCustomCakeModalOpen(true)}
      />

      {/* Main Page Area with top padding matching fixed header */}
      <main className="flex-1 pt-28">
        {currentPage === 'home' && (
          <HomeView onOpenCustomCakeModal={() => setIsCustomCakeModalOpen(true)} />
        )}
        {currentPage === 'menu' && <MenuView />}
        {currentPage === 'product-detail' && <ProductDetailView />}
        {currentPage === 'cart' && <CartView />}
        {currentPage === 'account' && <AccountView />}
        {currentPage === 'kitchen-live' && <KitchenLiveView />}
        {currentPage === 'custom-cakes' && (
          <HomeView onOpenCustomCakeModal={() => setIsCustomCakeModalOpen(true)} />
        )}
        {currentPage === 'about-us' && <AboutUsView />}
        {currentPage === 'contact' && <ContactView />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
      />

      {/* Custom Cake Builder Atelier Modal */}
      <CustomCakeModal
        isOpen={isCustomCakeModalOpen}
        onClose={() => setIsCustomCakeModalOpen(false)}
      />

      {/* Order Success Confetti Modal */}
      <OrderSuccessModal />

      {/* Sweet Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#301401] text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-2 font-bold text-[14px] border border-[#ffeadf]/20 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <BakeryProvider>
      <BakeryAppContent />
    </BakeryProvider>
  );
}
