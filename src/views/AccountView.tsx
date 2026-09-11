import React, { useState } from 'react';
import { useBakery } from '../context/BakeryContext';
import { RHEA_SHARMA_AVATAR, INITIAL_ORDER_HISTORY } from '../data/mockData';

export const AccountView: React.FC = () => {
  const {
    userPoints,
    redeemPoints,
    lastPlacedOrder,
    addToCart,
    setCurrentPage,
    showToast,
  } = useBakery();

  const [activeTab, setActiveTab] = useState<'tracking' | 'history' | 'rewards'>('tracking');

  // Tracking stages
  const trackingStages = [
    { title: 'Order Confirmed', time: '2:15 PM', done: true, icon: 'receipt_long' },
    { title: 'Sponges Baked in Deck Oven', time: '2:40 PM', done: true, icon: 'local_fire_department' },
    { title: 'Hand-Piping & Rose Frosting', time: '3:10 PM', current: true, icon: 'brush' },
    { title: 'Cold-Sealed & Dispatched', time: 'Est. 3:45 PM', done: false, icon: 'local_shipping' },
    { title: 'Warm Doorstep Arrival', time: 'Est. 4:15 PM', done: false, icon: 'home_pin' },
  ];

  const currentOrderNum = lastPlacedOrder ? lastPlacedOrder.orderNumber : 'SBK-92841';

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-6 pb-20 w-full">
      {/* Breadcrumb & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-2 text-[13px] text-[#524347] font-semibold">
          <button onClick={() => setCurrentPage('home')} className="hover:underline">
            Home
          </button>
          <span>/</span>
          <span className="text-[#8c4963]">My Account & Live Box Tracking</span>
        </div>

        <button
          onClick={() => {
            window.print();
            showToast('🖨️ Printing bakery receipt docket...');
          }}
          className="inline-flex items-center gap-2 bg-white border border-[#ffd1b5] text-[#301401] px-4 py-2 rounded-full font-bold text-[13px] hover:bg-[#fff1ea] shadow-xs self-start sm:self-auto transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">print</span>
          <span>Print Receipt Docket</span>
        </button>
      </div>

      {/* Customer Header Card */}
      <div className="bg-gradient-to-r from-[#ffe3d3] via-[#ffeadf] to-[#ffd9e4] rounded-3xl p-6 sm:p-8 mb-8 border border-[#ffd1b5] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <img
            src={RHEA_SHARMA_AVATAR}
            alt="Rhea Sharma"
            className="w-20 h-20 rounded-full object-cover shadow-md ring-4 ring-white"
          />
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="font-headline text-[24px] sm:text-[28px] font-bold text-[#301401]">
                Rhea Sharma
              </h1>
              <span className="bg-[#8c4963] text-white px-3 py-0.5 rounded-full font-bold text-[11px]">
                VIP Sugar Artisan 👑
              </span>
            </div>
            <p className="text-[14px] text-[#524347] mt-0.5">
              Member since Jan 2023 • 14 Sweet Deliveries Received
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="material-symbols-outlined text-[#765a23] text-[18px]">
                stars
              </span>
              <span className="font-bold text-[13px] text-[#765a23]">
                {userPoints} Sweet Reward Points
              </span>
            </div>
          </div>
        </div>

        {/* Quick Points Card */}
        <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-[#ffd1b5] flex flex-col items-center md:items-end text-center md:text-right min-w-[220px]">
          <span className="text-[11px] font-bold text-[#524347] uppercase tracking-wider">
            Bakery Loyalty Balance
          </span>
          <span className="font-headline text-[32px] font-bold text-[#b12500]">
            {userPoints} pts
          </span>
          <span className="text-[12px] text-emerald-700 font-bold">
            60 pts away from free Macaron Box!
          </span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-[#ffeadf] pb-3 mb-8">
        {[
          { id: 'tracking', label: 'Live Box Tracking 🚚', icon: 'local_shipping' },
          { id: 'history', label: 'Past Sweet Orders', icon: 'history' },
          { id: 'rewards', label: 'Baker’s Club Perks', icon: 'card_giftcard' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 font-bold text-[14px] px-5 py-2.5 rounded-full transition-all ${
              activeTab === tab.id
                ? 'bg-[#8c4963] text-white shadow-sm'
                : 'text-[#524347] hover:bg-[#fff1ea]'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* TAB 1: LIVE ORDER TRACKING */}
      {activeTab === 'tracking' && (
        <div className="space-y-8">
          {/* Active Order Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#ffd1b5] shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#ffd1b5]">
              <div>
                <span className="text-[12px] font-bold text-[#8c4963] uppercase tracking-wider">
                  Active Dispatch #{currentOrderNum}
                </span>
                <h2 className="font-headline text-[22px] sm:text-[26px] font-bold text-[#301401] mt-0.5">
                  Hand-Piping & Decorative Frosting
                </h2>
                <p className="text-[14px] text-[#524347] mt-1">
                  Placed today at 2:15 PM • Estimated Arrival:{' '}
                  <strong className="text-[#b12500]">Today, 4:15 PM (approx 28 mins)</strong>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="font-bold text-[13px] text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                  Kitchen Live In-Progress
                </span>
              </div>
            </div>

            {/* Stepper Timeline */}
            <div className="py-8">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
                {trackingStages.map((stage, idx) => (
                  <div key={idx} className="flex flex-col items-start md:items-center md:text-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                        stage.done
                          ? 'bg-emerald-600 text-white shadow-md'
                          : stage.current
                          ? 'bg-[#b12500] text-white ring-4 ring-[#ffdad2] shadow-lg animate-pulse'
                          : 'bg-[#fff1ea] text-[#524347] border border-[#ffd1b5]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[22px]">
                        {stage.done ? 'check' : stage.icon}
                      </span>
                    </div>

                    <div>
                      <h4
                        className={`font-bold text-[14px] ${
                          stage.current ? 'text-[#b12500]' : 'text-[#301401]'
                        }`}
                      >
                        {stage.title}
                      </h4>
                      <p className="text-[12px] text-[#524347] mt-0.5">{stage.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Courier & Delivery Details Row */}
            <div className="bg-[#fff8f5] rounded-2xl p-5 border border-[#ffd1b5] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#ffe3d3] flex items-center justify-center text-[#8c4963] font-bold text-lg">
                  🛵
                </div>
                <div>
                  <span className="text-[11px] text-[#524347] uppercase font-bold">
                    Specialist Cake Courier
                  </span>
                  <h4 className="font-bold text-[14px] text-[#301401]">
                    Sameer Verma
                  </h4>
                  <span className="text-[12px] text-[#8c4963] font-semibold">
                    Insulated Van #04 (Air-Suspension)
                  </span>
                </div>
              </div>

              <div>
                <span className="text-[11px] text-[#524347] uppercase font-bold">
                  Destination Address
                </span>
                <p className="font-semibold text-[13px] text-[#301401] mt-0.5">
                  402 Blossom Heights, 5th Main, Indiranagar, Bangalore
                </p>
              </div>

              <div className="flex items-center gap-3 sm:col-span-2 lg:col-span-1 justify-start lg:justify-end">
                <a
                  href="tel:+15558253728"
                  className="bg-[#8c4963] hover:bg-[#763750] text-white px-4 py-2.5 rounded-full font-bold text-[13px] flex items-center gap-2 shadow-xs transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  <span>Call Rider</span>
                </a>
                <button
                  onClick={() => showToast('Courier live GPS coordinates: 1.2km away approaching 5th Main!')}
                  className="bg-white border border-[#ffd1b5] hover:bg-[#fff1ea] text-[#301401] px-4 py-2.5 rounded-full font-bold text-[13px] flex items-center gap-2 transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">near_me</span>
                  <span>Live Pin</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: ORDER HISTORY */}
      {activeTab === 'history' && (
        <div className="space-y-4">
          {INITIAL_ORDER_HISTORY.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-3xl p-6 border border-[#ffeadf] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <img
                  src={order.imageUrl}
                  alt={order.title}
                  className="w-16 h-16 rounded-2xl object-cover shrink-0 shadow-xs border border-[#ffeadf]"
                />
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-headline text-[17px] font-bold text-[#301401]">
                      Order {order.orderNumber}
                    </h3>
                    <span className="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                      {order.status}
                    </span>
                    <span className="text-[12px] text-[#524347]">{order.date}</span>
                  </div>

                  <h4 className="font-bold text-[15px] text-[#301401] mt-1">{order.title}</h4>
                  <p className="text-[13px] text-[#524347] mt-0.5">{order.description}</p>
                </div>
              </div>

              <div className="flex items-center justify-between md:flex-col md:items-end gap-3 w-full md:w-auto pt-3 md:pt-0 border-t md:border-t-0 border-[#ffeadf]">
                <div className="text-left md:text-right">
                  <span className="text-[11px] text-[#524347] block">{order.paymentMethod}</span>
                  <span className="font-headline text-[20px] font-bold text-[#b12500]">
                    ${order.price.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      addToCart({
                        productId: 'cherry-blossom-cake',
                        name: order.title,
                        imageUrl: order.imageUrl,
                        basePrice: order.price,
                        unitPrice: order.price,
                        quantity: 1,
                        portionSubtitle: 'Reordered favorite',
                      });
                      setCurrentPage('cart');
                    }}
                    className="bg-[#ffe3d3] hover:bg-[#b12500] hover:text-white text-[#301401] px-4 py-2 rounded-full font-bold text-[12px] transition-all"
                  >
                    Reorder Box 🔁
                  </button>
                  <button
                    onClick={() => showToast(`Invoice ${order.orderNumber} downloaded to device.`)}
                    className="p-2 text-[#524347] hover:bg-[#fff1ea] rounded-full transition-colors"
                    title="Download Invoice"
                  >
                    <span className="material-symbols-outlined text-[20px]">download</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: BAKER'S CLUB REWARDS */}
      {activeTab === 'rewards' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Free Artisan Sourdough Loaf',
              pts: 150,
              desc: 'Freshly stone-baked sourdough loaf with fermented crust and cultured butter.',
              icon: 'breakfast_dining',
            },
            {
              title: 'Box of 6 Ruby Macarons',
              pts: 250,
              desc: 'Almond meringue shells with rose cream and raspberry ganache fillings.',
              icon: 'cookie',
            },
            {
              title: '$25 Off Celebration Cake',
              pts: 400,
              desc: 'Valid on any 1.0 kg or multi-tier bespoke celebration cake.',
              icon: 'cake',
            },
          ].map((perk, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-6 border border-[#ffd1b5] shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#ffd9e4] text-[#8c4963] flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[24px]">{perk.icon}</span>
                </div>
                <h4 className="font-headline text-[18px] font-bold text-[#301401]">
                  {perk.title}
                </h4>
                <p className="text-[13px] text-[#524347] mt-1.5 leading-relaxed">{perk.desc}</p>
              </div>

              <div className="pt-6 mt-4 border-t border-[#ffeadf] flex items-center justify-between">
                <span className="font-headline text-[16px] font-bold text-[#b12500]">
                  {perk.pts} Points
                </span>
                <button
                  onClick={() => redeemPoints(perk.pts)}
                  className="bg-[#8c4963] hover:bg-[#763750] text-white px-4 py-2 rounded-full font-bold text-[12px] transition-all shadow-xs"
                >
                  Redeem Reward
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
