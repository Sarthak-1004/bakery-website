import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { useBakery } from '../context/BakeryContext';

export const CartView: React.FC = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartCount,
    cartSubtotal,
    promoCode,
    setPromoCode,
    promoApplied,
    applyPromo,
    removePromo,
    discountAmount,
    packagingFee,
    grandTotal,
    setCurrentPage,
    setSelectedProductId,
    setLastPlacedOrder,
    setShowOrderSuccessModal,
    showToast,
  } = useBakery();

  const [inputCode, setInputCode] = useState(promoCode);
  const [deliverySlot, setDeliverySlot] = useState('Today, 3:00 PM – 5:00 PM (Fresh Batch)');
  const [deliveryType, setDeliveryType] = useState<'delivery' | 'pickup'>('delivery');
  const [orderNotes, setOrderNotes] = useState('Please ring bell twice and leave at concierge with care.');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sweet quick upsell treats
  const upsellTreats = [
    {
      id: 'almond-croissant',
      name: 'Flaky Almond Croissant',
      price: 4.5,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDYfU5c6c7BwL2-M5e839eYf6mC5yWvL3s8yL9jX2K3_T5w6y8u4c3a2m1k0j9i8h7g6f5e4d3c2b1a',
      tag: 'Fresh Warm',
    },
    {
      id: 'dark-choco-cookie',
      name: 'Sea Salt Dark Fudge Cookie',
      price: 3.8,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB21T4XmO7r-Q5b9V8c3eYf6mC5yWvL3s8yL9jX2K3_T5w6y8u4c3a2m1k0j9i8h7g6f5e4d3c2b1a',
      tag: 'Warm Center',
    },
  ];

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    applyPromo(inputCode);
  };

  const handlePlaceOrder = () => {
    if (cart.length === 0) return;
    setIsSubmitting(true);

    setTimeout(() => {
      // Trigger confetti
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#f8a5c2', '#e84118', '#ffd9e4', '#ffd1b5'],
        });
      } catch (err) {
        console.error(err);
      }

      const generatedOrderNum = 'SBK-' + Math.floor(100000 + Math.random() * 900000);
      setLastPlacedOrder({
        orderNumber: generatedOrderNum,
        total: grandTotal,
        eta: deliveryType === 'delivery' ? '35-45 minutes' : 'Ready for pickup in 20 mins',
        recipient: 'Rhea Sharma • 402 Blossom Heights',
        itemsSummary: `${cartCount} items (${cart[0]?.name}${cart.length > 1 ? ` + ${cart.length - 1} more` : ''})`,
      });

      setShowOrderSuccessModal(true);
      clearCart();
      setIsSubmitting(false);
      showToast('🎉 Order confirmed! Kitchen docket printed!');
      setCurrentPage('account');
    }, 900);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-6 pb-20 w-full">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-[13px] text-[#524347] mb-6 font-semibold">
        <button onClick={() => setCurrentPage('home')} className="hover:underline">
          Home
        </button>
        <span>/</span>
        <button onClick={() => setCurrentPage('menu')} className="hover:underline">
          Menu
        </button>
        <span>/</span>
        <span className="text-[#8c4963]">Your Sweet Box</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="font-headline text-[32px] sm:text-[40px] font-bold text-[#301401]">
              Your Sweet Box
            </h1>
            <span className="bg-[#ffd9e4] text-[#70324b] px-3.5 py-1 rounded-full font-bold text-[14px]">
              {cartCount} {cartCount === 1 ? 'item' : 'items'}
            </span>
          </div>
          <p className="text-[15px] text-[#524347] mt-1">
            Carefully packaged in our insulated, eco-friendly pink keepsake bakery box.
          </p>
        </div>

        {cart.length > 0 && (
          <button
            onClick={clearCart}
            className="text-[13px] font-bold text-[#ba1a1a] hover:underline self-start md:self-auto flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[16px]">delete_sweep</span>
            <span>Empty Box</span>
          </button>
        )}
      </div>

      {cart.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-[#ffd1b5] max-w-xl mx-auto my-12 shadow-sm">
          <div className="w-20 h-20 rounded-full bg-[#ffe3d3] flex items-center justify-center text-[#8c4963] mx-auto mb-4">
            <span className="material-symbols-outlined text-[42px]">shopping_basket</span>
          </div>
          <h2 className="font-headline text-[24px] font-bold text-[#301401]">
            Your sweet box is currently empty!
          </h2>
          <p className="text-[15px] text-[#524347] mt-2 mb-6">
            Warm vanilla cakes, berry macarons, and morning pastries are fresh out of the ovens.
          </p>
          <button
            onClick={() => setCurrentPage('menu')}
            className="bg-[#b12500] hover:bg-[#da370d] text-white px-8 py-3.5 rounded-full font-bold text-[15px] shadow-md transition-all active:scale-95"
          >
            Explore Bakehouse Menu 🍰
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Cart Items List & Quick Upsells */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl p-5 shadow-sm border border-[#ffeadf] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group hover:shadow-md transition-all"
                >
                  {/* Thumbnail & Meta */}
                  <div className="flex items-start sm:items-center gap-4 min-w-0">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      onClick={() => {
                        setSelectedProductId(item.productId);
                        setCurrentPage('product-detail');
                      }}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover shrink-0 cursor-pointer shadow-xs"
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3
                          onClick={() => {
                            setSelectedProductId(item.productId);
                            setCurrentPage('product-detail');
                          }}
                          className="font-headline text-[17px] font-bold text-[#301401] hover:text-[#8c4963] cursor-pointer transition-colors leading-snug"
                        >
                          {item.name}
                        </h3>
                        {item.dietaryBadge && (
                          <span className="text-[10px] font-bold bg-[#ffd9e4] text-[#70324b] px-2 py-0.5 rounded-full">
                            {item.dietaryBadge}
                          </span>
                        )}
                      </div>

                      {item.size && (
                        <p className="text-[12px] text-[#765a23] font-semibold mt-0.5">
                          Size / Weight: {item.size}
                        </p>
                      )}

                      {item.portionSubtitle && (
                        <p className="text-[12px] text-[#524347] line-clamp-1 mt-0.5">
                          {item.portionSubtitle}
                        </p>
                      )}

                      {item.inscription && (
                        <p className="text-[12px] text-[#8c4963] font-bold italic mt-1 bg-[#fff1ea] px-2.5 py-1 rounded-md inline-block">
                          Message: {item.inscription}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Pricing & Stepper */}
                  <div className="flex items-center justify-between sm:justify-end gap-5 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-[#ffeadf]">
                    {/* Stepper */}
                    <div className="flex items-center bg-[#fff1ea] rounded-full p-1 border border-[#ffd1b5]">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-7 h-7 rounded-full flex items-center justify-center text-[#301401] hover:bg-white transition-colors"
                        aria-label="Decrease"
                      >
                        <span className="material-symbols-outlined text-[16px]">remove</span>
                      </button>
                      <span className="font-bold text-[14px] text-[#301401] px-3">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-7 h-7 rounded-full flex items-center justify-center text-[#301401] hover:bg-white transition-colors"
                        aria-label="Increase"
                      >
                        <span className="material-symbols-outlined text-[16px]">add</span>
                      </button>
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="font-headline text-[18px] font-bold text-[#b12500]">
                        ${(item.unitPrice * item.quantity).toFixed(2)}
                      </span>
                      {item.quantity > 1 && (
                        <span className="text-[11px] text-[#524347]">
                          (${item.unitPrice.toFixed(2)} ea)
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-[#847377] hover:text-[#ba1a1a] p-1.5 rounded-full hover:bg-[#fff1ea] transition-colors"
                      title="Remove item"
                    >
                      <span className="material-symbols-outlined text-[20px]">delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Fresh Out of the Oven Upsell Card */}
            <div className="bg-[#fff1ea] rounded-3xl p-6 border border-[#ffd1b5]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🥐</span>
                  <h4 className="font-headline text-[16px] font-bold text-[#301401]">
                    Fresh Out of the Oven (Add for Quick Pair)
                  </h4>
                </div>
                <span className="text-[12px] font-bold text-[#8c4963]">Morning Batch</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {upsellTreats.map((t) => (
                  <div
                    key={t.id}
                    className="bg-white p-3 rounded-2xl border border-[#ffeadf] flex items-center justify-between gap-3 shadow-xs"
                  >
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold text-[#b12500] uppercase bg-[#ffdad2] px-1.5 py-0.2 rounded">
                        {t.tag}
                      </span>
                      <h5 className="font-bold text-[13px] text-[#301401] truncate mt-1">
                        {t.name}
                      </h5>
                      <span className="text-[13px] font-bold text-[#b12500]">
                        +${t.price.toFixed(2)}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        useBakery().addToCart({
                          productId: t.id,
                          name: t.name,
                          imageUrl:
                            'https://lh3.googleusercontent.com/aida-public/AB6AXuBL9Q4j-0gNrq7h8r1W_Y3X9c0m8b2V7xZ3w4y1U8s7t6r5q4p3o2n1m0k9j8i7h6g5f4e3d2c1b0a',
                          basePrice: t.price,
                          unitPrice: t.price,
                          quantity: 1,
                          portionSubtitle: 'Oven warm add-on',
                        });
                      }}
                      className="bg-[#ffe3d3] hover:bg-[#b12500] hover:text-white text-[#301401] px-3 py-1.5 rounded-full font-bold text-[12px] transition-all shrink-0"
                    >
                      + Add
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Instructions / Notes */}
            <div className="bg-white rounded-3xl p-5 border border-[#ffeadf] shadow-xs">
              <label className="font-headline text-[15px] font-bold text-[#301401] block mb-2">
                Special Delivery Instructions / Cake Note
              </label>
              <textarea
                rows={2}
                value={orderNotes}
                onChange={(e) => setOrderNotes(e.target.value)}
                placeholder="Gate code, landmark, or specific candle color instructions..."
                className="w-full bg-[#fff8f5] p-3 rounded-xl border border-[#ffd1b5] text-[13px] text-[#301401] outline-none focus:ring-2 focus:ring-[#8c4963] resize-none"
              />
            </div>
          </div>

          {/* Right Column: Order Summary & Checkout Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-[#ffdbc7] space-y-6 sticky top-28">
            <h2 className="font-headline text-[22px] font-bold text-[#301401] pb-3 border-b border-[#ffd1b5]">
              Order Summary
            </h2>

            {/* Fulfillment Type Toggle (Delivery vs Store Pickup) */}
            <div className="grid grid-cols-2 gap-2 bg-[#fff1ea] p-1 rounded-2xl">
              <button
                type="button"
                onClick={() => setDeliveryType('delivery')}
                className={`py-2 px-3 rounded-xl font-bold text-[13px] transition-all flex items-center justify-center gap-1.5 ${
                  deliveryType === 'delivery'
                    ? 'bg-white text-[#301401] shadow-xs'
                    : 'text-[#524347] hover:text-[#301401]'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">local_shipping</span>
                <span>Doorstep Delivery</span>
              </button>
              <button
                type="button"
                onClick={() => setDeliveryType('pickup')}
                className={`py-2 px-3 rounded-xl font-bold text-[13px] transition-all flex items-center justify-center gap-1.5 ${
                  deliveryType === 'pickup'
                    ? 'bg-white text-[#301401] shadow-xs'
                    : 'text-[#524347] hover:text-[#301401]'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">storefront</span>
                <span>Bakery Pickup</span>
              </button>
            </div>

            {/* Delivery Slot */}
            <div>
              <label className="font-bold text-[13px] text-[#301401] block mb-1.5">
                {deliveryType === 'delivery' ? 'Select Delivery Window' : 'Pickup Ready Time'}
              </label>
              <select
                value={deliverySlot}
                onChange={(e) => setDeliverySlot(e.target.value)}
                className="w-full bg-[#fff8f5] p-3 rounded-xl border border-[#ffd1b5] text-[13px] font-semibold text-[#301401] outline-none focus:ring-2 focus:ring-[#8c4963]"
              >
                <option value="Today, 3:00 PM – 5:00 PM (Fresh Batch)">Today, 3:00 PM – 5:00 PM (Fresh Batch)</option>
                <option value="Today, 6:00 PM – 8:00 PM (Evening Treats)">Today, 6:00 PM – 8:00 PM (Evening Treats)</option>
                <option value="Tomorrow, 9:00 AM – 11:00 AM (Dawn Warm)">Tomorrow, 9:00 AM – 11:00 AM (Dawn Warm)</option>
              </select>
            </div>

            {/* Recipient Address */}
            <div className="bg-[#fff8f5] p-3.5 rounded-2xl border border-[#ffd1b5] text-[13px]">
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-[#301401]">
                  {deliveryType === 'delivery' ? 'Delivering to:' : 'Pickup Location:'}
                </span>
                <button
                  onClick={() => showToast('Address confirmed for delivery')}
                  className="text-[11px] font-bold text-[#8c4963] hover:underline"
                >
                  Edit
                </button>
              </div>
              <p className="text-[#524347] font-semibold">
                {deliveryType === 'delivery'
                  ? 'Rhea Sharma • 402 Blossom Heights, Indiranagar, Bangalore'
                  : 'Sarthak Bakery, 124 Sweet Blossom Lane, Confectionery Row'}
              </p>
            </div>

            {/* Promo Code Input */}
            <div>
              <label className="font-bold text-[13px] text-[#301401] block mb-1.5">
                Bakery Coupon Code
              </label>
              {promoApplied ? (
                <div className="flex items-center justify-between bg-[#ffe3d3] p-3 rounded-xl border border-[#ffd1b5]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#8c4963] text-[20px]">
                      local_offer
                    </span>
                    <div>
                      <span className="font-bold text-[13px] text-[#8c4963]">{promoCode}</span>
                      <span className="text-[11px] text-[#524347] block">15% sweet love discount</span>
                    </div>
                  </div>
                  <button
                    onClick={removePromo}
                    className="text-[#ba1a1a] hover:underline text-[12px] font-bold"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={inputCode}
                    onChange={(e) => setInputCode(e.target.value.toUpperCase())}
                    placeholder="Enter SWEETLOVE"
                    className="flex-1 bg-[#fff8f5] px-3.5 py-2.5 rounded-xl border border-[#ffd1b5] text-[13px] uppercase font-bold text-[#301401] outline-none focus:ring-2 focus:ring-[#8c4963]"
                  />
                  <button
                    type="submit"
                    className="bg-[#8c4963] hover:bg-[#763750] text-white px-4 py-2.5 rounded-xl font-bold text-[13px] transition-colors"
                  >
                    Apply
                  </button>
                </form>
              )}
            </div>

            {/* Price Calculations Breakdown */}
            <div className="space-y-2.5 pt-4 border-t border-[#ffd1b5] text-[14px]">
              <div className="flex items-center justify-between text-[#524347]">
                <span>Items Subtotal</span>
                <span className="font-bold text-[#301401]">${cartSubtotal.toFixed(2)}</span>
              </div>

              {promoApplied && (
                <div className="flex items-center justify-between text-emerald-700 font-semibold">
                  <span>Sweet Discount (15%)</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}

              <div className="flex items-center justify-between text-[#524347]">
                <div className="flex items-center gap-1">
                  <span>Keepsake Insulated Packaging</span>
                  <span
                    className="material-symbols-outlined text-[14px] text-[#765a23]"
                    title="Insulated cake tray + ice packs included"
                  >
                    info
                  </span>
                </div>
                <span className="font-bold text-[#301401]">${packagingFee.toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-between text-[#524347]">
                <span>Local Express Delivery</span>
                <span className="font-bold text-emerald-700">FREE ($0.00)</span>
              </div>

              <div className="flex items-baseline justify-between pt-3 border-t border-[#ffd1b5]">
                <div>
                  <span className="font-headline text-[18px] font-bold text-[#301401] block">
                    Total Amount
                  </span>
                  <span className="text-[11px] text-[#524347]">Taxes & delivery included</span>
                </div>
                <span className="font-headline text-[28px] font-bold text-[#b12500]">
                  ${grandTotal.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Proceed to Checkout Action */}
            <button
              onClick={handlePlaceOrder}
              disabled={isSubmitting}
              className="w-full bg-[#b12500] hover:bg-[#da370d] text-white py-4 rounded-full font-bold text-[16px] shadow-lg shadow-[#b12500]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0.5 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-[20px]">
                    progress_activity
                  </span>
                  <span>Ovens Preparing Your Box...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[20px]">lock</span>
                  <span>Proceed to Sweet Checkout • ${grandTotal.toFixed(2)}</span>
                </>
              )}
            </button>

            {/* Satisfaction Guarantee */}
            <div className="flex items-center justify-center gap-2 text-center text-[12px] text-[#524347] font-semibold">
              <span className="material-symbols-outlined text-[#765a23] text-[18px]">
                verified_user
              </span>
              <span>100% Freshness Guarantee & Secure Checkout</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
