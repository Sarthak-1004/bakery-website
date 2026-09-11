import React from 'react';
import { useBakery } from '../context/BakeryContext';

export const OrderSuccessModal: React.FC = () => {
  const { showOrderSuccessModal, setShowOrderSuccessModal, lastPlacedOrder, setCurrentPage } =
    useBakery();

  if (!showOrderSuccessModal || !lastPlacedOrder) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-[#fff8f5] rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-[#ffd1b5] text-center relative animate-in zoom-in-95 duration-200">
        <div className="w-20 h-20 rounded-full bg-[#ffd9e4] text-[#8c4963] flex items-center justify-center text-4xl mx-auto mb-4 shadow-sm">
          🎂
        </div>

        <span className="text-[12px] font-bold text-[#b12500] uppercase tracking-wider bg-[#ffdad2] px-3 py-1 rounded-full">
          Warm Order Placed!
        </span>

        <h2 className="font-headline text-[26px] font-bold text-[#301401] mt-3">
          Thank You, Sweet Friend!
        </h2>

        <p className="text-[14px] text-[#524347] mt-1">
          Your order has been printed to the kitchen oven dockets.
        </p>

        <div className="bg-white rounded-2xl p-4 my-5 border border-[#ffd1b5] text-left space-y-2 text-[13px]">
          <div className="flex justify-between">
            <span className="text-[#524347]">Order Docket:</span>
            <strong className="text-[#301401]">#{lastPlacedOrder.orderNumber}</strong>
          </div>
          <div className="flex justify-between">
            <span className="text-[#524347]">Estimated Arrival:</span>
            <strong className="text-[#b12500]">{lastPlacedOrder.eta}</strong>
          </div>
          <div className="flex justify-between">
            <span className="text-[#524347]">Delivery To:</span>
            <span className="font-semibold text-[#301401] truncate max-w-[200px]">
              {lastPlacedOrder.recipient}
            </span>
          </div>
          <div className="flex justify-between pt-2 border-t border-[#ffd1b5]">
            <span className="text-[#524347]">Sweet Points Earned:</span>
            <span className="font-bold text-emerald-700">+98 Points 🌟</span>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <button
            onClick={() => {
              setShowOrderSuccessModal(false);
              setCurrentPage('account');
            }}
            className="w-full bg-[#b12500] hover:bg-[#da370d] text-white py-3.5 rounded-full font-bold text-[14px] shadow-md transition-all active:scale-98 flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">local_shipping</span>
            <span>Track My Sweet Box Live</span>
          </button>
          <button
            onClick={() => {
              setShowOrderSuccessModal(false);
              setCurrentPage('menu');
            }}
            className="w-full bg-white border border-[#ffd1b5] hover:bg-[#fff1ea] text-[#301401] py-3 rounded-full font-bold text-[14px] transition-colors"
          >
            Browse More Confections
          </button>
        </div>
      </div>
    </div>
  );
};
